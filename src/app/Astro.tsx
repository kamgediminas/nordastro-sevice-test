"use client";
import React from "react";

import { Origin, Horoscope } from "circular-natal-horoscope-js";
import Chart from "@astrodraw/astrochart";

const origin = new Origin({
  year: 1991,
  month: 4, // 0 = January, 11 = December!
  date: 3,
  hour: 16,
  minute: 30,
  latitude: 51.5058800846886,
  longitude: -0.12564233344218367,
});

const horoscope = new Horoscope({
  origin,
});

const Astro = () => {
  const planets = horoscope.CelestialBodies;
  const cusps = horoscope.ZodiacCusps.map((c) => {
    const degree = c.ChartPosition.Ecliptic.DecimalDegrees;
    let result = degree - 180;
    if (result < 0) {
      result += 360;
    }
    return result;
  });

  console.log(cusps);

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

  //   console.log(cusps);
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
    cusps: [360, 350, 340, 320, 310, 300, 290, 280, 270, 260, 250, 240],
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
