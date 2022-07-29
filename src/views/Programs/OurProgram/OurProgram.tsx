import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
//framer-motion
import { motion } from "framer-motion";
//components
import ProgramsCard from "./../../../components/ProgramsCard/ProgramsCard";
//sanity client
import client from "../../../client";
//image
import Image from "./../../../assets/svgs/image 9.svg";

type ProgramCardProps = {
  title: string;
  body: any;
  mainImage: { asset: { url: string } };
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
      .catch(() => {
        setLoading(false);
      });
  }, []);

  console.log(posts);

  return loading ? (
    <div className="my-60">
      <p className="text-center text-3xl">Loading...</p>
    </div>
  ) : posts.length !== 0 ? (
    <div className="md:px-20 py-44">
      <Container fluid>
        {posts.map(
          ({ title, mainImage, slug, description }: ProgramCardProps) => (
            <ProgramsCard
              image={mainImage.asset.url}
              flexRowReverse={false}
              title={title}
              slug={`/programs/${slug.current}`}
              description={description}
            />
          )
        )}
      </Container>
    </div>
  ) : (
    <div className="my-60">
      <motion.p
        className="text-center text-3xl"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 5 }}
      >
        Something Went Wrong...
      </motion.p>
    </div>
  );
};

export default OurProgram;
