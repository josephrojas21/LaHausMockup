import styled from 'styled-components';
import { Layout } from "antd";

const { Header, Content, Sider } = Layout;

export const MenuSider = styled(Sider)`
  min-width: unset !important;
  max-width: 6rem !important;
  background-color: rgb(0,209,176);

  p {
    font-size: 1.2rem;
    margin: 1rem 0 0 0;
  }

  .ant-layout-sider-children{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    @media only screen and (max-width: 990px) {
      display: none;
    }
  }

  .ant-layout-sider-zero-width-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 90px;
    background: rgb(0,209,176);
  }

  .anticon{
    font-size: 2.5rem;
  }

  .avatarDiv {
    align-self: center;
    margin-bottom: 2rem;
  }
`;

export const Navbar = styled(Header)`
  background: #fff;
  height: 9rem;
  position: relative;
  padding: 0 6rem;
`;

export const Container = styled(Content)`
  margin: 2.4rem 6rem;

  @media only screen and (max-width: 750px) {
    margin: 2.4rem 3rem;
  }
 

  .site-layout-background {
    background: #fff;
    border-radius: 1rem;
    height: 100%;
    overflow: auto;
  }

  .scrollDiv{
    overflow-y: auto;
    overflow-x: hidden;
    height: 86%;
  }

  .scrollDiv::-webkit-scrollbar-track {
    box-shadow: #FFFFFF;
    border-radius: 1.5px;
    background-color: #FFFFFF;
  }

  .scrollDiv::-webkit-scrollbar {
    width: 4px;
    background-color: #FFFFFF;
  }

  .scrollDiv::-webkit-scrollbar-thumb {
    border-radius: 1.5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: #FFFFFF;
    background-color: #f3f3f3;
  }
`;


