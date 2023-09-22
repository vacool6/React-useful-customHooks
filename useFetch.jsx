import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

function App() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
  const { data, isLoading, error } = useFetch(apiUrl);

  return (
    <div className="App">
      <h1>API Data Fetching Example</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Title: {data.title}</h2>
          <p>Body: {data.body}</p>
        </div>
      )}
    </div>
  );
}
export default App;
