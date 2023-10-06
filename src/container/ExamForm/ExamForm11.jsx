import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";
 // Import your custom CSS for styling
import "./ExamForms.css"

const { Option } = Select;

const ExamForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="container">
      <Form form={form} onFinish={onFinish} layout="vertical">
        <h1>Create Exam</h1>
        <Form.Item
          label="Subject Name"
          name="subjectName"
          rules={[
            {
              required: true,
              message: "Please enter the subject name",
            },
          ]}
        >
          <Input placeholder="Subject Name" />
        </Form.Item>
        <Form.Item
          label="Exam Description"
          name="examDescription"
          rules={[
            {
              required: true,
              message: "Please enter the exam description",
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Exam Description"
          />
        </Form.Item>
        <Form.Item
          label="Exam Level"
          name="examLevel"
          rules={[
            {
              required: true,
              message: "Please select the exam level",
            },
          ]}
        >
          <Select placeholder="Select Exam Level">
            <Option value="easy">Easy</Option>
            <Option value="medium">Medium</Option>
            <Option value="hard">Hard</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Total Questions"
          name="totalQuestions"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please enter a valid number of questions",
            },
          ]}
        >
          <Input type="number" placeholder="Total Questions" />
        </Form.Item>
        <Form.Item
          label="Total Marks"
          name="totalMarks"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please enter a valid total marks",
            },
          ]}
        >
          <Input type="number" placeholder="Total Marks" />
        </Form.Item>
        <Form.Item
          label="Pass Marks"
          name="passMarks"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please enter a valid pass marks",
            },
          ]}
        >
          <Input type="number" placeholder="Pass Marks" />
        </Form.Item>
        <Form.Item className="Buttons">
          <Button  htmlType="submit">
            Add
          </Button>
          <span>

          <Button >Close</Button>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ExamForm;
