import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./ComparisonChart.css";

const ComparisonChart = (props) => {
  const [getSuperHeroData, setGetsuperHeroData] = useState({});

  //get input character by props from input

  const {
    checkingStrength,
    checkingInvisibility,
    checkingHealing,
    checkingShapeShift,
    checkingTelekinesis,
    superheroId,
  } = props.checkSuperHeroCharacters;

  //get super hero characteristics from mongoDB

  useEffect(() => {
    fetch("http://localhost:8080/superHeroes/" + superheroId)
      .then((res) => res.json())
      .then((data) => setGetsuperHeroData(data));
  }, [superheroId]);

  //destructure superhero data

  const { strength, invisibility, healing, shapeShift, telekinesis } =
    getSuperHeroData;

  const data = [
    {
      name: "Strength",
      superHero: `${strength}`,
      checkingCharValue: `${checkingStrength}`,
      amt: 2400,
    },
    {
      name: "Invisibility",
      superHero: `${invisibility}`,
      checkingCharValue: `${checkingInvisibility}`,
      amt: 2210,
    },
    {
      name: "Healing",
      superHero: `${healing}`,
      checkingCharValue: `${checkingHealing}`,
      amt: 2290,
    },
    {
      name: "ShapeShift",
      superHero: `${shapeShift}`,
      checkingCharValue: `${checkingShapeShift}`,
      amt: 2000,
    },
    {
      name: "Telekinesis",
      superHero: `${telekinesis}`,
      checkingCharValue: `${checkingTelekinesis}`,
      amt: 2181,
    },
  ];
  return (
    <div>
      <BarChart
        className="chart-container"
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="superHero" fill="#a3375b" />
        <Bar dataKey="checkingCharValue" fill="#a491ff" />
      </BarChart>
    </div>
  );
};

export default ComparisonChart;
