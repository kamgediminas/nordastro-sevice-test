"use client";
import React, { useEffect, useRef } from "react";

import { Origin, Horoscope } from "circular-natal-horoscope-js";
import Chart from "@astrodraw/astrochart";

// {
//     "name": "Mario Rossi",
//     "year": 1991,
//     "month": 5,
//     "day": 3,
//     "hour": 16,
//     "minute": 30,
//     "longitude": 51.5058800846886,
//     "latitude": -0.12564233344218367,
//     "city": "London",
//     "timezone": "Europe/London",
//     "language": "EN"
// }
//
const origin = new Origin({
  year: 1991,
  month: 4, // 0 = January, 11 = December!
  date: 3,
  hour: 16,
  minute: 30,
  latitude: 51.5058800846886,
  longitude: -0.12564233344218367,
});
//
const horoscope = new Horoscope({
  origin,
  houseSystem: "whole-sign",
  zodiac: "tropical",
  aspectPoints: ["bodies", "points", "angles"],
  aspectWithPoints: ["bodies", "points", "angles"],
  aspectTypes: ["major", "minor"],
  customOrbs: {},
  language: "en",
});

function moveElementToEnd(arr: any[]) {
  // Remove the first element from the array and store it in a variable
  const firstElement = arr.shift();

  // Push the first element to the end of the array
  arr.push(firstElement);

  return arr; // Return the modified array
}

const Astro = () => {
  //
  const planets = horoscope.CelestialBodies;

  const cusps = horoscope.ZodiacCusps.map((c) => {
    return c.ChartPosition.Horizon.DecimalDegrees;
  });

  var chart = new Chart("paper", 800, 800, {
    COLOR_GEMINI: "white",
    COLOR_ARIES: "white",
    COLORS_SIGNS: [
      "transparent",
      "transparent",
      "transparent",
      "transparent",
      "transparent",
      "transparent",
      "transparent",
      "transparent",
      "transparent",
      "transparent",
      "transparent",
      "transparent",
    ],
    SIGNS_COLOR: "white",
    CIRCLE_COLOR: "white",
    POINTS_COLOR: "white",
    LINE_COLOR: "white",
    CUSPS_FONT_COLOR: "white",
    COLOR_BACKGROUND: "transparent",
    // POINTS_STROKE: 100,
    CUSPS_STROKE: 2.5,
    // SHIFT_IN_DEGREES: 330,
    DEBUG: true,
  });

  var data = {
    planets: {
      Pluto: [planets.pluto.ChartPosition.Ecliptic.DecimalDegrees],
      Neptune: [planets.neptune.ChartPosition.Ecliptic.DecimalDegrees],
      Uranus: [planets.uranus.ChartPosition.Ecliptic.DecimalDegrees],
      Saturn: [planets.saturn.ChartPosition.Ecliptic.DecimalDegrees],
      Jupiter: [planets.jupiter.ChartPosition.Ecliptic.DecimalDegrees],
      Mars: [planets.mars.ChartPosition.Ecliptic.DecimalDegrees],
      Moon: [planets.moon.ChartPosition.Ecliptic.DecimalDegrees],
      Sun: [planets.sun.ChartPosition.Ecliptic.DecimalDegrees],
      Mercury: [planets.mercury.ChartPosition.Ecliptic.DecimalDegrees],
      Venus: [planets.venus.ChartPosition.Ecliptic.DecimalDegrees],
    },
    // cusps: moveElementToEnd(cusps),
    cusps: cusps,
    // cusps: cusps.reverse(),
    // cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
  };
  //
  console.log(cusps);
  console.log([296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]);
  const chart2 = new Chart("paper2", 800, 800);
  const data2 = {
    planets: {
      Pluto: [63],
      Neptune: [110],
      Uranus: [318],
      Saturn: [201],
      Jupiter: [192],
      Mars: [210],
      Moon: [268],
      Sun: [281],
      Mercury: [312],
      Venus: [330],
    },
    cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
  };

  //   chart.radix(data2);
  chart.radix(data).aspects();

  return (
    <>
      <div id="paper" />
      <div id="paper2" />
    </>
  );
};

export default Astro;
