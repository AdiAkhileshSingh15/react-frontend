import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title = "welcome to the new blog"
  // const likes = 50;
  // const person = { name: 'yoshi', age: 30 };
  // const link = "http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{person.name} is {person.age} years old</p>
        <p>{10}</p>
        <p>{"hello, humans"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random()*10}</p>
        <a href={link}>Google Site</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
