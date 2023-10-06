import React from 'react';

const Examlist = () => {
  const tableStyle = {
    width: '80%',
    borderCollapse: 'collapse',
    margin: '20px auto',
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  };

  const tdStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Exam Name</th>
          <th style={thStyle}>Exam Description</th>
          <th style={thStyle}>Exam Creation Date</th>
          <th style={thStyle}>Exam Level</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={tdStyle}>Maths</td>
          <td style={tdStyle}>This is a maths exam</td>
          <td style={tdStyle}>19/09/2023</td>
          <td style={tdStyle}>easy</td>
        </tr>
        <tr>
          <td style={tdStyle}>Physics</td>
          <td style={tdStyle}>This is a maths exam</td>
          <td style={tdStyle}>19/09/2023</td>
          <td style={tdStyle}>easy</td>
        </tr>
        <tr>
          <td style={tdStyle}>Biology</td>
          <td style={tdStyle}>This is a maths exam</td>
          <td style={tdStyle}>19/09/2023</td>
          <td style={tdStyle}>easy</td>
        </tr>
        <tr>
          <td style={tdStyle}>Sanskrite</td>
          <td style={tdStyle}>This is a maths exam</td>
          <td style={tdStyle}>19/09/2023</td>
          <td style={tdStyle}>easy</td>
        </tr>
        {/* Add more rows here if needed */}
      </tbody>
    </table>
  );
}

export default Examlist;
