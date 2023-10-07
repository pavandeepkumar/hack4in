import React, { useState } from 'react';
// import "./students.css"
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

// import Faculty from "./Components/Faculty";
// import Administration from "./Components/Administration";
import { useNavigate } from 'react-router-dom';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import DashBoardCard from '../DashBoardCard/DashBoardCard';
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout style={{ minHeight: '100vh' }} className='mt-16 bg-cyan-300'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <>
                                <p onClick={() => navigate('/')}>Dashboard</p>
                            </>,

                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: <>
                                <p onClick={() => navigate('/students')}>Students</p>
                            </>
                        },
                        {
                            key: '3',
                            icon: <UserOutlined />,
                            label: <>
                                <p onClick={() => navigate('/login')}>Login</p>
                            </>

                        },
                        {
                            key: '4',
                            icon: <UserOutlined />,
                            label: <>
                                <p onClick={() => navigate('/exam')}>ExamForm</p>
                            </>
                        },
                        {
                            key: '5',
                            icon: <UserOutlined />,
                            label: <>
                                <p onClick={() => navigate('/result')}>StudentResult List</p>
                            </>
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,

                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <DashBoardCard />
                </Content>
            </Layout>
        </Layout>
    );
};
export default Dashboard;