import React from "react";
import "./Main.css";

const DB = {
  books: [
    { title: "Adarsh books", author: "me" },
    { title: "Ayush books", author: "brother" },
    { title: "Ankita books", author: "sister" },
  ],
  songs: [
    { title: "Adarsh song", album: "me" },
    { title: "Ayush song", album: "brother" },
    { title: "Ankita song", album: "sister" },
  ],
};

// This is App Components Return Default
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Books books={DB.books} />
      <Songs songs={DB.songs} />
      {/* <BookComponent books={DB.books} /> */}
      <SongComponent name="songs" theme="dark" />
      <BookComponent name="books" theme="light"/>
    </div>
  );
};
export default App;

const Songs = ({ songs }) => {
  return (
    <div>
      <h3>Songs</h3>
      <ul> {songs.map((e) => ( <li key={e.title}> songs: {e.title} / Album: {e.album} </li> ))} </ul>
    </div>
  );
};
const Books = ({ books }) => {
  return (
    <div>
      <h3>Books</h3>
      <ul> {books.map((e) => ( <li key={e.title}> Books: {e.title} / Author: {e.author} </li> ))} </ul>
    </div>
  );
};

// This is a HOC, Always Start Name "with..." in HOC 
const withHOC = (Component, getData) => (props) => {
  return (
    <div className={props.theme}>
      <Component {...getData(props.name)}></Component>
    </div>
  );
};


// This is the wrapper of HOC to gets the props

// const SongComponent = withHOC(Songs, "dark");
// const SongComponent = withHOC(Songs, "dark", (name) => ({ [name]: DB[name] }));
const SongComponent = withHOC(Songs, (name) => ({ [name]: DB[name] }));
const BookComponent = withHOC(Books, (name) => ({ [name]: DB[name] }));
