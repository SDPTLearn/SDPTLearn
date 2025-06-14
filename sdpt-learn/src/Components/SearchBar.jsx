import "../ComponentCss/SearchBar.css";

export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
    </>
  );
}