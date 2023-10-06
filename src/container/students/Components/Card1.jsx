import React from 'react';
import "./Card1.css"
import { Card, Col, Row } from 'antd';
const App = () => (
  <Row gutter={16}>
    <Col span={8} >
      <Card title="Exam Name" bordered={false} className='ExamCard' style={{backgroundColor:"#4096ff",color:"white"}}>
        <h3>Total Marks:</h3>
        <h3>Questions:</h3>
        <h3>Time:</h3>
      </Card>
    </Col>
    <Col span={8} >
      <Card title="Exam Name" className='ExamCard' bordered={false} style={{backgroundColor:"#4096ff",color:"white"}}>
        <h3>Total Marks:</h3>
        <h3>Questions:</h3>
        <h3>Time:</h3>
      </Card>
    </Col>
    <Col span={8} >
      <Card title="Exam Name" className='ExamCard' bordered={false} style={{backgroundColor:"#4096ff",color:"white"}}>
        <h3>Total Marks:</h3>
        <h3>Questions:</h3>
        <h3>Time:</h3>
      </Card>
    </Col>
    
  </Row>
);
export default App;