import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import styles from '../styles/MainPost.module.css';
import { Row, Col, Divider, Skeleton } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function MainPosts({ posts }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <Row className={styles.main}>
      <Col xs={24} sm={24} md={7} lg={7} xl={7}>
        <div className={styles.whats}>
          <h1>Whats New?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            accusamus enim minima cumque tempore labore distinctio modi deserunt
            quas dolorum ipsam possimus consectetur, repellendus odio.
          </p>
        </div>
      </Col>

      <Col xs={24} sm={24} md={17} lg={17} xl={17}>
        {posts.map((post) => (
          <div key={post.id}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={5} lg={5} xl={5}>
                <span>
                  <strong>
                    <p>{moment(post.updatedAt).format('MMM Do YYYY')}</p>
                  </strong>
                  {post.author.name}
                </span>
              </Col>

              <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                <div className={styles.title}>
                  <h2>{post.title}</h2>
                  <p>{post.headline}</p>
                </div>
              </Col>

              <Col xs={24} sm={24} md={5} lg={5} xl={5}>
                <Link href={`/posts/${post.slug}`} passHref>
                  <div className={styles.readMore}>
                    <a>Read more</a>
                    <ArrowRightOutlined />
                  </div>
                </Link>
              </Col>
              <Divider />
            </Row>
          </div>
        ))}
      </Col>
    </Row>
  );
}
