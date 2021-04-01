import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  GoldOutlined,
} from "@ant-design/icons";
import { Row, Col, Layout, Typography } from "antd";
import SearchBar from "./SearchBar";

const Header = () => {
  const { Title } = Typography;
  const { Header } = Layout;

  const [current, setCurrent] = useState("");

  return (
    <Layout>
      <Header>
        <Row>
          <Col md={8}>
            <Title level={3} style={{ color: "white", margin: "10px 0px" }}>
              <GoldOutlined /> Puchong Emas
            </Title>
          </Col>
          <Col md={8}>
            <SearchBar />
          </Col>
          <Col md={8}>
            <Menu
              onClick={(e) => setCurrent(e.target)}
              selectedKeys={current}
              mode="horizontal"
              theme="dark"
            >
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="" />
                Home
              </Menu.Item>
              <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                <Link to="/cart" />
                Cart
              </Menu.Item>
              <Menu.Item key="login" icon={<UserOutlined />}>
                <Link to="/login" />
                Login
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default Header;
