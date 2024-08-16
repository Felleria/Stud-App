import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { FaEdit, FaSave, FaTrashAlt, FaTimes } from 'react-icons/fa';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toUTCString();
};

const parseDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: '',
    enrollment_date: '',
    date_of_birth: '',
    gender: '',
    phone_number: '',
    course_id: 1,
    user_id: 3
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://127.0.0.1:5555/students');
      if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
      const data = await response.json();
      setStudents(data.students || []);
    } catch (error) {
      console.error('Error fetching students:', error.message);
      setError('Failed to fetch students. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddStudent = async () => {
    if (!validateStudent(newStudent)) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5555/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent),
      });

      if (!response.ok) throw new Error(`Failed to add student: ${response.statusText}`);
      const addedStudent = await response.json();
      setStudents([...students, addedStudent]);
      setNewStudent({
        name: '',
        enrollment_date: '',
        date_of_birth: '',
        gender: '',
        phone_number: '',
        course_id: 1,
        user_id: 3
      });
      setError(null);
    } catch (error) {
      console.error('Error adding student:', error.message);
      setError('Failed to add student. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditStudent = (student) => setEditingStudent(student);

  const handleSaveStudent = async () => {
    if (!validateStudent(editingStudent)) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:5555/students/${editingStudent.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingStudent),
      });

      if (!response.ok) throw new Error(`Failed to update student: ${response.statusText}`);
      const updatedStudent = await response.json();
      setStudents(students.map(student =>
        student.id === editingStudent.id ? updatedStudent : student
      ));
      setEditingStudent(null);
      setError(null);
    } catch (error) {
      console.error('Error updating student:', error.message);
      setError('Failed to update student. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteStudent = async (studentId) => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:5555/students/${studentId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error(`Failed to delete student: ${response.statusText}`);
      setStudents(students.filter(student => student.id !== studentId));
      setError(null);
    } catch (error) {
      console.error('Error deleting student:', error.message);
      setError('Failed to delete student. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const validateStudent = (student) => {
    return student.name && student.gender && student.phone_number;
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Students</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Add New Student</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Enrollment Date (e.g., Thu, 15 Aug 2024 00:00:00 GMT)"
            value={newStudent.enrollment_date}
            onChange={(e) => setNewStudent({ ...newStudent, enrollment_date: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Date of Birth (e.g., Sat, 01 Jan 2000 00:00:00 GMT)"
            value={newStudent.date_of_birth}
            onChange={(e) => setNewStudent({ ...newStudent, date_of_birth: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Gender"
            value={newStudent.gender}
            onChange={(e) => setNewStudent({ ...newStudent, gender: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={newStudent.phone_number}
            onChange={(e) => setNewStudent({ ...newStudent, phone_number: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
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
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
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
              <tr key={student.id} className="border-t">
                <td className="py-2 px-4 border-r">{student.id}</td>
                <td className="py-2 px-4 border-r">
                  {editingStudent?.id === student.id ? (
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
                  {editingStudent?.id === student.id ? (
                    <input
                      type="text"
                      value={editingStudent.enrollment_date}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, enrollment_date: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    formatDate(student.enrollment_date)
                  )}
                </td>
                <td className="py-2 px-4 border-r">
                  {editingStudent?.id === student.id ? (
                    <input
                      type="text"
                      value={editingStudent.date_of_birth}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, date_of_birth: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    formatDate(student.date_of_birth)
                  )}
                </td>
                <td className="py-2 px-4 border-r">
                  {editingStudent?.id === student.id ? (
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
                  {editingStudent?.id === student.id ? (
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
                <td className="py-2 px-4 border-r">
                  {editingStudent?.id === student.id ? (
                    <>
                      <button
                        onClick={handleSaveStudent}
                        className="bg-green-500 text-white px-2 py-1 rounded-lg shadow hover:bg-green-600"
                      >
                        <FaSave />
                      </button>
                      <button
                        onClick={() => setEditingStudent(null)}
                        className="bg-red-500 text-white px-2 py-1 rounded-lg shadow hover:bg-red-600 ml-2"
                      >
                        <FaTimes />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditStudent(student)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded-lg shadow hover:bg-yellow-600"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-lg shadow hover:bg-red-600 ml-2"
                      >
                        <FaTrashAlt />
                      </button>
                    </>
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
