import type { GenreFilter, SortOption } from "../types";
import styles from "./FilterBar.module.css";

type FilterBarProps = {
  genre: GenreFilter;
  onlyAvailable: boolean;
  query: string;
  sort: SortOption;
  onGenreChange: (genre: GenreFilter) => void;
  onOnlyAvailableChange: (onlyAvailable: boolean) => void;
  onQueryChange: (query: string) => void;
  onSortChange: (sort: SortOption) => void;
};

export default function FilterBar({
  genre,
  onlyAvailable,
  query,
  sort,
  onGenreChange,
  onOnlyAvailableChange,
  onQueryChange,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className={styles.filters}>
      <label className={styles.search}>
        Szukaj
        <input
          type="search"
          value={query}
          placeholder="Tytuł lub autor"
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </label>

      <label>
        Gatunek
        <select
          value={genre}
          onChange={(event) => onGenreChange(event.target.value as GenreFilter)}
        >
          <option value="wszystkie">Wszystkie</option>
          <option value="fantastyka">Fantastyka</option>
          <option value="kryminał">Kryminał</option>
          <option value="reportaż">Reportaż</option>
          <option value="informatyka">Informatyka</option>
        </select>
      </label>

      <label>
        Sortowanie
        <select
          value={sort}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
        >
          <option value="domyślne">Domyślne</option>
          <option value="tytuł-rosnąco">Tytuł: A–Z</option>
          <option value="cena-rosnąco">Cena: rosnąco</option>
          <option value="cena-malejąco">Cena: malejąco</option>
          <option value="ocena-malejąco">Ocena: malejąco</option>
        </select>
      </label>

      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={(event) => onOnlyAvailableChange(event.target.checked)}
        />
        Tylko dostępne
      </label>
    </div>
  );
}
