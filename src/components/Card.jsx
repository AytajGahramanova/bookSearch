import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const UserCard = ({ item }) => {
  return (
    <div>
      <Card hoverable style={{ width: 400 }}>
        {<img alt="example" src={item?.volumeInfo?.imageLinks?.thumbnail} />}
        <Meta
          title={item?.volumeInfo?.title}
          description={item?.volumeInfo?.description}
        />
      </Card>
    </div>
  );
};

export default UserCard;
