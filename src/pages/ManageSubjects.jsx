import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
const subjectData = {
 
  BSCS:{ 
    1: [
  { name: 'Programming Fundamentals', code: 'CS101', credit: 3, instructor: 'Dr. Ali' },
  { name: 'ICT', code: 'CS102', credit: 2, instructor: 'Dr. Ahmed'},
],
  2: [
    { name: 'Object-Oriented Programming (OOP)',code: 'CS103', credit: 3, instructor: 'Dr. Ahmed'},
    { name: 'Data Structures & Algorithms (DSA)',code: 'CS103', credit: 2, instructor: 'Dr. Ali'},
  ],
  3 : [
    { name: 'Design and Analysis of Algorithms (DAA)',code: 'CS112', credit: 3, instructor: 'Dr. Ahmed' },
    { name: 'Advanced OOP',code: 'CS103', credit: 2, instructor: 'Dr. Ali'},
  ],
  4: [
    { name: 'Database Systems',code: 'CS114', credit: 3, instructor: 'Dr. Ahmed' },
    { name: 'Operating Systems' ,code: 'CS115', credit: 3, instructor: 'Dr. Ahmed'},
  ],
 5: [
    { name: 'Software Engineering',code: 'CS115', credit: 3, instructor: 'Dr. Ahmed'},
    { name: 'Web Engineering',code: 'CS116', credit: 3, instructor: 'Dr. Ahmed'},
  ],
 6: [
    { name: 'Artificial Intelligence' ,code: 'CS117', credit: 3, instructor: 'Dr. Ahmed'},
    { name: 'Computer Networks',code: 'CS118', credit: 3, instructor: 'Dr. Ahmed' },
  ],
  7: [
    { name: 'Machine Learning', code: 'CS149', credit: 4, instructor: 'Dr. Ahmed' },
    { name: 'Information Security',code: 'CS119', credit: 3, instructor: 'Dr. Ahmed' },
  ],
 8: [
    { name: 'Final Year Project', code: 'CS120', credit: 3, instructor: 'Dr. Ahmed' },
    { name: 'Professional Practices' ,code: 'CS104', credit: 2, instructor: 'Dr. Ali'},
  ]
  },
  
  BSIT: { 
     1:[
    { name: 'Introduction to IT' , code: 'IT121', credit: 3, instructor: 'Dr. Ahmed'},
    { name: 'Fundamentals of Programming' ,code: 'IT122', credit: 3, instructor: 'Dr. Ahmed'},
  ],
 2: [
    { name: 'Data Structures' ,code: 'IT123', credit: 3, instructor: 'Dr. Ahmed'},
    { name: 'Web Development',code: 'IT124', credit: 3, instructor: 'Dr. Ahmed'},
  ],
  3: [
    { name: 'Database Management Systems', code: 'IT131', credit: 3, instructor: 'Dr. Ahmed' },
    { name: 'Human Computer Interaction (HCI)',code: 'IT132', credit: 3, instructor: 'Dr. Ahmed' },
  ],
 4: [
    { name: 'Network Fundamentals',code: 'IT133', credit: 3, instructor: 'Dr. Ahmed' },
    { name: 'Information Systems' , code: 'IT134', credit: 3, instructor: 'Dr. Ahmed'},
  ],
5: [
    { name: 'Cloud Computing', code: 'IT135', credit: 3, instructor: 'Dr. Ahmed' },
    { name: 'Mobile App Development',code: 'IT136', credit: 3, instructor: 'Dr. Ahmed' },
  ],
  6: [
    { name: 'Information Security',code: 'IT105', credit: 2, instructor: 'Dr. Ali'},
    { name: 'Software Project Management', code: 'IT161', credit: 4, instructor: 'Dr. Ahmed'},
  ],
  7: [
    { name: 'Big Data Analytics' ,code: 'IT102', credit: 3, instructor: 'Dr. Ahmed'},
    { name: 'Digital Marketing', code: 'IT138', credit: 3, instructor: 'Dr. Ahmed' },
  ],
  8: [
    { name: 'Final Year Project' ,code: 'IT137', credit: 2, instructor: 'Dr. Ali'},
    { name: 'Entrepreneurship', code: 'IT138', credit: 3, instructor: 'Dr. Ahmed' },
  ]
},

  // ------- BSSE -------
  BSSE:{
     1: [
    { name: 'Introduction to Software Engineering', code: 'SE141', credit: 3, instructor: 'Dr. Ahmed' },
    { name: 'Discrete Structures' ,code: 'SE142', credit: 3, instructor: 'Dr. Ahmed'},
  ],
 2: [
    { name: 'Object-Oriented Programming (OOP)', code: 'SE143', credit: 3, instructor: 'Dr. Ahmed' },
    { name: 'Digital Logic Design' ,code: 'SE144', credit: 3, instructor: 'Dr. Ahmed'},
  ],
 3: [
    { name: 'Software Requirements Engineering',code: 'SE107', credit: 2, instructor: 'Dr. Ali' },
    { name: 'Database Systems',code: 'SE145', credit: 3, instructor: 'Dr. Ahmed' },
  ],
  4: [
    { name: 'Software Design & Architecture' ,code: 'SE143', credit: 3, instructor: 'Dr. Ahmed'},
    { name: 'Web Technologies', code: 'SE158', credit: 3, instructor: 'Dr. Ahmed' },
  ],
  5: [
    { name: 'Software Testing and Quality Assurance',code: 'SE108', credit: 2, instructor: 'Dr. Ali'},
    { name: 'Operating Systems' ,code: 'SE156', credit: 4, instructor: 'Dr. Ahmed'},
  ],
  6: [
    { name: 'Human Computer Interaction', code: 'SE146', credit: 3, instructor: 'Dr. Ahmed' },
    { name: 'Formal Methods in Software Engineering' , code: 'SE147', credit: 3, instructor: 'Dr. Ahmed'},
  ],
  7: [
    { name: 'Mobile Application Development' ,code: 'SE151', credit: 3, instructor: 'Dr. Ahmed'},
    { name: 'Information Security',code: 'SE152', credit: 3, instructor: 'Dr. Ahmed' },
  ],
 8: [
    { name: 'Final Year Project' ,code: 'SE153', credit: 3, instructor: 'Dr. Ahmed'},
    { name: 'Professional Ethics in Software Engineering' ,code: 'SE154', credit: 3, instructor: 'Dr. Ahmed'},
  ]
},
};


