import React, { useState } from "react";
import AuthScreen from "./components/auth/AuthScreen";
import Navigation from "./components/layout/Navigation";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TVSeriesPage from "./pages/TVSeriesPage";
import BookmarksPage from "./pages/BookmarksPage";
import { mockData } from "./data/mockData";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuth, setShowAuth] = useState(true);
  const [data, setData] = useState(mockData);
  const [user, setUser] = useState(null);

  // Authentication handlers
  const handleAuth = (email, password) => {
    setUser({ email, name: email.split("@")[0] });
    setIsAuthenticated(true);
    setShowAuth(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setShowAuth(true);
    setCurrentPage("home");
  };

  // Bookmark functionality
  const toggleBookmark = (id) => {
    setData((prevData) => {
      const newData = { ...prevData };

      newData.trending = newData.trending.map((item) =>
        item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
      );

      newData.movies = newData.movies.map((item) =>
        item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
      );

      newData.tvSeries = newData.tvSeries.map((item) =>
        item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
      );

      return newData;
    });
  };

  // Get all content for search and bookmarks
  const getAllContent = () => {
    return [...data.trending, ...data.movies, ...data.tvSeries];
  };

  // Filter content based on search
  const getFilteredContent = (content) => {
    if (!searchQuery) return content;
    return content.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Get bookmarked content
  const getBookmarkedContent = () => {
    return getAllContent().filter((item) => item.isBookmarked);
  };

  const renderPage = () => {
    const pageProps = {
      data,
      searchQuery,
      setSearchQuery,
      currentPage,
      toggleBookmark,
      getFilteredContent,
      getBookmarkedContent,
    };

    switch (currentPage) {
      case "home":
        return <HomePage {...pageProps} />;
      case "movies":
        return <MoviesPage {...pageProps} />;
      case "tv-series":
        return <TVSeriesPage {...pageProps} />;
      case "bookmarks":
        return <BookmarksPage {...pageProps} />;
      default:
        return <HomePage {...pageProps} />;
    }
  };

  // Show auth screen if not authenticated
  if (showAuth || !isAuthenticated) {
    return <AuthScreen onAuth={handleAuth} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onLogout={handleLogout}
        user={user}
      />
      <main className="ml-20 min-h-screen bg-slate-900 p-6">
        <div className="mx-auto max-w-6xl">{renderPage()}</div>
      </main>
    </div>
  );
};

export default App;
