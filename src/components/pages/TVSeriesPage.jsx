import React from "react";
import SearchBar from "../media/SearchBar";
import MediaCard from "../media/MediaCard";

const TVSeriesPage = ({
  data,
  searchQuery,
  setSearchQuery,
  currentPage,
  toggleBookmark,
  getFilteredContent,
}) => {
  const allTVSeries = [
    ...data.trending.filter((item) => item.category === "TV Series"),
    ...data.tvSeries,
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
          {searchQuery ? "Search Results" : "TV Series"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {getFilteredContent(allTVSeries).map((item) => (
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

export default TVSeriesPage;
