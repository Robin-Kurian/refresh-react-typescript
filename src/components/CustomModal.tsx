import React, { ReactNode, useState } from "react";
import Button from "./Button";
import "./CustomModal.css";

type CustomModalProps = {
  header: string; 
  body: string | ReactNode;   
}
const CustomModal = ({ header, body }: CustomModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const triggerModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* trigger btn */}
      <Button
        label={isModalOpen ? "Close Modal" : "Open Custom Modal"}
        onClick={triggerModal}
        className={"button btn-primary"}
      />
      {/* Modal */}
      {isModalOpen && (
        <>
          {/* backdrop */}
          <div className="modal-backdrop" onClick={triggerModal}></div>
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={triggerModal}>
                &times;
              </span>
              <div className="modal-header">{header}</div>
              <div className="modal-body">{body}</div>
              <Button
                label={isModalOpen ? "Close Modal" : "Open Custom Modal"}
                onClick={triggerModal}
                className={"button text-btn-close"}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CustomModal;
