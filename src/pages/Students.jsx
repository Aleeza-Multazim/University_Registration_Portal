import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
function Students() {
  const { students, deleteStudent, setStudentToEdit } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleEdit = (student) => {
    setStudentToEdit(student); // store this student in context
    navigate('/register');
  
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
              <th>CNIC</th>
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
                <td>{student.rollNo}</td> {/* Fix field name */}
                <td>{student.department}</td>
                <td>{student.cnic}</td>
               <td>
  <button onClick={() => handleEdit(student)} className="btn btn-primary btn-sm me-2">
    Edit
  </button>
  <button onClick={() => deleteStudent(student.id)} className="btn btn-danger btn-sm">
    Delete
  </button>
</td>

              </tr>
            ))}
          </tbody>
          <div className = "bottom-right-btn mb-3">
           <button className="btn btn-secondary mb-3" onClick={() => navigate('/register')}> Back to Student Registration Portal
</button>
</div>
        </table>
        
      )}
    </div>
  );
}

export default Students;
