import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Addbook from "../components/Addbook";
import Item from "../components/item";

export default function Book() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("");
  useEffect(() => {
    fetch("https://6348d0cc0b382d796c77b503.mockapi.io/book/Book")
      .then((data) => data.json())
      .then((data) => setBooks(data));
  }, []);
  function AddBook() {
    fetch(`https://6348d0cc0b382d796c77b503.mockapi.io/book/Book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    axios
      .get("https://6348d0cc0b382d796c77b503.mockapi.io/book/Book")
      .then((books) => {
        setBooks(books.data);
      });
  }
  function DeleteBook() {
    fetch(`https://6348d0cc0b382d796c77b503.mockapi.io/book/Book`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    axios
      .get("https://6348d0cc0b382d796c77b503.mockapi.io/book/Book")
      .then((books) => {
        setBooks(books.data);
      });
  }
  return (
    <View className="items-center">
      <Addbook
        book={book}
        setBook={setBook}
        setBooks={setBooks}
        AddBook={AddBook}
      />
      <View>
        <FlatList
          className="bg-white"
          data={books}
          renderItem={(item) => (
            <View>
              <Item item={item} />
            </View>
          )}
        />
      </View>
    </View>
  );
}
