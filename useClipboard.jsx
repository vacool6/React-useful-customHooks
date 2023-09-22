import React from "react";

function useClipboard() {
  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return {
    copyToClipboard,
  };
}

function App() {
  const { copyToClipboard } = useClipboard();

  const handleCopyClick = () => {
    copyToClipboard("Hello, Clipboard!");
    alert("Text 'Hello, Clipboard!' copied to clipboard");
  };

  return (
    <div className="App">
      <h1>Clipboard Example</h1>
      <button onClick={handleCopyClick}>Copy to Clipboard</button>
    </div>
  );
}

export default App;
