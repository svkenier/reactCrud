import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

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
};

export const FormModal = ({
  handleChange,
  handleSubmit,
  handleClose,
  handleOpen,
  open,
  user,
  addUpdate,
  findId,
}) => {
  return (
    <>
      <Box sx={{ width: "89%", display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleOpen}>Add User</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
          >
            <Button color="error" onClick={handleClose}>
              {" "}
              <CloseIcon />{" "}
            </Button>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <TextField
                value={user.name}
                name="name"
                onChange={handleChange}
                sx={{ width: "70%" }}
                type="text"
                placeholder="Ingrese su nombre"
              />
              <TextField
                value={user.email}
                name="email"
                onChange={handleChange}
                sx={{ width: "70%" }}
                type="email"
                placeholder="Ingrese su Email"
              />
              <TextField
                value={user.city}
                name="city"
                onChange={handleChange}
                sx={{ width: "70%" }}
                type="text"
                placeholder="Genero"
              />
              <TextField
                value={user.username}
                name="username"
                onChange={handleChange}
                sx={{ width: "70%" }}
                type="text"
                placeholder="Username"
              />
              <TextField
                value={user.website}
                name="website"
                onChange={handleChange}
                sx={{ width: "70%" }}
                type="text"
                placeholder="Website"
              />

              {user.id === null ? (
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                >
                  agregar
                </Button>
              ) : (
                <Button
                  onClick={() => addUpdate(findId)}
                  variant="contained"
                  color="primary"
                >
                  editar
                </Button>
              )}
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};