// Grade calculation based on percentage
const getGradePoint = (marks) => {
  if (marks >= 90) return { grade: 'A+', point: 4.0 };
  if (marks >= 80) return { grade: 'A', point: 3.7 };
  if (marks >= 75) return { grade: 'B+', point: 3.3 };
  if (marks >= 70) return { grade: 'B', point: 3.0 };
  if (marks >= 60) return { grade: 'C', point: 2.7 };
  if (marks >= 50) return { grade: 'D', point: 2.0 };
  return { grade: 'F', point: 0.0 };
};

const ManageSubjects = () => {
  const location = useLocation();
  const { department, semester } = location.state || {};

  const subjects = subjectData[department]?.[semester] || [];

  const [marksData, setMarksData] = useState({});

  const handleMarksChange = (index, value) => {
    const updated = { ...marksData };
    updated[index] = Number(value);
    setMarksData(updated);
  };

  let totalCredit = 0;
  let totalPoints = 0;

  subjects.forEach((subj, index) => {
    const marks = marksData[index];
    if (!isNaN(marks)) {
      const { point } = getGradePoint(marks);
      totalCredit += subj.credit;
      totalPoints += point * subj.credit;
    }
  });

  const cgpa = totalCredit ? (totalPoints / totalCredit).toFixed(2) : 'N/A';

  if (!department || !semester) {
    return (
      <div className="container mt-4">
        <h3>Error: Missing department or semester information.</h3>
        <p>Please access this page via the Students list.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3>Subjects for {department} - Semester {semester}</h3>
      {subjects.length > 0 ? (
        <ul className="list-group mb-4">
          {subjects.map((subject, index) => {
            const marks = marksData[index] || '';
            const { grade, point } = getGradePoint(marks);
            return (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
               <strong>{subject.name}</strong> ({subject.code})<br />
               Instructor: {subject.instructor}<br />
               Credit Hours: {subject.credit}
                 </div>

                <div>
                  <input
                    type="number"
                    className="form-control form-control-sm d-inline-block me-2"
                    placeholder="Enter marks"
                    style={{ width: '100px' }}
                    value={marks}
                    onChange={(e) => handleMarksChange(index, e.target.value)}
                  />
                  {marks !== '' && (
                    <span>
                      Grade: {grade}, Points: {point}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No subjects found for this selection.</p>
      )}
      <h5>CGPA: <span className="badge bg-primary">{cgpa}</span></h5>
    </div>
  );
};

export default ManageSubjects;
