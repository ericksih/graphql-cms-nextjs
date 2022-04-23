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
        {/* <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className={styles.kanan}>
            <h1>Follow Us</h1>
            <div className={styles.icon}>
              <a href='#'>
                <FacebookOutlined />
              </a>
              <a href='#'>
                <TwitterOutlined />
              </a>
              <a href='#'>
                <InstagramOutlined />
              </a>
            </div>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default Footer;
