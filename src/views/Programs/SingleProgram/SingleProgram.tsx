import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';
import Image from './../../../assets/images/BOI-UAT-HUB-LOGO.png';
import client from '../../../client';
import LoadingText from '../../../components/LoadingText/LoadingText';

const SingleProgram = () => {
  const [singlePost, setSinglePost]: any = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
          title,
          body,
          mainImage{
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => {
        setSinglePost(data[0]);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  return loading ? (
    <div className="py-44 px-1 md:px-5 md:py-60 my-36">
      <Container>
        <LoadingText />
      </Container>
    </div>
  ) : (
    <div className="py-44 px-1 md:px-5 md:py-60">
      <Container>
        <div>
          <h1>{singlePost.title}</h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              className="h-full w-full"
              src={singlePost.mainImage.asset.url}
              alt=""
            />
          )}
          <div className="Content text-xl pt-10">
            <BlockContent
              blocks={singlePost.body}
              projectId="uhfhwiih"
              dataset="production"
              className="leading-7 tracking-tight"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProgram;
