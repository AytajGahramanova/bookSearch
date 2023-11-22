import React, { useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const App = () => {
  const [data, setData] = useState([]);
  const [inputBookName, setInputBookName] = useState("");

  const getData = async () => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${inputBookName}:keyes&key=AIzaSyBG2lxMMTXzeTP2KyheEYt9FSaFri2frWY`
    );
    setData(res?.data?.items);
    console.log(res?.data?.items);
  };

  return (
    <div>
      <div className="input-wrapper" style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "10px"}}>
      <input type="text" placeholder="Find book" style={{padding: "10px 60px"}} onChange={(e) => setInputBookName(e.target.value)}/>
      <button style={{padding: "10px 30px", marginLeft: 5}} onClick={getData}>Search</button>
      </div>
      <Cards data={data} />
    </div>
  );
};

export default App;
