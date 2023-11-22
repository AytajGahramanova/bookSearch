import React from "react";
import UserCard from "./Card";

const Cards = ({ data }) => {
  return (
    <div  style={{display: "flex", flexWrap: "wrap", gap: 30, alignItems: "center", justifyContent: "center"}}>
      {data.map((item) => (
        <UserCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cards;
