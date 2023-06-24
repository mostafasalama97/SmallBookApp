import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

function Main() {
  const [search, setSearch] = useState("");
  const [bookData , setData] = useState([]);
  const searchBook = (e) => {
    if(e.key === "Enter"){
        // console.log("hello")
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
        .then(res => setData(res.data.items))
        .catch(err => console.log(err))
    }
  
  }
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Docpert Book App <br /> Mostafa Salama{" "}
          </h1>
        </div>
        <div className="row2">
          <h2>find your book</h2>
          <div className="search">
            <input
              type="search"
              placeholder="Enter book title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>Search</button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>
      <div className="container">
        {
                    <Card book={bookData} />
        }       
      </div>
    </>
  );
}

export default Main;
