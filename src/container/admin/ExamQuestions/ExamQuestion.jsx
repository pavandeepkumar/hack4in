import React, { useState } from "react";
import { Input, Radio, Space, Button, Alert, message } from "antd";
import "./ExamQuestion.css";
import { useNavigate } from "react-router";

const Qobj = [
    {
        Que: "Question 1: What is the main character in a story?",
        Opt1: "Hero",
        Opt2: "Villain",
        Opt3: "Supporting Character",
        Opt4: "Antagonist",
    },
    {
        Que: "Question 2: What is the opposite of 'good' in a story?",
        Opt1: "Bad",
        Opt2: "Evil",
        Opt3: "Kind",
        Opt4: "Nice",
    },
    {
        Que: "Question 3: What is the climax of a story?",
        Opt1: "The most exciting part",
        Opt2: "The beginning",
        Opt3: "The end",
        Opt4: "The middle",
    },
    // Add more questions here
    {
        Que: "Question 4: What comes at the end of a book?",
        Opt1: "The last chapter",
        Opt2: "The title page",
        Opt3: "The author's name",
        Opt4: "The table of contents",
    },
    {
        Que: "Question 5: Who is the main character in 'Harry Potter'?",
        Opt1: "Harry Potter",
        Opt2: "Ron Weasley",
        Opt3: "Hermione Granger",
        Opt4: "Voldemort",
    },
    {
        Que: "Question 6: Who is the main character in 'Harry Potter'?",
        Opt1: "Harry Potter",
        Opt2: "Ron Weasley",
        Opt3: "Hermione Granger",
        Opt4: "Voldemort",
    },
    {
        Que: "Question 7: Who is the main character in 'Harry Potter'?",
        Opt1: "Harry Potter",
        Opt2: "Ron Weasley",
        Opt3: "Hermione Granger",
        Opt4: "Voldemort",
    },
    {
        Que: "Question 8: Who is the main character in 'Harry Potter'?",
        Opt1: "Harry Potter",
        Opt2: "Ron Weasley",
        Opt3: "Hermione Granger",
        Opt4: "Voldemort",
    },
    {
        Que: "Question 9: Who is the main character in 'Harry Potter'?",
        Opt1: "Harry Potter",
        Opt2: "Ron Weasley",
        Opt3: "Hermione Granger",
        Opt4: "Voldemort",
    },
    {
        Que: "Question 10: Who is the main character in 'Harry Potter'?",
        Opt1: "Harry Potter",
        Opt2: "Ron Weasley",
        Opt3: "Hermione Granger",
        Opt4: "Voldemort",
    },
    {
        Que: "Question 11: Who is the main character in 'Harry Potter'?",
        Opt1: "Harry Potter",
        Opt2: "Ron Weasley",
        Opt3: "Hermione Granger",
        Opt4: "Voldemort",
    },
    {
        Que: "Question 12: Who is the main character in 'Harry Potter'?",
        Opt1: "Harry Potter",
        Opt2: "Ron Weasley",
        Opt3: "Hermione Granger",
        Opt4: "Voldemort",
    },
    {
        Que: "Question 13: Who is the main character in 'Harry Potter'?",
        Opt1: "Harry Potter",
        Opt2: "Ron Weasley",
        Opt3: "Hermione Granger",
        Opt4: "Voldemort",
    },
    // Add more questions here
];

const ExamQuestions = () => {
    const [values, setValues] = useState(Qobj.map(() => null));
    const navigate = useNavigate();// Initialize with null

    const onChange = (e, index) => {
        const newValues = [...values];
        newValues[index] = e.target.value;
        setValues(newValues);
    };
    const onsubmitHandler = () => {
        message.success('Form submitted');
        navigate('/students');
    }


    return (
        <>
            <div className="q_container bg-slate-200 p-10">
                <h1 className="text-3xl font-bold">Exam Questions</h1>
                <ol className="list-decimal px-8 py-4" >
                    <li>All questions are compulsory</li>
                    <li>Each question has 4 options</li>
                    <li>Each question has 1 marks</li>
                </ol>

                {Qobj.map((elem, index) => (
                    <div className="flex flex-col justify-center align-middle mt-10"><div key={index} className=""><p>{elem.Que}</p></div>

                        <div>
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
                        </div>
                        <hr />
                    </div>
                ))}
                <div className="flex">
                    <button className="submit w-1/2" onClick={() => navigate(-1)}>cancel</button>
                    <button className="submit w-1/2" onClick={onsubmitHandler} >Submit</button>
                </div>

            </div>

        </>
    );
};

export default ExamQuestions;
