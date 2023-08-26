import User from "../User";
import styles from "./users.module.css";

export default function UsersList({ users }) {
  const usersQuantity = users.length;

  return (
    <section className={styles.users}>
      <header className={styles.header}>
        <div>
          <p>Total Users</p>
          <span>{usersQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}
