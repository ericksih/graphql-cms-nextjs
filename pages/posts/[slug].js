import React from 'react';
import { GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import { Row, Col, Divider } from 'antd';
import styles from '../../styles/SinglePost.module.css';
import moment from 'moment';
import Image from 'next/image';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { grpahCMSImageLoader } from '../../utils';

export default function PostPage({ posts }) {
  // console.log(' posts', posts);
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Row key={post.id} gutter={[16, 16]}>
          <Col key={post.id} xs={24} sm={24} md={5} lg={5} xl={5}>
            <div key={post.id} className={styles.author}>
              <Image
                unoptimized
                loader={grpahCMSImageLoader}
                alt={post.image.alt}
                src={post.author.photo.url}
                className={styles.image}
                width='100px'
                height='100px'
              />

              <div className={styles.author} style={{ marginTop: '20px' }}>
                <h3>{post.author.name}</h3>
                <p>{post.author.bio}</p>
              </div>

              <Link href='/' passHref>
                <div className={styles.link}>
                  <ArrowLeftOutlined />
                  <a>Go Back</a>
                </div>
              </Link>
            </div>
          </Col>

          <Col xs={24} sm={24} md={19} lg={19} xl={19}>
            <div key={post.id}>
              <p>{moment(post.updatedAt).format('MMMM Do YYYY')}</p>
              <Divider />

              <h1>{post.title}</h1>

              <p>{post.headline}</p>
              <Image
                unoptimized
                loader={grpahCMSImageLoader}
                alt={post.image.alt}
                src={post.image.url}
                width={post.image.width}
                height={post.image.height}
              />

              <Divider />

              <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export async function getStaticPaths() {
  const graphcms = new GraphQLClient(
    'https://api-ap-southeast-2.graphcms.com/v2/cl29xmlz11iqj01ywas0g1j7m/master'
  );

  const { posts } = await graphcms.request(
    `
        query MyQuery {
          posts {
            slug
          }
        }
        `
  );
  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  // console.log('🚀 ~ file: index.js ~ line 7 ~ getStaticPaths ~ paths', paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const graphcms = new GraphQLClient(
    'https://api-ap-southeast-2.graphcms.com/v2/cl29xmlz11iqj01ywas0g1j7m/master'
  );

  const { posts } = await graphcms.request(
    `
    query MyQuery($slug: String!) {
        posts(where: {slug: $slug}) {
          author {
            id
            name
            bio
            photo {
              url
            }
          }
          slug
          id
          createdAt
          updatedAt
          title
          headline
          content {
            html
          }
          image {
            url
            width
            height

          }
        }
      }
    `,
    { slug: params.slug }
  );

  return {
    props: {
      posts,
    },
  };
}
