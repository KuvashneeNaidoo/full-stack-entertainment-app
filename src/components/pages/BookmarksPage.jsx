import React from "react";
import { Bookmark } from "lucide-react";
import SearchBar from "../media/SearchBar";
import MediaCard from "../media/MediaCard";

const BookmarksPage = ({
  searchQuery,
  setSearchQuery,
  currentPage,
  toggleBookmark,
  getFilteredContent,
  getBookmarkedContent,
}) => {
  const bookmarkedContent = getBookmarkedContent();
  const bookmarkedMovies = bookmarkedContent.filter(
    (item) => item.category === "Movie"
  );
  const bookmarkedTVSeries = bookmarkedContent.filter(
    (item) => item.category === "TV Series"
  );

  if (bookmarkedContent.length === 0) {
    return (
      <>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          currentPage={currentPage}
        />
        <div className="text-center text-gray-400 py-12">
          <Bookmark className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg mb-2">No bookmarked content yet</p>
          <p className="text-sm">
            Start exploring and bookmark your favorites!
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentPage={currentPage}
      />

      {/* Bookmarked Movies */}
      {bookmarkedMovies.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-light text-white mb-6">
            Bookmarked Movies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {getFilteredContent(bookmarkedMovies).map((item) => (
              <MediaCard
                key={item.id}
                item={item}
                onToggleBookmark={toggleBookmark}
              />
            ))}
          </div>
        </section>
      )}

      {/* Bookmarked TV Series */}
      {bookmarkedTVSeries.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-light text-white mb-6">
            Bookmarked TV Series
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {getFilteredContent(bookmarkedTVSeries).map((item) => (
              <MediaCard
                key={item.id}
                item={item}
                onToggleBookmark={toggleBookmark}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default BookmarksPage;
