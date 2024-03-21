import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/theme-context";

interface RadialGradientProps {
  scale: string;
  opacity: string;
  position?: string;
  overflow?: string;
}

const RadialGradient: React.FC<RadialGradientProps> = ({
  scale,
  opacity,
  position,
  overflow,
}) => {
  const [mouseXpercentage, setMouseXPercentage] = useState<number>(0);
  const [mouseYpercentage, setMouseYPercentage] = useState<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Use viewport width and height to calculate the percentage
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newMouseXPercentage = (event.clientX / windowWidth) * 100;
      const newMouseYPercentage = (event.clientY / windowHeight) * 100;

      setMouseXPercentage(newMouseXPercentage);
      setMouseYPercentage(newMouseYPercentage);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const radialGradientStyle: React.CSSProperties = {
    // Use viewport units for the background position
    background: `radial-gradient(at ${mouseXpercentage}vw ${mouseYpercentage}vh, blue, ${
      theme === "light" ? "#bdc1c4" : "#0c1220"
    })`,
  };

  return (
    <div
      className={`radial-gradient-styling ${position} left-0 top-0 h-full w-full -z-[1] ${opacity} ${scale} ${overflow}`}
      style={radialGradientStyle}
    ></div>
  );
};

export default RadialGradient;
