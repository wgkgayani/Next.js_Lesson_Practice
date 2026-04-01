import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/service">Service</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/about/branches">Branches</Link>
        </li>
        <li>
          <Link href="/products/vegis">Vegies Page</Link>
        </li>
      </ul>

      <Link href="https://nextjs.org/" target="_blank">
        Next.js Site
      </Link>
    </>
  );
}
