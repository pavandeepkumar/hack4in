import React from "react";

const Question = () => {
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
    marginRight: "5px", // Add margin-right for space between buttons
  };

  return (
    <div>
       <p style={{justifyContent:'center',display:'flex',fontSize:'30px'}}>This is a Questionlist table.</p>
  
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Question Name</th>
          <th style={thStyle}>Option 1</th>
          <th style={thStyle}>Option 2</th>
          <th style={thStyle}>Option 3</th>
          <th style={thStyle}>Option 4</th>
          <th style={thStyle}>Question Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={tdStyle}>Maths</td>
          <td style={tdStyle}>This is a maths exam</td>
          <td style={tdStyle}>19/09/2023</td>
          <td style={tdStyle}>easy</td>
          <td style={tdStyle}>easy</td>
          <td style={tdStyle}>
            <button style={buttonStyle}>Edit</button>
            <button style={buttonStyle}>Delete</button>
          </td>
        </tr>
        <tr>
          <td style={tdStyle}>Physics</td>
          <td style={tdStyle}>This is a physics exam</td>
          <td style={tdStyle}>19/09/2023</td>
          <td style={tdStyle}>medium</td>
          <td style={tdStyle}>medium</td>
          <td style={tdStyle}>
            <button style={buttonStyle}>Edit</button>
            <button style={buttonStyle}>Delete</button>
          </td>
        </tr>
        <tr>
          <td style={tdStyle}>Physics</td>
          <td style={tdStyle}>This is a physics exam</td>
          <td style={tdStyle}>19/09/2023</td>
          <td style={tdStyle}>medium</td>
          <td style={tdStyle}>medium</td>
          <td style={tdStyle}>
            <button style={buttonStyle}>Edit</button>
            <button style={buttonStyle}>Delete</button>
          </td>
        </tr>
        <tr>
          <td style={tdStyle}>Physics</td>
          <td style={tdStyle}>This is a physics exam</td>
          <td style={tdStyle}>19/09/2023</td>
          <td style={tdStyle}>medium</td>
          <td style={tdStyle}>medium</td>
          <td style={tdStyle}>
            <button style={buttonStyle}>Edit</button>
            <button style={buttonStyle}>Delete</button>
          </td>
        </tr>
        <tr>
          <td style={tdStyle}>Physics</td>
          <td style={tdStyle}>This is a physics exam</td>
          <td style={tdStyle}>19/09/2023</td>
          <td style={tdStyle}>medium</td>
          <td style={tdStyle}>medium</td>
          <td style={tdStyle}>
            <button style={buttonStyle}>Edit</button>
            <button style={buttonStyle}>Delete</button>
          </td>
        </tr>
        {/* Add more rows here if needed */}
      </tbody>
      </table>
      </div>
  );
};

export default Question;
