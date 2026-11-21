import MovieCard from "./MovieCard.jsx";
import "./MovieList.css";

function MovieList() {
  return (
    <section className="movie-list">
      <h2 className="movie-list__title">כל הסרטים</h2>
      <div className="movie-list__grid">
        <MovieCard
          title="Inception"
          year={2010}
          duration={148}
          genre="Sci-Fi"
          rating={8.8}
          poster="/posters/inception.svg"
          available={true}
        />
        <MovieCard
          title="The Lion King"
          year={1994}
          duration={88}
          genre="Animation"
          rating={8.5}
          poster="/posters/the-lion-king.svg"
          available={true}
        />
        <MovieCard
          title="Interstellar"
          year={2014}
          duration={169}
          genre="Sci-Fi"
          rating={8.7}
          poster="/posters/interstellar.svg"
          available={false}
        />
        <MovieCard
          title="Parasite"
          year={2019}
          duration={132}
          genre="Thriller"
          rating={8.5}
          poster="/posters/parasite.svg"
          available={true}
        />
        <MovieCard
          title="Toy Story"
          year={1995}
          duration={81}
          genre="Animation"
          rating={10.0}
          poster="/posters/toy-story.svg"
          available={true}
        />
        <MovieCard
          title="The Dark Knight"
          year={2008}
          duration={152}
          genre="Action"
          rating={9.0}
          poster="/posters/the-dark-knight.svg"
          available={false}
        />
      </div>
    </section>
  );
}

export default MovieList;
