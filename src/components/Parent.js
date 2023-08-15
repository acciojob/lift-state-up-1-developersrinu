import React, { useState } from 'react';
import './style.css'; // Make sure to adjust the path according to your file structure

const Parent = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <div className='child'>
        <h2>Child Component</h2>
        <button onClick={toggleModal}>Show Modal</button>
        {showModal && <div className="modal">Modal Content
        <p>this is the model content</p>
        </div> 
        
        }
      </div>
    </div>
  );
};

export default Parent;

