import { Form, Input, Button, Checkbox,Breadcrumb,Upload, } from 'antd';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { UploadOutlined} from '@ant-design/icons';
const Submit = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item><Link to ="/home">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Submit</Breadcrumb.Item>
  </Breadcrumb>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="Title"
        rules={[
          {
            required: true,
            message: 'Please input the title!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Author"
        name="Author"
        rules={[
          {
            required: true,
            message: 'Please input the author!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Srouce"
        name="Source"
        rules={[
          {
            required: true,
            message: 'Please input the source!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Year"
        name="Public the Year"
        rules={[
          {
            required: true,
            message: 'Please input the public year!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="DOI"
        name="DOI"
        rules={[
          {
            required: true,
            message: 'Please input the DOI!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>Submit</Button>
      </Form.Item>
      <Form.Item
        name="Upload"
        label="Article Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

     
    </Form>
    </div>
  );
};

export default Submit;