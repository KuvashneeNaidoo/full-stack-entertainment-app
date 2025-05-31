import SearchBar from "../components/media/SearchBar";
import MediaCard from "../components/media/MediaCard";

const MoviesPage = ({
  data,
  searchQuery,
  setSearchQuery,
  currentPage,
  toggleBookmark,
  getFilteredContent,
}) => {
  const allMovies = [
    ...data.trending.filter((item) => item.category === "Movie"),
    ...data.movies,
  ];

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentPage={currentPage}
      />

      <section>
        <h2 className="text-xl font-light text-white mb-6">
          {searchQuery ? "Search Results" : "Movies"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {getFilteredContent(allMovies).map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              onToggleBookmark={toggleBookmark}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MoviesPage;
