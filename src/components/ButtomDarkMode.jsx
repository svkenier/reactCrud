import React from "react";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ButtomDarkMode = ({ darkMode, darkStyle, handleDarkMode }) => {
  return (
    <>
      <Button onClick={handleDarkMode} variant="text" color="primary" sx={{marginLeft:"5px"}}>
        {darkMode ? (
          <Stack>
            <Brightness7Icon sx={darkStyle} />
            <ToggleOnIcon sx={darkStyle} />
          </Stack>
        ) : (
          <Stack>
            <NightlightRoundIcon sx={darkStyle} />
            <ToggleOffIcon sx={darkStyle} />
          </Stack>
        )}
      </Button>
    </>
  );
};

export default ButtomDarkMode;
