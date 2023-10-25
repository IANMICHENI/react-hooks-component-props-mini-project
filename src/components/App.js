import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import data from "../data/blog";

function App() {
  const blogData = {
    name: "Your Blog Name",
    about: "About your blog",
    logo: "path/to/your/logo/image.jpg",
    posts: data.posts,
  };

  return (
    <div className="App">
      <Header name={blogData.name} />
      <div className="content">
        <About image={blogData.logo} about={blogData.about} />
        <ArticleList posts={blogData.posts} />
      </div>
    </div>
  );
}

export default App;
