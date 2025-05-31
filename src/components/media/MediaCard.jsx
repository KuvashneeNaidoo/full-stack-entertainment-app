import React, { useState } from "react";
import { Play, Bookmark, BookmarkCheck, Film, Tv } from "lucide-react";

const MediaCard = ({ item, isTrending = false, onToggleBookmark }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={isTrending ? item.thumbnail.trending : item.thumbnail.regular}
          alt={item.title}
          className={`
            object-cover rounded-lg transition-transform duration-300 group-hover:scale-105
            ${isTrending ? "w-80 h-56" : "w-full h-48"}
          `}
        />

        {/* Play Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-lg transition-opacity duration-300">
            <div className="bg-white bg-opacity-30 backdrop-blur-sm rounded-full p-3">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
        )}

        {/* Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(item.id);
          }}
          className="absolute top-3 right-3 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
        >
          {item.isBookmarked ? (
            <BookmarkCheck className="w-4 h-4 text-white" />
          ) : (
            <Bookmark className="w-4 h-4 text-white" />
          )}
        </button>
      </div>

      {/* Content Info */}
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
