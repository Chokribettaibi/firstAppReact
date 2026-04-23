import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Button from './components/Button/Buttom';
import SideMenu from './components/SideMenu/SidMenu';
import Post from './components/Post/Post';
import React from 'react';
import List from './components/renderingListinReact/List';
import { useState } from 'react';
import ListTwo from './components/renderingListinReact/ListTow';
import article  from './db/stok';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <List/>
        <ListTwo/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>my first React app</p>
      <div style={{ width: '50%', padding: '20px' }}>
      <Post title="My First Post" content="This is the content of my first post. winta Ch3andik tgoul" /> 
      <Post >
        <h2>My Second Post</h2>
        <p>This is the content of my second post. winta Ch3andik tgoul</p>
        <button onClick={() => alert('Button inside post clicked!')}>Click me</button>
      </Post>
      <Post>
        <h1>My Third Post</h1>
        <p>This is the content of my third post. winta Ch3andik tgoul</p>
      </Post>
      </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React By Bettaibi Chokri
        </a>
        <Button text="Click me" onClick={() => alert('Button clicked!')} />
      </header>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <SideMenu  content={article} />
      </div>
      <footer style={{ marginTop: '20px', backgroundColor: '#f1f1f1' }}>
        <p>&copy; 2026 My React App. All rights reserved.</p>
        <p>Bettaibi Chokri</p>
      </footer>
    </div>
  );
}

export default App;
