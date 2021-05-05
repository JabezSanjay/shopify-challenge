import React, { useState } from "react";
import { fetchMovie } from "./api";

const App = () => {
  const [search, setSearch] = useState("");
  fetchMovie(search);
  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default App;
