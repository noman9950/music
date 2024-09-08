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



const SimilarTaskes = () => (
  <div>
         <div className="flex space-x-5 mt-3 mb-4 ml-5">
          <Button type="primary" shape="round" className="bg-purple-600 border-none">
            Songs
          </Button>
          <Button shape="round" className="bg-gray-700 text-gray-300 border-none">
            Playlists
          </Button>
        </div>
    <List
      itemLayout="horizontal"
      dataSource={[
        {
          title: 'Blah black qut1',
          genre: 'EDM music',
          image: musicImage,
          artist: 'Drake',
          profile: musicImage,
          upload: 'Upload 5 days ago',
          time: '5:00'
        },
        {
          title: 'Blah black qut1',
          genre: 'EDM music',
          image: musicImage,
          artist: 'Drake',
          profile: musicImage,
          upload: 'Upload 5 days ago',
          time: '5:00'
        },
        // Add more tracks here
      ]}
      renderItem={item => (
        <List.Item className="border-none mt-2 rounded-xl" style={{ backgroundColor: '#080808' }}>
          <List.Item.Meta
            avatar={
              <div style={{ width: 60, height: 65 }} className='ml-3'>
                <img src={item.image} alt={item.title} className="w-full h-full rounded-lg" />
              </div>}
            title={<Text className="text-white" style={{ color: 'white' }}>{item.title}</Text>}
            description={<Text className="text-gray-500" style={{ color: 'white' }}>{item.genre}</Text>}
          />
          <List.Item.Meta
            avatar={
              <img src={item.profile} alt={item.title} className="w-12 h-12 rounded-full" />}
            title={<Text className="text-white" style={{ color: 'white' }}>{item.artist}</Text>}
            description={<Text className="text-gray-500" style={{ color: 'white' }}>{item.upload}</Text>}
          />
          <Text className="text-gray-500 mr-3" style={{ color: 'white' }}>{item.time}</Text>
        </List.Item>
      )}
    />
  </div>
);

export default SimilarTaskes;