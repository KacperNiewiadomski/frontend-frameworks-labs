import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookCard.module.css";

type BookCardProps = {
  book: Book;
  onSelect: (book: Book) => void;
};

export default function BookCard({ book, onSelect }: BookCardProps) {
  const { title, author, year, genre, rating, price, available } = book;

  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      aria-label={`Pokaż szczegóły książki ${title}`}
      onClick={() => onSelect(book)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(book);
        }
      }}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.meta}>
        {author}, {year}
      </p>
      <div className={styles.badges}>
        <Badge>{genre}</Badge>
        {available ? (
          <Badge tone="success">Dostępna</Badge>
        ) : (
          <Badge tone="warning">Brak w magazynie</Badge>
        )}
      </div>
      <footer className={styles.footer}>
        <span className={styles.rating}>Ocena: {stars(rating)}</span>
        <strong>{formatPrice(price)}</strong>
      </footer>
    </article>
  );
}
