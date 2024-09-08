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

const Comments = () => (
  <div>
    <Input placeholder="Write a comment" className="mb-4 bg-gray-700 border-gray-600 text-white rounded-full" />
    <List
      itemLayout="horizontal"
      dataSource={[
        {
          author: 'Darrell Steward',
          avatar: musicImage,
          content: 'I think self-publishing is probably a lot easier now because of social media and other ways to market',
          likes: 25,
          replies: 5,
        },
        // Add more comments here
      ]}
      renderItem={item => (
        <List.Item className="border-none">
          <List.Item.Meta
            avatar={<img src={item.avatar} alt={item.author} className="rounded-full w-10 h-10" />}
            title={<Text className="text-white" style={{ color: 'white' }}>{item.author}</Text>}
            description={<Text className="text-gray-400" style={{ color: 'white' }}>{item.content}</Text>}
          />
          <div className="flex items-center space-x-2">
            <HeartOutlined className="text-red-500" />
            <Text className="text-gray-400" style={{ color: 'white' }}>{item.likes}</Text>
            <Text className="text-gray-400" style={{ color: 'white' }}>Reply</Text>
            <MoreOutlined className="text-gray-400" />
          </div>
        </List.Item>
      )}
    />
  </div>
);



export default Comments;