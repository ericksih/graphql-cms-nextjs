import React from 'react';
import Head from 'next/head';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import { Row, Col } from 'antd';

import { grpahCMSImageLoader } from '../utils';

const about = () => {
  return (
    <Row className={styles.container} gutter={[16, 1]}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Head>
          <title>About</title>
        </Head>
        <h1>Generation Z</h1>
        <p className={styles.year}> 1997 - 2012 </p>
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt='about'
          src='/image2.jpg'
          width={550}
          height={300}
          className={styles.image}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          accusantium dicta cumque neque mollitia quod perspiciatis ex,
          accusamus aspernatur aut dolorem dolore consequatur deleniti,
          voluptatibus eius porro et iusto, sunt at saepe id quam dolor
          molestias. Esse optio veniam id sed illum suscipit ut officiis minima
          corrupti temporibus. Cupiditate, laborum?
        </p>
      </Col>

      <Col xs={24} sm={24} md={12} lg={12} xl={12} className={styles.kanan}>
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt='about'
          src='/image.jpg'
          width={550}
          height={300}
          className={styles.image}
        />
        <h1>Pusing Terus Nih Ye.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut
          sapiente optio! Inventore, incidunt laudantium?{' '}
          <span>Quisquam, quis Lorem ipsum dolor sit amet.</span> Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Asperiores, at.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          accusantium dicta cumque neque mollitia quod perspiciatis ex,
        </p>
      </Col>
    </Row>
  );
};

export default about;
