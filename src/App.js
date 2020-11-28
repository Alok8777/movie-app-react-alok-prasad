import React from "react";
import "./styles.css";
import Movies from "./Movies";
export default function App() {
  let [moviesList, setMoviesList] = React.useState([
    {
      title: "3 idiot",
      cast: "Amir, madhwan, sharman joshi",
      rating: "8.4"
    },
    {
      title: "Andhadhoon",
      cast: "Ayushman khurana , tabbu, Radhiksa Apte",
      rating: "8.3"
    },
    {
      title: "Special 26",
      cast: "Akshay kumar , Anupam kher , Manoj bajpayee",
      rating: "8.0"
    },
    {
      title: "Gangs of wassepur",
      cast: "Manoj bajpayee , nawazudhin sidhdhiki , pankaj tripathi",
      rating: "8.5"
    }
  ]);
  let handleDelete = (title) => {
    let temp = moviesList.filter((movie) => movie.title !== title);
    setMoviesList(temp);
  };
  return (
    <div className="App">
      {moviesList.map((movie) => (
        <Movies
          title={movie.title}
          cast={movie.cast}
          rating={movie.rating}
          ondelete={handleDelete}
          key={movie.title}
        />
      ))}
    </div>
  );
}
