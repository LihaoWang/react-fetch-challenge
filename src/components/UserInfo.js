import { motion } from "framer-motion";
export default function UserInfo({ user }) {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };
  return (
    <div style={{ width: "100%" }}>
      <motion.div
        className="user-info"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <p>
          {user.name} (@{user.username})
        </p>
        <p>
          <strong>{user.website}</strong>
        </p>
      </motion.div>
    </div>
  );
}
