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
    top:0;
    height: 64px;
    background:  rgb(0,209,176);
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
`;

export const Container = styled(Content)`
  .site-layout-background {
    background: #fff;
  }
`;


