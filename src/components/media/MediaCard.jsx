import React from "react";
import { Bookmark, BookmarkCheck, Film, Tv } from "lucide-react";

const MediaCard = ({ item, isTrending = false, onToggleBookmark }) => {
  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    onToggleBookmark(item.id);
  };

  const thumbnailSrc = isTrending
    ? item.thumbnail.trending
    : item.thumbnail.regular;

  const imageClasses = `
    object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 w-full
    ${isTrending ? "h-48 sm:h-52 md:h-56" : "h-48"}
  `;

  return (
    <div className="relative cursor-pointer group">
      <div className="relative">
        <img src={thumbnailSrc} alt={item.title} className={imageClasses} />

        <button
          onClick={handleBookmarkClick}
          className="absolute top-3 right-3 bg-black bg-opacity-50 rounded-full p-2 transition-colors hover:bg-opacity-70"
          aria-label={`${
            item.isBookmarked ? "Remove from" : "Add to"
          } bookmarks`}
        >
          {item.isBookmarked ? (
            <BookmarkCheck className="w-4 h-4 text-white" />
          ) : (
            <Bookmark className="w-4 h-4 text-white" />
          )}
        </button>
      </div>

      <div className="mt-2">
        <div className="flex items-center text-sm text-gray-400 gap-2 mb-1">
          <span>{item.year}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            {item.category === "Movie" ? <Film size={12} /> : <Tv size={12} />}
            <span>{item.category}</span>
          </div>
          <span>•</span>
          <span>{item.rating}</span>
        </div>
        <h3 className="text-white font-medium">{item.title}</h3>
      </div>
    </div>
  );
};

export default MediaCard;
