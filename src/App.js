import React from "react";
import { blocks } from "./blocks";
import Block from "./Block"
// import Navbar from './components/Navbar'
// import About from './components/About'
// import Projects from './components/Projects'
// import Skills from './components/Skills'
// // import Testimonials from './components/Testimonials'
// import Contact from './components/Contact'


export default function App() {
  
  const BlockList = blocks.map((block) =>
  
  <Block title={block.title} url={block.link}/>
  );
  
  return (
  <main className="text-gray-400 bg-gray-900 body-font">
    <div className="header">
  <h1>JamieVanRaalte.com</h1>
  <div>I currently work in the WordPress product space in development and I'm learning React. This site is built in React!</div>
    </div>
  <div className="block-list">
  {BlockList}
  </div>
  {/* <Navbar /> */}
  {/* <About />
  <Projects />
  <Skills /> */}
  {/* <Testimonials /> */}
  {/* <Contact /> */}
  <div>All links open in a new window</div>
  </main>
  )
}
