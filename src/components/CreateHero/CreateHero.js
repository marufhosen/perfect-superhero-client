import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Slider } from "@mui/material";
import "./CreateHero.css";

const CreateHero = () => {
  const [newSuperHero, setNewSuperHero] = useState({});

  //handle input id

  const handleInputId = (e) => {
    const newId = { ...newSuperHero };
    newId[e.target.name] = e.target.value;
    setNewSuperHero(newId);
  };

  //handle super hero characteristic

  const handleOnChange = (e) => {
    const newHeroCharacteristic = { ...newSuperHero };
    newHeroCharacteristic[e.target.name] = e.target.value;
    setNewSuperHero(newHeroCharacteristic);
  };

  // handle post new superhero to database

  const handleAddHero = () => {
    const url = "http://localhost:8080/addSuperhero";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newSuperHero),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
  };

  return (
    <div className="create-hero-container">
      <div className="input-container">
        <span>ID (text input)</span>
        <input type="text" name="superheroId" onChange={handleInputId} />
      </div>
      <Box width={400} className="range-container">
        <span>Strength</span>
        <Slider
          onChange={handleOnChange}
          name="strength"
          size="small"
          defaultValue={30}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <span>Invisibility</span>
        <Slider
          onChange={handleOnChange}
          name="invisibility"
          size="small"
          defaultValue={30}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <span>Healing</span>
        <Slider
          onChange={handleOnChange}
          name="healing"
          size="small"
          defaultValue={30}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <span>Shape Shift</span>
        <Slider
          onChange={handleOnChange}
          name="shapeShift"
          size="small"
          defaultValue={30}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <span>Telekinesis</span>
        <Slider
          onChange={handleOnChange}
          name="telekinesis"
          size="small"
          defaultValue={30}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Box>
      <div className="create-hero-button">
        <button onClick={handleAddHero}>Create Hero</button>
      </div>
    </div>
  );
};

export default CreateHero;
