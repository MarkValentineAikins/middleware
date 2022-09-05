const getUsers = (req, res) => {
    res.status(200).send("All Users");
  };
  
  const createUser = (req, res) => {
    res.status(200).send("Create User");
  };
  
  const updateUser = (req, res) => {
    res.status(200).send("Update User");
  };
  
  const deleteUser = (req, res) => {
    res.status(200).send("Delete User");
  };
  const getUser = (req, res) => {
    res.status(200).send("Get Single User");
  };
  
  module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUser,
  };
