import { Form, Input, InputNumber, Button,Breadcrumb } from 'antd';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Contactus = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  

  return (
    <div><Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item><Link to ="/home">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Contact us</Breadcrumb.Item>
  </Breadcrumb>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'Details']} label="Details">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
 
};

export default Contactus;