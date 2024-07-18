import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function ResultPage() {
  const ApiKey = import.meta.env.VITE_API_KEY;
  const ApiSecret = import.meta.env.VITE_API_SECRET;
  let { query } = useParams();
  query = query.slice(1);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    const fetchDiscogs = async () => {
      try {
        const response = await fetch(
          `https://api.discogs.com/database/search?release_title=${query}&per_page=4&page=1&key=${ApiKey}&secret=${ApiSecret}`
        ).then((res) => res.json());

        setSearchResults(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchDiscogs();
  }, [ApiKey, ApiSecret, query]);

  return (
    <>
      <SearchBar />
      <h3>Results for {query}</h3>
      {searchResults !== null &&
        searchResults.map((song) => (
          <>
            <p>{song.title}</p>
            <img src={song.cover_image} alt={song.title} />
          </>
        ))}
    </>
  );
}
