import React, { useState, useEffect } from "react";

function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}

function App() {
  const scrollY = useScrollPosition();

  return (
    <div style={{ minHeight: "200vh" }}>
      <div style={{ position: "fixed" }}>
        <h1>Scroll Position Example</h1>
        <p>Scroll Y: {scrollY}px</p>
        <div style={{ height: "1000px" }}>
          Scroll down to see the value change.
        </div>
      </div>
    </div>
  );
}

export default App;
