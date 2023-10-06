import React, { useState } from "react";
import { Input, Radio, Space ,Button} from "antd";
import "./ExamQuestions.css";

const Qobj = [
  {
    Que: "ghjklhgfdghjkjhgfhjkhgfghj",
    Opt1: "hero",
    Opt2: "Villain",
    Opt3: "middle",
    Opt4: "End",
  },
  {
    Que: "ghjklhgfdghjkjhgfhjkhgfghj",
    Opt1: "hero",
    Opt2: "Villain",
    Opt3: "middle",
    Opt4: "End",
  },
  {
    Que: "ghjklhgfdghjkjhgfhjkhgfghj",
    Opt1: "hero",
    Opt2: "Villain",
    Opt3: "middle",
    Opt4: "End",
  },
  {
    Que: "ghjklhgfdghjkjhgfhjkhgfghj",
    Opt1: "hero",
    Opt2: "Villain",
    Opt3: "middle",
    Opt4: "End",
  },
  {
    Que: "ghjklhgfdghjkjhgfhjkhgfghj",
    Opt1: "hero",
    Opt2: "Villain",
    Opt3: "middle",
    Opt4: "End",
  },
  {
    Que: "ghjklhgfdghjkjhgfhjkhgfghj",
    Opt1: "hero",
    Opt2: "Villain",
    Opt3: "middle",
    Opt4: "End",
  },
  {
    Que: "ghjklhgfdghjkjhgfhjkhgfghj",
    Opt1: "hero",
    Opt2: "Villain",
    Opt3: "middle",
    Opt4: "End",
  },
  
];
const ExamQuestions = () => {
  const [values, setValues] = useState(Qobj.map(() => null)); // Initialize with null

  const onChange = (e, index) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);
  };

  

  return (
    <>
    <div className="container">
      {Qobj.map((elem, index) => (
        <div key={index}>
          <p>{elem.Que}</p>
          <Radio.Group
          
          onChange={(e) => onChange(e, index)}
          value={values[index]}
          className="options"
          >
            <Space direction="vertical">
              <Radio value={1} className="Options1">{elem.Opt1}</Radio>
              <Radio value={2} className="Options1">{elem.Opt2}</Radio>
              <Radio value={3} className="Options1">{elem.Opt3}</Radio>
              <Radio value={4} className="Options1">{elem.Opt4}</Radio>
            </Space>
          </Radio.Group>
          <hr />
        </div>
      ))}

    </div>
      <button type="submit" className="button">Submit</button>
      <button type="reset" className="button">Reset</button>
      </>
  );
};

export default ExamQuestions;
