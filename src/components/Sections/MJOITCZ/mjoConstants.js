const items = [
    {
      color: "black",
      title: "⚫",
      description: "Current MJO Position (Single Big Black Dot)",
    },
    { color: "green", title: "🟢", description: "Forecasted MJO (Green Line with Small Dots)" },
  ];
  const items1 = [
    {
      color: "blue",
      title: "Convection",
      description: "Enhanced Rainfall Activity",
    },
    { color: "orange", title: "Supression", description: "Weak Rainfall Activity" },
  ];
  const items2 = [
    {
      color: "orange",
      title: "🟠El Niño",
      description: "Positive anomaly (orange above 0°C): Suggests warming – if sustained in Niño 3.4. Weak Rainfall Activity.",
    },
    { color: "blue", title: "🔵La Niña", description: "Negative anomaly (blue below 0°C): Suggests cooling – if sustained in Niño 3.4 Enhanced Rainfall Activity." },
    { color: "grey", title: "⚪Flat/near-zero line", description: "Temperatures close to the long-term average (neutral phase). Neutral effect, Normal Rainfall Activity." }
  ];

export {items,items1,items2};