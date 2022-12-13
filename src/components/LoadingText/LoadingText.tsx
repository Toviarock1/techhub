import React from 'react';
import { motion } from 'framer-motion';

const LoadingText = () => {
  return (
    <p className="text-center text-3xl">
      Loading
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        .
      </motion.span>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        .
      </motion.span>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        .
      </motion.span>
    </p>
  );
};

export default LoadingText;
