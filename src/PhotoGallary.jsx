import React from "react";
import flowers1 from "./assets/flowers.jpg";
import flower from "./assets/flowerss.png";
import redflower from "./assets/redFlowers.jpg";
import yellowflowers from "./assets/yellowflowers.jpg";
import { useState, useRef} from "react";

function PhotoGallary() {
  const [flowers, setFlowers] = useState([
    flowers1,
    flower,
    redflower,
    yellowflowers,
  ]);
  const fileInputRef = useRef(null);
  const [currentpic, setCurrentpic] = useState(0);

  function handleNext() {
    setCurrentpic((previousImg) => (previousImg + 1) % flowers.length);
  }

  function handleDelete() {
    setFlowers(flowers.filter((item, _) => item != flowers[currentpic]));
  }

  function handleAdd(e) {
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setFlowers([imageUrl, ...flowers]); // add image to start
          setCurrentpic(0); // show new image
        }
      }
  

  const handlePrevious = () => {
    setCurrentpic(
      (previousImg) => (previousImg - 1 + flowers.length) % flowers.length
    );
  };

  return (
    <>
      <div className="container">
        <img
          src={flowers[currentpic]}
          alt="image not found"
          className="imgLarge"
          style={{ height: "400px", border: "solid gray 1px" }}
        />

        <div className="image-div">
          <img
            src={flowers[(currentpic + 1) % flowers.length]}
            alt="image not found"
            className="img"
          />
          <img
            src={flowers[(currentpic + 2) % flowers.length]}
            alt="image not found"
            className="img"
          />
          <img
            src={flowers[(currentpic + 3) % flowers.length]}
            alt="image not found"
            className="img"
          />
        </div>

        <div className="btn-div">
          <button className="btn" onClick={handlePrevious}>
            Previous
          </button>

          <button className="btn" onClick={handleNext}>
            Next
          </button>

          <button
            className="btn"
            style={{ backgroundColor: "red" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "darkred")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "red")}
            onClick={handleDelete}
          >
            Delete
          </button>

          <button
            className="btn"
            style={{ backgroundColor: "green" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "darkgreen")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "green")}
            onClick={() => fileInputRef.current.click()} 
          >
            Add
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }} // hide the input
              ref={fileInputRef}
              onChange={handleAdd}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default PhotoGallary;
