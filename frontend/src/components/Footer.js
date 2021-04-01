import React from "react";
import { Layout } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <Layout>
      <Footer style={{ textAlign: "center" }}>
        Kedai Puchong Emas <CopyrightOutlined /> {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default Footer;
