import { useEffect, useState } from "react";
import { getAllUsers } from "../api/getAllUsers";
import { v4 as uuidv4 } from "uuid";
import { FormModal } from "../components/FormModal";
import axios from "axios";
import useDarkMode from "./useDarkMode";

const useUsers = () => {
  let defaultUser = {
    id: null,
    name: "",
    city: "",
    email: "",
    username: "",
    website: "",
  };

  

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(defaultUser);
  const [specificUser, setSpecificUser] = useState({});
  const [findId, setFindId] = useState(null);

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

  const getUsers = async () => {
    const allUsers = await getAllUsers();
    setUsers(allUsers);
  };

  useEffect(() => {
    getUsers();
  }, [users]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const createUser = () => {
    setUser({ ...user, id: uuidv4() });
    const url = "https://fake-api-spartan.herokuapp.com/users";
    axios.post(url, user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser();
    handleClose();
    setUser(defaultUser);
  };

  const handleDelete = (id) => {
    axios.delete(`https://fake-api-spartan.herokuapp.com/users/${id}`);
    handleCloseModalDelete();
  };

  const getUserDetails = (id) => {
    setSpecificUser(users.find((user) => user.id === id));
    handleOpenModalView();
  };

  const handleUpdate = (id) => {
    let userMod = users.find((user) => user.id === id);
    setUser(userMod);
    setFindId(id);
    handleOpen();
  };

  const addUpdate = (id) => {
    axios.put(`https://fake-api-spartan.herokuapp.com/users/${id}`, user);
    handleClose();
    setUser(defaultUser);
  };

  // "name": "Shermy Clinton",
  // "email": "sclinton5@abc.net.au",
  // "city": "Male",
  // "username": "sclinton5",
  // "website": "Fixflex"

  return {
    handleClose,
    handleOpen,
    handleSubmit,
    handleChange,
    handleDelete,
    handleCloseModalView,
    getUserDetails,
    handleUpdate,
    addUpdate,
    handleCloseModalDelete,
    handleOpenModalDelte,
    openModalDelete,
    findId,
    openModalView,
    open,
    user,
    users,
    specificUser,
    
  };
};

export default useUsers;
