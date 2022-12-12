import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState();

  function fetchUser() {
    fetch("http://localhost:6969/get-user")
      .then((raw) => raw.json())
      .then((data) => setRes(data.msg));
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <span>{res || "NOT FOUND"}</span>
    </div>
  );
}

export default App;
