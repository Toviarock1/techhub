import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import BlockContent from "@sanity/block-content-to-react";
import Image from "./../../../assets/images/BOI-UAT-HUB-LOGO.png";
import client from "../../../client";

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
    <p>Loading...</p>
  ) : (
    <div className="py-44 px-1 md:px-5 md:py-60">
      <Container>
        <div>
          <h1>{singlePost.title}</h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              className="h-80 w-full"
              src={singlePost.mainImage.asset.url}
              alt=""
            />
          )}
          <div className="Content text-xl leading-9">
            <BlockContent
              blocks={singlePost.body}
              projectId="uhfhwiih"
              dataset="production"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProgram;
