import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const DeleteModal = ({
  openModalDelete,
  handleCloseModalDelete,
  handleDelete,
  findId,
  specificUser,
}) => {
  return (
    <>
      <Modal
        open={openModalDelete}
        onClose={handleCloseModalDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box align="center">
            <Typography>
              ¿Estas seguro que desea eliminar este usuario ?
            </Typography>
            <Typography fontWeight="bold" color="initial">
              {specificUser.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                mt: "20px",
              }}
            >
              <Button
                onClick={() => handleDelete(findId)}
                variant="contained"
                color="primary"
              >
                Si
              </Button>
              <Button
                onClick={handleCloseModalDelete}
                variant="contained"
                color="error"
              >
                No
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteModal;
