import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookCard.module.css";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  const { title, author, year, genre, rating, price, available } = book;

  return (
    <article className={styles.card}>
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
