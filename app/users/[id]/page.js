import UserCard from "@/components/UserCard";
import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";
import { redirect } from "next/navigation";
import styles from "./page.module.css";

export default async function UserPage({ params }) {
  const { id } = await params;
  const url = `${process.env.NEXT_PUBLIC_FB_DB_URL}/users/${id}.json`;
  const response = await fetch(url);
  const user = await response.json();

  // Server Action to handle post deletion
  async function deleteUser() {
    "use server"; // Mark as server action - runs on server only
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.ok) {
      redirect("/users");
    }
  }

  return (
    <main className={styles.postPage}>
      <div className={styles.container}>
        <div className={styles.postCard}>
          <UserCard user={user} />
        </div>
        <div className={styles.btns}>
          <DeleteButton
            label="Delete user"
            title="Delete User?"
            message="Are you sure you want to delete this user? This action cannot be undone."
            deleteAction={deleteUser}
          />
          <Link href={`/users/${id}/update`}>
            <button className={styles.btnUpdate}>Update user</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
