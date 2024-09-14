import React, { useState } from 'react';
import { Layout, Menu, Row, Col, Progress, Input, List, Button, Typography } from 'antd';
import {
  HomeOutlined,
  SearchOutlined,
  BarChartOutlined,
  BellOutlined,
  UploadOutlined,
  UserOutlined,
  SettingOutlined,
  PlayCircleOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  RetweetOutlined,
  ShareAltOutlined,
  CloseOutlined,
  PlusOutlined,
  HeartOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import './App.css'; // Make sure to create this file for custom styles
import NowPlaying from './components/NowPlaying';
import AudioPlayer from './components/AudioPlayer';
import Comments from './components/Comments';
import UpNext from './components/UpNext';
import { Icon } from '@iconify/react';
import SimilarTaskes from './components/SimilarTaskes';


const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [section, setSection] = useState('taskes');

  return (
    <div className='bg-black'>
      <Layout className="min-h-screen bg-gradient p-3">
        <Sider collapsed={collapsed} onCollapse={setCollapsed} className="sidebar" width={240}>
          <div className='p-4 flex  items-center justify-between'>

            <div className="logo  flex  items-center ">
              <div className=" text-purple-500 bg-purple-900 w-8 h-8 flex items-center justify-center rounded-full p-1">
                <Icon icon="streamline:dashboard-3-solid" className='text-white' />
              </div>
              <p className={collapsed ? 'text-black mb-0 ml-8' : 'text-white mb-0 ml-2'}>Home</p>
            </div>
            <div className=" text-purple-500 bg-[#212122] w-5 h-5 flex items-center justify-center rounded-full p-1">
              <Icon icon={collapsed ? "material-symbols:navigate-next" : "ion:chevron-back"} className='text-white' onClick={() => setCollapsed(!collapsed)} />
              {/* <Icon icon="material-symbols:navigate-next" /> */}
            </div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className="sidebar-menu">
            {/* <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item> */}
            <Menu.Item key="2" icon={<SearchOutlined />}>Search</Menu.Item>
            <Menu.Item key="3" icon={<BarChartOutlined />}>Analytics</Menu.Item>
            <Menu.Item key="4" icon={<BellOutlined />}>Notifications</Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>Upload</Menu.Item>
          </Menu>
          <div className="sidebar-bottom">
            <Menu theme="dark" mode="inline" className="sidebar-menu">
              <Menu.Item key="6" icon={<UserOutlined />}>Profile</Menu.Item>
              <Menu.Item key="7" icon={<SettingOutlined />}>Settings</Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Layout >
          <Content className="p-8" >
            <Row gutter={24}>
              <Col span={17}>
                <NowPlaying />
                <AudioPlayer />
                <div className="flex space-x-4 mb-4">
                  <Button type="button" className={section == 'taskes' ? "text-purple-500" : "text-gray-400"} onClick={() => setSection('taskes')}>Similar Tracks</Button>
                  <Button type="button" className={section == 'comments' ? "text-purple-500" : "text-gray-400"} onClick={() => setSection('comments')}>Comments 211</Button>
                </div>
                {section == 'taskes' ? <SimilarTaskes /> : <Comments />}
              </Col>
              <Col span={7}>
                <UpNext />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
      
    </div>
  );
};


export default App;