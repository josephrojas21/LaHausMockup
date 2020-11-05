import React from "react";

//styles
import { MenuSider, Container, Navbar } from './styles/app.styles'

// libraries
import { Layout, Avatar } from "antd";
import { MenuOutlined, UserOutlined  } from '@ant-design/icons';

// components
import Header from './components/Header'

const App = () => {
  return (
    <Layout>
      <MenuSider breakpoint="lg" collapsedWidth="0">
        <div>
          <p>Menu</p>
          <MenuOutlined />
        </div>
        <div className="avatarDiv">
          <Avatar size={30} icon={<UserOutlined />} />
        </div>
      </MenuSider>
      <Layout>
        <Navbar >
          <Header/>
        </Navbar>
        <Container style={{ margin: "24px 16px 0" }}>
          <div className="site-layout-background">
            content
          </div>
        </Container>
      </Layout>
    </Layout>
  );
};

export default App;
