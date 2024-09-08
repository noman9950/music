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



const UpNext = () => (
  <div>
    <Title level={3} className="text-white mb-4" style={{color:'white'}}>Up Next</Title>
    <List
      itemLayout="horizontal"
      dataSource={[
        {
          title: 'Blah black qut',
          artist: 'Drake',
          duration: '3:17 min',
          genre: 'EDM music',
          image: musicImage,
        },
        {
          title: 'Blah black qut1',
          artist: 'Drake',
          duration: '3:18 min',
          genre: 'EDM music',
          image: musicImage,
        },
        // Add more tracks here
      ]}
      renderItem={item => (
        <List.Item className="border-none mt-2 rounded-xl" style={{backgroundColor:'#080808'}}>
          <List.Item.Meta 
            avatar={
              <div style={{width:90,height:95}} className='ml-3'>
              <img src={item.image} alt={item.title} className="w-full h-full rounded-lg" />
              </div>
              }
            title={<Text className="text-white" style={{color:'white'}}>{item.title}</Text>}
            description={
              <div>
                <Text className="text-gray-400" style={{color:'white'}}>{item.artist} • {item.duration}</Text>
                <br />
                <br/>
                <Text className="text-gray-500" style={{color:'white'}}>{item.genre}</Text>
              </div>
            }
          />
          <CloseOutlined className="text-gray-400 mr-3" style={{marginTop:-65}} />
        </List.Item>
      )}
    />
    <Input.Search placeholder="Add genres & playlists" className="mt-4 bg-gray-700 border-gray-600 text-white rounded-full"/>
    <div className="flex flex-wrap gap-2 mt-4">
      <Button type="primary" className="bg-purple-600 border-none rounded-full">Random</Button>
      <Button className="bg-gray-700 text-gray-300 border-none rounded-full">Rap</Button>
      <Button className="bg-gray-700 text-gray-300 border-none rounded-full">Vaporwave</Button>
      <Button className="bg-gray-700 text-gray-300 border-none rounded-full">Future Bass</Button>
      <Button className="bg-gray-700 text-gray-300 border-none rounded-full">My Playlist 1</Button>
    </div>
  </div>
);

export default UpNext;