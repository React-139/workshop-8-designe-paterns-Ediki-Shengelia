import React, { useState } from "react";
import Modal from "./Modal";
const Posts = ({ props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const ModalFunc = () => {
    setIsModalOpen(!isModalOpen);
  };
  const raxac = () => {
    setIsDeleted(true);
    ModalFunc();
  };
  if (isDeleted) return null;
  return (
    <>
      {isModalOpen ? (
        <Modal>
          <div>
            <h1>ნამდვილად გსურს პოსტის წაშლა?</h1>
            <button
              style={{ backgroundColor: "green", color: "white" }}
              onClick={ModalFunc}
            >
              close
            </button>
            <button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={raxac}
            >
              Delete
            </button>
          </div>
        </Modal>
      ) : (
        <div
          style={{
            border: "2px solid red",
            padding: 30,
            width: "fit-content",
            height: "fit-content",
            marginBottom: 20,
          }}
        >
          <h5 style={{ color: "black" }}>{props.id}</h5>
          <h2 style={{ color: "red" }}>{props.title}</h2>
          <h3 style={{ color: "green" }}>{props.body}</h3>
          <button onClick={ModalFunc}>Delete this post</button>
        </div>
      )}
    </>
  );
};

export default Posts;
