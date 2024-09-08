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


const { Sider, Content } = Layout;
const { Title, Text } = Typography;


const AudioPlayer = () => (
  <div className="mb-8 rounded-lg" style={{backgroundColor:'#080808'}}>
    <div className="mt-5 flex justify-center space-x-8 mb-4">
      <RetweetOutlined className="text-2xl text-purple-400 mt-3" />
      <StepBackwardOutlined className="text-2xl text-gray-400 mt-3" />
      <PlayCircleOutlined className="text-5xl text-purple-500 mt-3" />
      <StepForwardOutlined className="text-2xl text-gray-400 mt-3" />
      <RetweetOutlined className="text-2xl text-gray-400 mt-3" />
    </div>
    <div className='ml-10 mr-10'>
    <Progress percent={40} showInfo={false} strokeColor="white" trailColor="#4B5563" className="custom-progress" />
    </div>
    <div className="flex justify-between text-gray-400 m-2">
      <span>0:55</span>
      <span>3:55</span>
    </div>
  </div>
);

export default AudioPlayer;