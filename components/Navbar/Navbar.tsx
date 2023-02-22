import React from "react";
import Link from "next/link";
import styles from '@/styles/Nav.module.scss'

export default function Navbar() {
  return (
    <div className={styles.containerNav}>
      <ul>
        <Link href="/">HOME</Link>
        <Link href="/todo">ACTIVE TODO</Link>
        <Link href="/oldTodo">OLD TODO</Link>
      </ul>
    </div>
  );
}
