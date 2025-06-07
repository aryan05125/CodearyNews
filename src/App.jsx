import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Influencers from "./pages/Influencers";
import Article from "./pages/Article";
import Search from "./pages/Search";
import Bookmark from "./pages/Bookmark";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

// Import common components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/influencers" element={<Influencers />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/search" element={<Search />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />

            {/* 404 fallback */}
            <Route
              path="*"
              element={
                <div className="text-center mt-20 text-xl">
                  <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                  <p>
                    Sorry, the page you are looking for does not exist. Go back to{" "}
                    <a href="/" className="text-indigo-500 hover:underline">
                      Home
                    </a>
                    .
                  </p>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
