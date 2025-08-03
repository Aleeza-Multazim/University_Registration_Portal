import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

function Students() {
  const { students, deleteStudent, setStudentToEdit } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleEdit = (student) => {
    setStudentToEdit(student);
    navigate('/register');
  };

  const handleManageSubjects = (student) => {
   navigate(`/students/${student.id}/subjects`, {
  state: {
    department: student.department,
    semester: student.semester,
  },
});

  };

  return (
    <div className="container-mt-5">
      <h2 className="mb-4 text-center">Registered Students</h2>

      {students.length === 0 ? (
        <p className="text-center">No students registered yet.</p>
      ) : (
        <table className="table table-bordered shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Father Name</th>
              <th>Roll Number</th>
              <th>Department</th>
              <th>Semester</th>
              <th>CNIC</th>
              <th>Manage Subjects</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>
                  {student.image ? (
                    <img
                      src={URL.createObjectURL(student.image)}
                      alt="Student"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  ) : (
                    'No Image'
                  )}
                </td>
                <td>{student.name}</td>
                <td>{student.fatherName}</td>
                <td>{student.rollNo}</td>
                <td>{student.department}</td>
                <td>{student.semester}</td>
                <td>{student.cnic}</td>
                <td>
                  <button
                    onClick={() => handleManageSubjects(student)}
                    className="btn btn-success btn-sm"
                  >
                    Manage Subjects
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(student)}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="bottom-right-btn mb-3">
        <button className="btn btn-secondary mb-3" onClick={() => navigate('/register')}>
          Back to Student Registration Portal
        </button>
      </div>
    </div>
  );
}

export default Students;
