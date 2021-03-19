import { MovieCard } from "./MovieCard";
import { GenreResponseProps, MovieProps } from "../App";

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: {
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  };
}

export function Content({ movies, selectedGenre }: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
