import React, { useState } from "react";
import { Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import './../App.css';

const UserCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  const showModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <div>
      <Card hoverable style={{ width: 400 }}>
        {<img alt="example" src={item?.volumeInfo?.imageLinks?.thumbnail} />}
        <Meta
          title={item?.volumeInfo?.title}
          description={item?.volumeInfo?.description}
        />
        <a href={item?.volumeInfo.previewLink} style={{ margin: 10 }}>
          Preview
        </a>
        <a href="">
          <button type="primary" onClick={showModal}>
            Detail
          </button>
        </a>
        <Modal
          title={item?.volumeInfo?.description}
          open={open}
          onCancel={handleCancel}
        >
        </Modal>
      </Card>
    </div>
  );
};

export default UserCard;
