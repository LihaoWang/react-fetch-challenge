import { motion } from "framer-motion";
export default function PostItem({ post }) {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <div>
      <motion.div
        className="post-item"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <h2>{post.title}</h2>
        <p>{post.body} </p>
      </motion.div>
    </div>
  );
}
