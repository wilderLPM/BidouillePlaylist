import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SongCard from "../components/SongCard";
import "./ResultPage.css";

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
      <div id="resultsDiv">
        {searchResults !== null &&
          searchResults.map((song) => <SongCard song={song} key={song.id} />)}
      </div>
    </>
  );
}
