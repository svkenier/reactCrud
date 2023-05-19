/* import useUsers from "./useUsers";
import { useState } from "react";

const useModals = () => {

    const {defaultUser,setFindId,setSpecificUser} = useUsers()

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setUser(defaultUser);
    };
  
    const [openModalView, setOpenModalView] = useState(false);
    const handleOpenModalView = () => setOpenModalView(true);
    const handleCloseModalView = () => setOpenModalView(false);
  
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const handleOpenModalDelte = (id) => {
      setOpenModalDelete(true);
      setFindId(id);
      setSpecificUser(users.find((user) => user.id === id));
      console.log("modalDeleteID", id);
    };
    const handleCloseModalDelete = () => setOpenModalDelete(false);

  return {
    open,
    handleOpen,
    handleClose,
    openModalView,
    handleCloseModalView,  
    handleOpenModalView,
    openModalDelete,
    handleOpenModalDelte,
    handleCloseModalDelete,
    
  }
}

export default useModals */