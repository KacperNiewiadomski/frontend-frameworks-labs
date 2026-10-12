import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookDetails.module.css";

type BookDetailsProps = {
  book: Book;
  onBack: () => void;
};

export default function BookDetails({ book, onBack }: BookDetailsProps) {
  const { title, author, year, genre, rating, price, available } = book;

  return (
    <section className={styles.details} aria-labelledby="book-details-title">
      <div className={styles.header}>
        <div>
          <h2 id="book-details-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.author}>{author}</p>
        </div>

        <div className={styles.badges}>
          <Badge>{genre}</Badge>
          {available ? (
            <Badge tone="success">Dostępna</Badge>
          ) : (
            <Badge tone="warning">Brak w magazynie</Badge>
          )}
        </div>
      </div>

      <dl className={styles.facts}>
        <div>
          <dt>Rok wydania</dt>
          <dd>{year}</dd>
        </div>
        <div>
          <dt>Ocena</dt>
          <dd>{stars(rating)}</dd>
        </div>
        <div>
          <dt>Cena</dt>
          <dd>{formatPrice(price)}</dd>
        </div>
      </dl>

      <button type="button" className={styles.backButton} onClick={onBack}>
        ← Wróć do katalogu
      </button>
    </section>
  );
}
