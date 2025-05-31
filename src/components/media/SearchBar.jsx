import { Search } from "lucide-react";

const SearchBar = ({ searchQuery, setSearchQuery, currentPage }) => {
  const getPlaceholder = () => {
    switch (currentPage) {
      case "movies":
        return "Search for movies...";
      case "tv-series":
        return "Search for TV series...";
      default:
        return "Search for movies or TV series...";
    }
  };

  return (
    <div className="relative mb-8">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder={getPlaceholder()}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-transparent border-b border-gray-600 text-white text-lg focus:outline-none focus:border-gray-400 transition-colors"
      />
    </div>
  );
};

export default SearchBar;
