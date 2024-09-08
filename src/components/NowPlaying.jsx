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
import musicImage from '../assets/Images/music.jpg'

const { Sider, Content } = Layout;
const { Title, Text } = Typography;


const NowPlaying = () => (
  <div className="mb-8 ml-20">
    <Row gutter={16} align="middle">
      <Col span={6}>
        <img src={musicImage} alt="Album Art" className="rounded-xl w-full" />
      </Col>
      <Col span={18}>
        {/* <Text  className="text-white mb-0">Back to Texas</Text> */}
        <Title level={2} style={{ color: 'white' }}>Back to Texas</Title>
        <Row gutter={10} align="middle">
          <Col span={2}>
            <img src={musicImage} alt="Album Art" className="w-10 h-10 rounded-full " />
          </Col>
          <Col span={10}>
            <Text style={{ color: 'gray' ,fontSize:12}} >Malone</Text>
            <br/>
            <Text style={{color:'gray',fontSize:10}}>Uploaded 5 days ago</Text>
          </Col>
        </Row>
        <div className="flex space-x-4 mt-4">
          <Button type="primary" shape="round" icon={<HeartOutlined />} className="bg-purple-600 border-none">
            4k
          </Button>
          <Button shape="round" icon={<RetweetOutlined />} className="bg-gray-700 text-gray-300 border-none">
            221
          </Button>
          <Button shape="round" icon={<ShareAltOutlined />} className="bg-gray-700 text-gray-300 border-none">
            35
          </Button>
          <Button shape="round" icon={<PlusOutlined />} className="bg-gray-700 text-gray-300 border-none">
            Add to playlist
          </Button>
        </div>
      </Col>
    </Row>
  </div>
);


export default NowPlaying;