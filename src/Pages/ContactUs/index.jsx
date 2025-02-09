import React, { useState } from 'react';
import '/src/Pages/ContactUs/cont.scss'

const ContactUs = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [marks, setMarks] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: ''
  });

  const handleMarksChange = (e) => {
    const { name, value } = e.target;
    setMarks((prevMarks) => ({
      ...prevMarks,
      [name]: value
    }));
  };
  const handleAddStudent = (e) => {
    e.preventDefault();

    if (name && Object.values(marks).every((mark) => mark !== '')) {
      const newStudent = { name, marks: { ...marks } };
      setStudents([...students, newStudent]);

      setName('');
      setMarks({
        subject1: '',
        subject2: '',
        subject3: '',
        subject4: '',
        subject5: ''
      });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className='container'>
      <h2 className='tittle'>Student Marks Entry</h2>
      
      <form onSubmit={handleAddStudent}>
        <div className='main'>
        <div>
          <label>Student Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className='con'>
          <label>Tamil: </label>
          <input
            type="number"
            name="subject1"
            value={marks.subject1}
            onChange={handleMarksChange}
            required
          />
        </div>
        <div className='con'>
          <label>English: </label>
          <input
            type="number"
            name="subject2"
            value={marks.subject2}
            onChange={handleMarksChange}
            required
          />
        </div>
        <div className='con'>
          <label>Maths: </label>
          <input
            type="number"
            name="subject3"
            value={marks.subject3}
            onChange={handleMarksChange}
            required
          />
        </div>
        <div className='con'>
          <label>Science: </label>
          <input
            type="number"
            name="subject4"
            value={marks.subject4}
            onChange={handleMarksChange}
            required
          />
        </div>
        <div className='con'>
          <label>Social Science: </label>
          <input
            type="number"
            name="subject5"
            value={marks.subject5}
            onChange={handleMarksChange}
            required
          />
        </div>
        </div>
        <div className='add'>
        <button type="submit">Add </button>
        </div>
      </form>

      <table border="1" style={{ marginTop: '20px', width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tamil</th>
            <th>English</th>
            <th>Maths</th>
            <th>Science</th>
            <th>Social science</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            const totalMarks = Object.values(student.marks).reduce((acc, curr) => acc + parseInt(curr), 0);
            return (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.marks.subject1}</td>
                <td>{student.marks.subject2}</td>
                <td>{student.marks.subject3}</td>
                <td>{student.marks.subject4}</td>
                <td>{student.marks.subject5}</td>
                <td>{totalMarks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactUs;
