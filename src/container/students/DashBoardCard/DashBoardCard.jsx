import React from 'react';
import "./DashboardCard.css"
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
const DashBoardCard = () => {

    const examsArray = [
        {
            examName: "JavaScript",
            totalMarks: 100,
            totalQuestions: 50,
            time: "2 hours",
        },
        {
            examName: "Python",
            totalMarks: 150,
            totalQuestions: 75,
            time: "3 hours",
        },
        {
            examName: "React",
            totalMarks: 120,
            totalQuestions: 60,
            time: "2.5 hours",
        },
        {
            examName: "Antd",
            totalMarks: 120,
            totalQuestions: 60,
            time: "2.5 hours",
        },
        {
            examName: "Tailwind",
            totalMarks: 120,
            totalQuestions: 60,
            time: "2.5 hours",
        },
        {
            examName: "Bootsrap",
            totalMarks: 120,
            totalQuestions: 60,
            time: "2.5 hours",
        },
        {
            examName: "Java",
            totalMarks: 120,
            totalQuestions: 60,
            time: "2.5 hours",
        },
        {
            examName: "Node",
            totalMarks: 120,
            totalQuestions: 60,
            time: "2.5 hours",
        },
        {
            examName: "English",
            totalMarks: 120,
            totalQuestions: 60,
            time: "2.5 hours",
        },
        {
            examName: "Hindi",
            totalMarks: 120,
            totalQuestions: 60,
            time: "2.5 hours",
        },
        // Add more exams here
    ];

    return (


        <Row gutter={[16, 16]}>
            {examsArray.map((exam) => (
                <Col span={8} >
                    <Link to="/questions">
                        <Card title={exam.examName} className='ExamCard text-white' bordered={false} style={{ backgroundColor: "#4096ff" }}>
                            <h3>Total Marks:{exam.totalMarks}</h3>
                            <h3>Questions:{exam.totalQuestions}</h3>
                            <h3>Time:{exam.time}</h3>
                        </Card>
                    </Link>
                </Col>
            ))}


        </Row>
    )
};
export default DashBoardCard;