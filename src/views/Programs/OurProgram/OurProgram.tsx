import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProgramsCard from "./../../../components/ProgramsCard/ProgramsCard";
import Image from "./../../../assets/svgs/image 9.svg";
import client from "../../../client";

type ProgramCardProps = {
  title: string;
  body: any;
  mainImage: any;
  slug: { current: string };
  description: string;
};

const OurProgram = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
            title,
            slug,
            body,
            description,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => {
        setPosts(data);
        console.log(data);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  console.log(posts);

  return loading ? (
    <p>Loading</p>
  ) : (
    <div className="md:px-20 py-44">
      <Container fluid>
        {posts.map(
          ({ title, mainImage, slug, description }: ProgramCardProps) => (
            <ProgramsCard
              image={mainImage.asset.url}
              flexRowReverse={false}
              title={title}
              slug={slug.current}
              description={description}
            />
          )
        )}
      </Container>
    </div>
  );
};

export default OurProgram;
