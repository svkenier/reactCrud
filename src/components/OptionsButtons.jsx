import { Box, Button } from "@mui/material";

export const OptionsButtons = ({
  id,
  handleOpenModalDelte,
  getUserDetails,
  handleUpdate,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={() => handleOpenModalDelte(id)}
        sx={{ width: "20%" }}
        variant="contained"
        color="error"
      >
        Delete
      </Button>
      <Button
        onClick={() => handleUpdate(id)}
        sx={{ width: "20%" }}
        variant="contained"
        color="warning"
      >
        Update
      </Button>
      <Button
        onClick={() => getUserDetails(id)}
        sx={{ width: "20%" }}
        variant="contained"
        color="primary"
      >
        View
      </Button>
    </Box>
  );
};
