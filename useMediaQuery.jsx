import React, { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = (event) => {
      setMatches(event.matches);
    };
    mediaQueryList.addEventListener("change", handleChange);
    setMatches(mediaQueryList.matches);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={
        isMobile ? { backgroundColor: "orange" } : { backgroundColor: "pink" }
      }
    >
      <h1>Media Query Example</h1>
      <p>Is Mobile: {isMobile ? "Yes" : "No"}</p>
    </div>
  );
}

export default App;
