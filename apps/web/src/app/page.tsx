import styles from "./page.module.css";
import CounterClient from "../components/CounterClient";

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <CounterClient />
        </div>
      </div>
    </div>
  );
}
