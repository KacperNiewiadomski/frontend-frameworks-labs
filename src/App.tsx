import { useState } from "react";
import FilterBar from "./components/FilterBar";
import BookList from "./components/BookList";
import { books } from "./data/books";
import type { GenreFilter } from "./types";

export default function App() {
  const [genre, setGenre] = useState<GenreFilter>("wszystkie");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const visibleBooks = books.filter(
    (book) =>
      (genre === "wszystkie" || book.genre === genre) &&
      (!onlyAvailable || book.available),
  );

  return (
    <>
      <h1>📚 Katalog książek</h1>
      <FilterBar
        genre={genre}
        onlyAvailable={onlyAvailable}
        onGenreChange={setGenre}
        onOnlyAvailableChange={setOnlyAvailable}
      />
      <p>Znaleziono: {visibleBooks.length}</p>
      <BookList books={visibleBooks} />
    </>
  );
}
