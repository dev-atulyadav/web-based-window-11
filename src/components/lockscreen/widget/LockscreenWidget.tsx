import React from "react";

const LockscreenWidget = () => {
  const cardData = [
    {
      title: "Weather",
      icon: "weather",
      value: "20°C",
    },
    {
      title: "Weather",
      icon: "weather",
      value: "20°C",
    },
    {
      title: "Weather",
      icon: "weather",
      value: "20°C",
    },
  ];
  return (
    <div className="lockscreen__widget flex gap-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="h-32 w-72 backdrop-blur-md rounded-lg flex flex-col items-center justify-center gap-2"
        >
          <div className="lockscreen__widget-card-icon">
            {/* <Image src={card.icon} alt={card.title} /> */}
          </div>
          <h1 className="text-white text-xl font-semibold">{card.title}</h1>
          <p className="text-white text-3xl font-semibold">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default LockscreenWidget;
