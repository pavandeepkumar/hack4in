import React from "react";

const Result = () => {
  const tableStyle = {
    width: "80%",
    borderCollapse: "collapse",
    margin: "20px auto",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  };

  const tdStyle = {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  };

  const buttonStyle = {
    padding: "5px 10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginRight: "5px", 
  };

    return (
        <div>
      <p style={{justifyContent:'center',display:'flex',fontSize:'30px'}}>This is a Result table.</p>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>User Name</th>
          <th style={thStyle}>User Email</th>
          <th style={thStyle}>Option</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={tdStyle}>Sunil</td>
          <td style={tdStyle}>Sunil@gmail.com</td>
          <td style={tdStyle}>
            <button style={buttonStyle}>Edit</button>
            <button style={buttonStyle}>Delete</button>
          </td>
        </tr>
        <tr>
          <td style={tdStyle}>Sunil</td>
          <td style={tdStyle}>Sunil@gmail.com</td>
          <td style={tdStyle}>
            <button style={buttonStyle}>Edit</button>
            <button style={buttonStyle}>Delete</button>
          </td>
        </tr>
        <tr>
          <td style={tdStyle}>Sunil</td>
          <td style={tdStyle}>Sunil@gmail.com</td>
          <td style={tdStyle}>
            <button style={buttonStyle}>Edit</button>
            <button style={buttonStyle}>Delete</button>
          </td>
        </tr>
      </tbody>
            </table>
            </div>
  );
};

export default Result;
