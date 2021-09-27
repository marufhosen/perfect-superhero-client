import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import { Slider } from "@mui/material";
import "./ComparisonWithHero.css";
import ComparisonChart from "../ComparisonChart/ComparisonChart";
import { superHeroContext } from "../../App";

const ComparisonWithHero = () => {
  const [checkSuperHero, setCheckSuperHero] = useState({});

  const [checkSupHeroChar, setCheckSupHeroChar] = useContext(superHeroContext);

  const [showComparisonChart, setShowComparisonChart] = useState(false);

  //handle Checking Input

  const handleInputId = (e) => {
    const newId = { ...checkSuperHero };
    newId[e.target.name] = e.target.value;
    setCheckSuperHero(newId);
  };

  //handle Checking Characteristic Range

  const handleOnChange = (e) => {
    const newHeroCharacteristic = { ...checkSuperHero };
    newHeroCharacteristic[e.target.name] = e.target.value;
    setCheckSuperHero(newHeroCharacteristic);
  };

  // set Checking value into superHerocontext

  const handleCheching = () => {
    setCheckSupHeroChar(checkSuperHero);
    setShowComparisonChart(true);
  };

  return (
    <div className="interview-container">
      <div className="input-container">
        <span>ID (text input)</span>
        <input type="text" name="superheroId" onChange={handleInputId} />
      </div>
      <Box width={400} className="range-container">
        <span>How strong are you?</span>
        <Slider
          onChange={handleOnChange}
          name="checkingStrength"
          size="small"
          defaultValue={30}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <span>Your invisibility power -</span>
        <Slider
          onChange={handleOnChange}
          name="checkingInvisibility"
          size="small"
          defaultValue={30}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <span>How fast can you heal?</span>
        <Slider
          onChange={handleOnChange}
          name="checkingHealing"
          size="small"
          defaultValue={30}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <span>Your Shape Shift power -</span>
        <Slider
          onChange={handleOnChange}
          name="checkingShapeShift"
          size="small"
          defaultValue={30}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <span>Your telekinesis power -</span>
        <Slider
          onChange={handleOnChange}
          name="checkingTelekinesis"
          size="small"
          defaultValue={30}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Box>
      <div className="create-hero-button">
        <button onClick={handleCheching}>Check</button>
      </div>

      {/* Comparison Charts Components and send data by props from mongoDB */}

      {showComparisonChart && (
        <div>
          <ComparisonChart
            checkSuperHeroCharacters={checkSupHeroChar}
          ></ComparisonChart>
        </div>
      )}
    </div>
  );
};

export default ComparisonWithHero;
