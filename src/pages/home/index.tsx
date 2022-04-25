import React from 'react'
import { Link } from "react-router-dom"
import CssModuleTest from '@/components/CssModuleTest'

export default function Home() {
  return (
    <>
      <main>
        <CssModuleTest>Css Module Title</CssModuleTest>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}