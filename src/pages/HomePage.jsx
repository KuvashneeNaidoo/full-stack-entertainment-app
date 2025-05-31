import SearchBar from "../components/media/SearchBar";
import MediaCard from "../components/media/MediaCard";

const HomePage = ({
  data,
  searchQuery,
  setSearchQuery,
  currentPage,
  toggleBookmark,
  getFilteredContent,
}) => {
  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentPage={currentPage}
      />

      {/* Trending Section */}
      <section className="mb-8">
        <h2 className="text-xl font-light text-white mb-6">Trending</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {getFilteredContent(data.trending).map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              isTrending
              onToggleBookmark={toggleBookmark}
            />
          ))}
        </div>
      </section>

      {/* Recommended Section */}
      <section>
        <h2 className="text-xl font-light text-white mb-6">
          {searchQuery ? "Search Results" : "Recommended for you"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {getFilteredContent([...data.movies, ...data.tvSeries]).map(
            (item) => (
              <MediaCard
                key={item.id}
                item={item}
                onToggleBookmark={toggleBookmark}
              />
            )
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
