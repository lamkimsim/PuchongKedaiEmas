import React, { useState } from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  Typography,
  Select,
  DatePicker,
} from "antd";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [form] = Form.useForm();

  const submitHandler = () => {
    const form = {
      fullName,
      gender,
      dob,
      number,
      email,
      password,
      confirmPassword,
    };

    console.log("Received values of form: ", form);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      +60
    </Form.Item>
  );

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Row>
      <Col
        span={8}
        offset={6}
        style={{ marginTop: "20px", paddingBottom: "20px" }}
      >
        <Typography.Title level={3}>Register New Account</Typography.Title>
      </Col>
      <Col span={8} offset={6}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={submitHandler}
          initialValues={{
            prefix: "60",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="fullname"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select
              placeholder="Select an option"
              value={gender}
              onChange={(e) => setGender(e)}
              allowClear
            >
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Date Of Birth"
            name="dob"
            rules={[{ required: true }]}
          >
            <DatePicker value={dob} onChange={(e) => setDob(new Date(e._d))} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter Phone Number"
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              value={email}
              placeholder="Enter Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter Confirmed Password"
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            Already Have An Account? Login <Link to="/login">Here</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default RegisterScreen;
