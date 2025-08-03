// src/pages/Register.jsx
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

function Register() {
  const navigate = useNavigate();
  const { addStudent, studentToEdit, updateStudent, setStudentToEdit } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    id: null,
    name: '',
    fatherName: '',
    rollNo: '',
    department: '',
    cnic: '',
    semester: '',
    image: null,
  });

  useEffect(() => {
    if (studentToEdit) {
      setFormData(studentToEdit);
    }
  }, [studentToEdit]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.fatherName) {
      alert('Please fill in required fields');
      return;
    }

    if (formData.id) {
      updateStudent(formData);
    } else {
      const newStudent = { ...formData, id: Date.now() };
      addStudent(newStudent);
    }

    // Clear form
    setFormData({
      id: null,
      name: '',
      fatherName: '',
      rollNo: '',
      department: '',
      cnic: '',
      semester: '',
      image: null,
    });

    setStudentToEdit(null); 
    navigate('/students');  
  };

  return (
    <div className="container-mt-5">
      <h2 className="mb-4 text-center">Student Registration Portal</h2>



      <form onSubmit={handleSubmit} className="border-p-4-rounded-shadow-sm-bg-light">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Father Name</label>
          <input
            type="text"
            name="fatherName"
            className="form-control"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Roll Number</label>
          <input
            type="text"
            name="rollNo"
            className="form-control"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            name="department"
            className="form-control"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">CNIC</label>
          <input
            type="text"
            name="cnic"
            className="form-control"
            value={formData.cnic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Semester</label>
          <input
            type="text"
            name="semester"
            className="form-control"
            value={formData.semester}
            onChange={handleChange}
            required
            />
          </div>

        <div className="mb-3">
          <label className="form-label">Upload Picture</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="form-control"
            onChange={handleChange}
            required={!formData.id} // required only for new student
          />
        </div>

       
        {formData.image && typeof formData.image === 'object' && (
          <div className="mb-3">
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
              height="100"
            />
          </div>
        )}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            {formData.id ? 'Update Student' : 'Submit'}
          </button>
        </div>

        
      </form>
    </div>
  );
}

export default Register;
