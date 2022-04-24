import React from 'react';
import styles from '../styles/Footer.module.css';
import { Row, Col } from 'antd';
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={24}>
          <div className={styles.kiri}>
            <p>Copyright © 2022. All rights reserved.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
