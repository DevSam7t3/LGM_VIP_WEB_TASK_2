import styles from "./user.module.css";

export default function User({ user }) {
  return (
    <div className={styles.user}>
      <button className={styles.checkContainer}>
        <img src={user.avatar} alt="" />
      </button>

      <div>
        <p className={styles.userName}>
          {user.first_name} {user.last_name}
        </p>
        <p className={styles.userEmail}>{user.email}</p>
      </div>
    </div>
  );
}
