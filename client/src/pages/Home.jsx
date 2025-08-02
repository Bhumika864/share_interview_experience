import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Footer from "../components/Footer.JSX";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header/>
      <PostList/>
      <Footer/>
    </div>
  );
};

export default Home;
