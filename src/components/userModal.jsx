import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  pt: 2,
  pr: 2,
};

export default function UserModal({
  handleCloseModalView,
  openModalView,
  specificUser,
}) {
  return (
    <>
      <Modal
        open={openModalView}
        onClose={handleCloseModalView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              color="error"
              sx={{ p: 0, display: "flex", justifyContent: "flex-end" }}
              onClick={handleCloseModalView}
            >
              <CloseIcon />
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography variant="body1" fontWeight="bold" color="initial">
                Name:
              </Typography>
              <Typography variant="body1" color="initial">
                {specificUser.name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography variant="body1" fontWeight="bold" color="initial">
                Email:
              </Typography>
              <Typography variant="body1" color="initial">
                {specificUser.email}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography fontWeight="bold" variant="body1" color="initial">
                Gender:
              </Typography>
              <Typography variant="body1" color="initial">
                {specificUser.city}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography variant="body1" fontWeight="bold" color="initial">
                UserName:
              </Typography>
              <Typography variant="body1" color="initial">
                {specificUser.username}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography variant="body1" fontWeight="bold" color="initial">
                WebSite:
              </Typography>
              <Typography variant="body1" color="initial">
                {specificUser.website}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
