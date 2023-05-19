import { Box, Typography } from "@mui/material";
import { FormModal } from "./FormModal";
import { TableUsers } from "./TableUsers";
import useUsers from "../hooks/useUsers";
import UserModal from "./userModal";
import DeleteModal from "./DeleteModal";
import useDarkMode from "../hooks/useDarkMode";
import ButtomDarkMode from "./ButtomDarkMode";



export const CrudApp = () => {
  const {
    handleChange,
    handleSubmit,
    handleDelete,
    getUserDetails,
    handleUpdate,
    addUpdate,
    findId,
    users,
    user,
    specificUser,
    open,
    handleOpen,
    handleClose,
    openModalView,
    handleCloseModalView,  
    openModalDelete,
    handleOpenModalDelte,
    handleCloseModalDelete,s
   
  } = useUsers();

  
  const { darkMode, darkStyle, handleDarkMode } = useDarkMode();
  return (
    <Box sx={ { minHeight:"100vh",minWidth:"100vw", margin:"0px" ,...darkStyle}}>
      <Typography align="center" variant="h4">
        CrudApp
      </Typography>

      <ButtomDarkMode darkMode={darkMode} handleDarkMode={handleDarkMode} darkStyle={darkStyle} />

      <FormModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
        addUpdate={addUpdate}
        findId={findId}
      />

      <DeleteModal
        findId={findId}
        specificUser={specificUser}
        openModalDelete={openModalDelete}
        handleCloseModalDelete={handleCloseModalDelete}
        handleDelete={handleDelete}
      />

      <UserModal
        specificUser={specificUser}
        openModalView={openModalView}
        handleCloseModalView={handleCloseModalView}
      />

      <TableUsers darkStyle={darkStyle}
        handleOpenModalDelte={handleOpenModalDelte}
        handleUpdate={handleUpdate}
        users={users}
        handleDelete={handleDelete}
        getUserDetails={getUserDetails}
      />
    </Box>
  );
};
