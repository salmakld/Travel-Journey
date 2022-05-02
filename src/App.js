import React from 'react';
import Navbar from './components/Navbar.js';
import Post from './components/Post.js'
import data from './data.js'

import './App.css';

function App() {

  let posts = data.map(item => {
    return (
        <Post key={item.id}
              {...item}
        />
    );
  })

  return (
    <div className="App">
      <Navbar />
      <section className='posts--list'>
        {posts}
      </section>
    </div>
  );
}

export default App;
