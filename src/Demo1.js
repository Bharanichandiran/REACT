import React, { useState } from 'react';

const Demo1 = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(""); // State to store the selected animal

  function fun() {
    const animal = ["cat", "dog", "hamster"];
    const int = Math.floor(Math.random() * animal.length);
    setSelectedAnimal(animal[int]); // Update the state with the selected animal
  }

  return (
    <div>
      <p>I love {selectedAnimal || "..."}</p> {/* Display the selected animal or '...' if none is selected */}
      <button onClick={fun}>Subscribe</button> {/* Call the fun function on button click */}
    </div>
  );
};

export default Demo1;


