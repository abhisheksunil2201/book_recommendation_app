import { useState } from "react";
import "./styles.css";

export default function App() {
  const [category, setCategory] = useState("Fantasy");
  const handleClick = (currentCategory) => {
    setCategory(currentCategory);
  };
  const books = {
    Fantasy: [
      {
        name: "Harry Potter",
        author: "J.K. Rowling",
        image:
          "https://m.media-amazon.com/images/P/1408855658.01._SCLZZZZZZZ_SX500_.jpg",
        rating: "4/5"
      },
      {
        name: "A Song of Ice and Fire",
        author: "George R. R. Martin",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg",
        rating: "4.5/5"
      }
    ],
    "Self Help": [
      {
        name: "Atomic Habits",
        author: "James Clear",
        image:
          "https://m.media-amazon.com/images/P/B01N5AX61W.01._SCLZZZZZZZ_SX500_.jpg",
        rating: "4/5"
      },
      {
        name: "Think and Grow Rich",
        author: "Napoleon Hill",
        image:
          "https://m.media-amazon.com/images/P/B08CNN4D5Q.01._SCLZZZZZZZ_SX500_.jpg",
        rating: "3.5/5"
      },
      {
        name: "The 48 Laws of Power",
        author: "Robert Greene",
        image:
          "https://m.media-amazon.com/images/P/1861972784.01._SCLZZZZZZZ_SX500_.jpg",
        rating: "4.5/5"
      }
    ],
    "Money Management": [
      {
        name: "Rich Dad, Poor Dad",
        author: "Robert T. Kiyosaki",
        image:
          "https://m.media-amazon.com/images/P/B07C7M8SX9.01._SCLZZZZZZZ_SX500_.jpg",
        rating: "4/5"
      },
      {
        name: "The Intelligent Investor",
        author: "Benjamin Graham",
        image:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1409602421l/106835.jpg",
        rating: "3/5"
      },
      {
        name: "The Psychology of Money",
        author: "Morgan Housel",
        image:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581527774l/41881472._SY475_.jpg",
        rating: "5/5"
      }
    ]
  };
  return (
    <div className="App">
      <nav className="main-heading">
        <h2>Some amazing books for you to read</h2>
      </nav>
      <div className="container">
        <div className="category">
          <h3 className="heading">Categories:</h3>
          <ul className="category-list">
            {Object.keys(books).map((bookCategory) => (
              <li
                className={
                  category === bookCategory ? "list-item active" : "list-item"
                }
                key={bookCategory}
                onClick={() => handleClick(bookCategory)}
              >
                {bookCategory}
              </li>
            ))}
          </ul>
        </div>
        <div className="books">
          <h3 className="list">Books:</h3>
          <ul className="book-list">
            {books[category].map((bookDetail) => (
              <li key={bookDetail.name} className="book">
                <div className="book-details">
                  <div className="cover-image">
                    <img src={bookDetail.image} alt="book" />
                  </div>
                  <div className="details">
                    <h3>{bookDetail.name}</h3>
                    <p>
                      <b>Author:</b>
                      {bookDetail.author}
                    </p>
                    <p>
                      <b>Rating:</b>
                      {bookDetail.rating}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
