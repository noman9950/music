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
import '../App.css'; // Make sure to create this file for custom styles
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';



const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [fullName, setfullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation=useNavigate()
  const handleSubmit = (event) => {
      event.preventDefault();

      // Simple validation
      if (!email || !password||!phone||!fullName) {
          setError('Please fill in all fields.');
          return;
      }

      // Handle sign-in logic here (e.g., sending credentials to a server)
      console.log('Email:', email);
      console.log('Password:', password);
      navigation('/')
      // Reset the form
      setEmail('');
      setPassword('');
      setError('');
  };

  return (
   
      <div style={styles.container} >
        <h2 style={styles.title}>SignUp</h2>
        <div style={styles.box}>
        {error && <p style={styles.errorText}>{error}</p>}
                <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputContainer}>
                        <label style={styles.label}>Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setfullName(e.target.value)}
                            style={styles.input}
                            placeholder="Enter your Full Name"
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <label style={styles.label}>Phone Number</label>
                        <input
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={styles.input}
                            placeholder="Enter your Phone Number"
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <label style={styles.label}>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <label style={styles.label}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" style={styles.button}>
                        Sign Up
                    </button>
                </form>
        </div>
      </div>

  );
};
const styles = {
  container1: {
    // display: 'flex',
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center', // Centers vertically
    height: '100vh', // Full viewport height
    width: '100vw',
    backgroundColor: 'black',
  },
  container: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center', // Centers vertically
    height: '100vh', // Full viewport height
    width: '100vw',
    backgroundColor: 'black',
  },
  box: {
    padding: '20px',
    backgroundColor: '#080808',
    width:'25vw',
    color: '#fff',
    borderRadius: '8px',
    // textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
},
inputContainer: {
    marginBottom: '15px',
},
label: {
    display: 'block',
    marginBottom: '5px',
    // fontWeight: 'bold',
},
input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #444',
    backgroundColor: '#333',
    color: '#fff',
},
button: {
    padding: '10px 20px',
    backgroundColor: '#803dd4',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
},
title: {
    color: '#fff',
    fontSize:24,
    fontWeight:'bold',
    marginBottom: '20px',
    textAlign: 'center',
},
errorText: {
    color: 'red',
},
};


export default SignUp;