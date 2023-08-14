import React, { useState } from 'react';

// Parent component
const Parent = () => {
  // State to manage whether the modal should be shown or not
  const [showModal, setShowModal] = useState(false);

  // Function to handle the button click event
  const handleButtonClick = () => {
    // Set the state to true to show the modal
    setShowModal(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Render the Child component */}
      <Child showModal={showModal} onButtonClick={handleButtonClick} />
    </div>
  );
}

// Child component
const Child = ({ showModal, onButtonClick }) => {
  return (
    <div>
      <h3>Child Component</h3>
      {/* Button to trigger the showModal function in the parent */}
      <button onClick={onButtonClick}>Show Modal</button>
      {/* Conditional rendering based on the showModal prop */}
      {showModal && (
        <div>
          Modal is shown
          <p>htttttttt</p>
        </div>
      )}
    </div>
  );
}

export default Parent;


