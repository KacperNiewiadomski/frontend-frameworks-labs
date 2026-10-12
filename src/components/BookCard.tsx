import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  const { title, author, year, genre, rating, price, available } = book;

  return (
    <article>
      <h3>{title}</h3>
      <p>
        {author}, {year}
      </p>
      <Badge>{genre}</Badge>
      {available ? (
        <Badge tone="success">Dostępna</Badge>
      ) : (
        <Badge tone="warning">Brak w magazynie</Badge>
      )}
      <p>Ocena: {stars(rating)}</p>
      <p>Cena: {formatPrice(price)}</p>
    </article>
  );
}
