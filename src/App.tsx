import { useState } from "react";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import FilterBar from "./components/FilterBar";
import { books } from "./data/books";
import type { Book, GenreFilter, SortOption } from "./types";

export default function App() {
  const [genre, setGenre] = useState<GenreFilter>("wszystkie");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("domyślne");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const normalizedQuery = query.trim().toLocaleLowerCase("pl-PL");

  const filteredBooks = books.filter((book) => {
    const matchesGenre = genre === "wszystkie" || book.genre === genre;
    const matchesAvailability = !onlyAvailable || book.available;
    const matchesQuery =
      normalizedQuery === "" ||
      book.title.toLocaleLowerCase("pl-PL").includes(normalizedQuery) ||
      book.author.toLocaleLowerCase("pl-PL").includes(normalizedQuery);

    return matchesGenre && matchesAvailability && matchesQuery;
  });

  const visibleBooks = [...filteredBooks].sort((firstBook, secondBook) => {
    switch (sort) {
      case "tytuł-rosnąco":
        return firstBook.title.localeCompare(secondBook.title, "pl-PL");
      case "cena-rosnąco":
        return firstBook.price - secondBook.price;
      case "cena-malejąco":
        return secondBook.price - firstBook.price;
      case "ocena-malejąco":
        return secondBook.rating - firstBook.rating;
      default:
        return 0;
    }
  });

  return (
    <>
      <h1>📚 Katalog książek</h1>
      {selectedBook ? (
        <BookDetails book={selectedBook} onBack={() => setSelectedBook(null)} />
      ) : (
        <>
          <FilterBar
            genre={genre}
            onlyAvailable={onlyAvailable}
            query={query}
            sort={sort}
            onGenreChange={setGenre}
            onOnlyAvailableChange={setOnlyAvailable}
            onQueryChange={setQuery}
            onSortChange={setSort}
          />
          <p>Znaleziono: {visibleBooks.length}</p>
          <BookList books={visibleBooks} onBookSelect={setSelectedBook} />
        </>
      )}
    </>
  );
}
