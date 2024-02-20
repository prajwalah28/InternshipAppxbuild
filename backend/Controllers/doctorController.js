const Doctor = require("../models/DoctorSchema");

module.exports.updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body }, // update the fields of user that we want to change
            { new: true } // return the new updated user data
        );

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedDoctor,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update",
        });
    }
};

module.exports.deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        await Doctor.findByIdAndDelete(id);
        
        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete",
        });
    }
};

module.exports.getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id)
        .populate("reviews")
        .select("-password");

        res.status(200).json({
            success: true,
            message: "User found",
            data: doctor,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "No user found",
        });
    }
};

module.exports.getAllDoctor = async (req, res) => {
    try {

        const {query} = req.query
        let doctors;

        if(query){
            doctors = await Doctor.find({
                isApproved: "approved",
                $or:[
                { name: { $regex: query, $options:"i"}},
                {specialization: {$regex: query,$options:"i"}},

                ],

            }).select("-password");
        }else{
            const doctors = await Doctor.find({isApproved:"approved"}).select("-password");
        }
       

        res.status(200).json({
            success: true,
            message: "Users found",
            data: doctors,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not found",
        });
    }
};
