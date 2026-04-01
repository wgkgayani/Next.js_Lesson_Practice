import React from "react";
import Link from "next/link";
import styles from "./contactus.module.css";

function page() {
  return (
    <>
      <div>
        <h1>contact us</h1>
      </div>
      <Link href="/" className={styles.link}>
        Home
      </Link>
    </>
  );
}

export default page;
