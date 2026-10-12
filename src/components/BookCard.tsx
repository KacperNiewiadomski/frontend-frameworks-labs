import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  const { title, author, year, genre, rating, price } = book;

  return (
    <article>
      <h3>{title}</h3>
      <p>
        {author}, {year}
      </p>
      <Badge>{genre}</Badge>
      <p>Ocena: {stars(rating)}</p>
      <p>Cena: {formatPrice(price)}</p>
    </article>
  );
}