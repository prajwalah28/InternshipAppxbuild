const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema.js");
const Doctor = require("../models/DoctorSchema.js");

module.exports.authenticate = async (req, res, next) => {
    const authToken = req.headers.authorization;
    if (!authToken || req.headers.authorization);

    if (!authToken || !authToken.startsWith("Bearer")) {
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }
    try {
        const token = authToken.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.userId = decoded.id;
        req.role = decoded.role;
        next();
    } catch (err) {
        // Handle error if necessary
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token is expired' });
        }

        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};

module.exports.restrict = (roles) => async (req, res, next) => {
    const userId = req.userId;
    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if (patient) {
        user = patient;
    }
    if (doctor) {
        user = doctor;
    }

    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: "You are not authorized" });
    }

    next();
};
