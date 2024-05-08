import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import './Download.css';

const Downloadpdf = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    age: '',
    weight: '',
    gender: '',
    message: '',
    hospital: 'Ghanshyam Baal Rugnaalay'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const doc = new jsPDF();

    doc.setFont('Open Sans');
    doc.rect(10, 10, 190, 278);
    doc.setFontSize(15);
    doc.text(80, 30, `${formData.hospital}`);
    doc.text(20, 45, `Name: ${formData.name}`);
    doc.text(20,60, `Age: ${formData.age}`);
    doc.text(20, 75, `Email: ${formData.email}`);
    doc.text(20, 90, `Mobile No.: ${formData.number}`);
    doc.text(20, 105, `Gender: ${formData.gender}`);
    doc.text(20, 120, `Weight: ${formData.weight}`);
    doc.text(20, 135, `Reason: ${formData.message}`);
    

    doc.save('form_data.pdf');
  };

  return (
    <div className="receiptForm">
      <form onSubmit={handleSubmit}>
        <div className="heading">
          <label>
            <input
              style={{ borderWidth: 0, width: 400 }}
              type="text"
              name="hospital"
              value={formData.hospital}
              readOnly="true"
            />
          </label>
        </div>
        <br></br>
        <div className="data">
          <label>
            Name :
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
          </label>
        </div>
        <br />
        <div className="data">
          <label>
            E-mail:   
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Mobile:
            <input type="number" name="number" value={formData.number} onChange={handleChange} />
          </label>
        </div>
        <br />
        <div className="data">
          <label>
            Gender:
            <input type="text" name="gender" value={formData.gender} onChange={handleChange} style={{marginLeft: 2}} />
          </label>
          <label>
            Weight:
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
          </label>
        </div>
        <br />
        <div className="data">
          <label>
            Reason:
          </label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Download Receipt</button>
      </form>
    </div>
  );
};

export default Downloadpdf;
