import React from "react";
import { Box, Typography } from "@mui/material";

function GaugeMeter({ value = 0 }) {
  // Calculate the rotation angle for the needle based on the value (0-100)
  const angle = (value / 100) * 180 - 90;

  return (
    <Box
      sx={{
        position: "relative",
        width: "200px",
        height: "100px",
        overflow: "hidden",
      }}
    >
      {/* Gauge background - colorful arcs */}
      <svg width="100%" height="100%" viewBox="0 0 200 100">
        <path
          d="M10,100 A90,90 0 0,1 190,100"
          fill="none"
          stroke="red"
          strokeWidth="20"
        />
        <path
          d="M45,100 A55,55 0 0,1 155,100"
          fill="none"
          stroke="#ff9900"
          strokeWidth="20"
        />
        <path
          d="M80,100 A20,20 0 0,1 120,100"
          fill="none"
          stroke="#ffdd00"
          strokeWidth="20"
        />
        <path
          d="M120,100 A20,20 0 0,1 160,100"
          fill="none"
          stroke="#b3d140"
          strokeWidth="20"
        />
        <path
          d="M160,100 A90,90 0 0,1 190,100"
          fill="none"
          stroke="green"
          strokeWidth="20"
        />
      </svg>

      {/* Needle */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "2px",
          height: "50px",
          backgroundColor: "black",
          transformOrigin: "bottom center",
          transform: `rotate(${angle}deg) translate(-50%, -100%)`,
          transition: "transform 0.3s ease",
        }}
      />

      {/* Center point of needle */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "8px",
          height: "8px",
          backgroundColor: "black",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Optional Value Text */}
      <Typography
        variant="body2"
        sx={{
          position: "absolute",
          top: "110%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {value}%
      </Typography>
    </Box>
  );
}

export default GaugeMeter;
