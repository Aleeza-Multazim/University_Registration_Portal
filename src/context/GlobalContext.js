// src/context/GlobalContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const GlobalContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState(null); // 👈 added this line

  // Add student
  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  // Update student
  const updateStudent = (updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setStudentToEdit(null); // 👈 clear after update
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        students,
        addStudent,
        deleteStudent,
        studentToEdit,
        setStudentToEdit,
        updateStudent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
