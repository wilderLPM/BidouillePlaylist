import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SearchBar.css";
import Search from "../assets/search.svg";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (query.trim().length > 0) {
        navigate(`/result-page/:${encodeURIComponent(query)}`);
        setQuery("");
      } else {
        event.preventDefault();
      }
    }
  };

  const handleSubmit = (event) => {
    if (query.trim().length === 0) {
      event.preventDefault();
    }
  };

  return (
    <div id="searchBar">
      <input
        type="text"
        value={query}
        id="searchInput"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for a song"
      />
      <Link
        to={`/result-page/:${encodeURIComponent(query)}`}
        onClick={handleSubmit}
      >
        <img id="searchButton" src={Search} alt="Search for a song" />
      </Link>
    </div>
  );
}
