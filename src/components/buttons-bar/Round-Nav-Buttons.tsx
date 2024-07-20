import React from "react";
import Stack from "@mui/material/Stack";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

interface RoundNavButtonsProps {
  buttonText: string;
  onClick: () => void;
}

const RoundNavButons: React.FC<RoundNavButtonsProps> = ({}) => {
  return (
    <Stack spacing={2} direction="row">
      <IconButton color="error">
        <CloseRoundedIcon />
      </IconButton>
    </Stack>
  );
};

export default RoundNavButons;
