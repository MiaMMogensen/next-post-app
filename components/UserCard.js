// Server Component - no "use client" needed
import Image from "next/image";
import styles from "./PostCard.module.css";

export default function UserCard({ user }) {
  return (
    <article className={styles.postCard}>
      {/* Async Server Component inside */}
      <h3>{user.name}</h3>
      <Image
        src={user.image}
        alt={user.name}
        className={styles.postCardImage}
        width={500}
        height={500}
      />
      <h3>{user.title}</h3>
      <h3>{user.mail}</h3>
    </article>
  );
}
