import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { TailSpin } from 'react-loader-spinner';
import { FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:5555/students');
      const data = await response.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching students:', error);
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddStudent = () => {
    const newStudent = {
      student_id: Date.now(),
      name: '',
      enrollment_date: '',
      date_of_birth: '',
      gender: '',
      phone_number: '',
    };
    setStudents([...students, newStudent]);
    setEditingStudent(newStudent);
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
  };

  const handleDeleteStudent = async (studentId) => {
    try {
      setLoading(true);
      const response = await fetch(`http://127.0.0.1:5555/students/${studentId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setStudents(students.filter(student => student.student_id !== studentId));
      } else {
        console.error('Failed to delete student');
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveStudent = async (studentId, updatedStudent) => {
    try {
      setLoading(true);
      const response = await fetch(`http://127.0.0.1:5555/students/${studentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStudent),
      });
      if (response.ok) {
        const updatedData = await response.json();
        setStudents(
          students.map(student =>
            student.student_id === studentId ? updatedData : student
          )
        );
        setEditingStudent(null);

        // Send email notification to the student
        if (updatedStudent.email) {
          sendEmailNotification(updatedStudent.email, updatedStudent.name);
        }
      } else {
        console.error('Failed to update student');
      }
    } catch (error) {
      console.error('Error updating student:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  const sendEmailNotification = (email, name) => {
    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const userId = 'your_user_id';
    const templateParams = {
      to_name: name,
      to_email: email,
      message: `Dear ${name}, you have been successfully added to the Study Sphere platform as a student. Welcome aboard!`,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send email...', error);
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Students</h1>
      <div className="mb-4">
        <button
          onClick={handleAddStudent}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Add Student
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <TailSpin color="blue" radius="8px" width={50} height={50} />
        </div>
      ) : (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Student ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Enrollment Date</th>
              <th className="py-2 px-4 border-b">Date of Birth</th>
              <th className="py-2 px-4 border-b">Gender</th>
              <th className="py-2 px-4 border-b">Phone Number</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.student_id} className="border-t">
                <td className="py-2 px-4 border-r">{student.student_id}</td>
                <td className="py-2 px-4 border-r">
                  {editingStudent?.student_id === student.student_id ? (
                    <input
                      type="text"
                      value={editingStudent.name}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, name: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td className="py-2 px-4 border-r">
                  {editingStudent?.student_id === student.student_id ? (
                    <input
                      type="date"
                      value={editingStudent.enrollment_date}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, enrollment_date: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    student.enrollment_date
                  )}
                </td>
                <td className="py-2 px-4 border-r">
                  {editingStudent?.student_id === student.student_id ? (
                    <input
                      type="date"
                      value={editingStudent.date_of_birth}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, date_of_birth: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    student.date_of_birth
                  )}
                </td>
                <td className="py-2 px-4 border-r">
                  {editingStudent?.student_id === student.student_id ? (
                    <input
                      type="text"
                      value={editingStudent.gender}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, gender: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    student.gender
                  )}
                </td>
                <td className="py-2 px-4 border-r">
                  {editingStudent?.student_id === student.student_id ? (
                    <input
                      type="text"
                      value={editingStudent.phone_number}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, phone_number: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    student.phone_number
                  )}
                </td>
                <td className="py-2 px-4">
                  {editingStudent?.student_id === student.student_id ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSaveStudent(student.student_id, editingStudent)}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
                      >
                        <FaSave />
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditStudent(student)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.student_id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageStudents;

