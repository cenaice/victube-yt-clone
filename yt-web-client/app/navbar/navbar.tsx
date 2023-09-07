import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import SignIn from "./sign-in";


export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image width={50} height={10} src="/yt-logo.png" alt="Youtube Logo" />
      </Link>
      <SignIn />
    </nav>
  );
}
