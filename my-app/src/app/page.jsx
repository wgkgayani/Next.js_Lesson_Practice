import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="navigation">
        <div>
          <h1>Home Page</h1>
        </div>

        <ul className="body">
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/service" className={styles.link}>
              Service
            </Link>
          </li>
          <li>
            <Link href="/products" className={styles.link}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/about/branches" className={styles.link}>
              Branches
            </Link>
          </li>
          <li>
            <Link href="/products/vegis" className={styles.link}>
              Vegies Page
            </Link>
          </li>
        </ul>

        <Link
          href="https://nextjs.org/"
          target="_blank"
          id={styles.specialLink}
        >
          Next.js Site
        </Link>
      </div>
    </>
  );
}
