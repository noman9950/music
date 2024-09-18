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
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SingUp';
import Home from './screens/Home';


const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [section, setSection] = useState('taskes');

  return (
    <Router>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};


export default App;