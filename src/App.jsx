import React from "react";

//styles
import { MenuSider, Container, Navbar } from './styles/app.styles'

// libraries
import { Layout, Avatar } from "antd";
import { MenuOutlined, UserOutlined  } from '@ant-design/icons';

// components
import Header from './components/Header'
import InputData from './components/InputData'
import Filters from './components/Filters'
import Aptos from './components/Aptos'

const App = () => {
  return (
    <Layout style={{height: '100vh'}}>
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
        <Container >
          <div className="site-layout-background">
            <InputData />
            <div className="scrollDiv">
              <Filters />
              <Aptos />
            </div>
          </div>
        </Container>
      </Layout>
    </Layout>
  );
};

export default App;
