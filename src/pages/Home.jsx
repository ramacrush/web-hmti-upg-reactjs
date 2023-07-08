import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import PostList from "../components/PostList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <header className="w-full fixed top-0 z-10">
        <Navbar />
      </header>
      <main className="mt-[70px] p-3">
        <Carousel />
        <PostList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
