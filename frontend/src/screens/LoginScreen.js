import React from "react";
import { Row, Col, Form, Input, Button, Checkbox, Typography } from "antd";
import { Link } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const style = {
  style: {
    marginTop: "20px",
    paddingBottom: "20px",
  },
};

const LoginScreen = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row>
      <Col {...style} span={8} offset={6}>
        <Typography.Title level={3}>Login</Typography.Title>
      </Col>
      <Col span={8} offset={6}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
            <Button type="primary" htmlType="submit" style={{ float: "right" }}>
              Submit
            </Button>
          </Form.Item>

          <Form.Item {...tailLayout}>
            New to here? Register <Link to="/register">Here</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginScreen;
