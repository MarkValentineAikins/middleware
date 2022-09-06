const router = require ("express").Router;
const {pathMiddleware} = require("../middleware/pathMiddleware");

const {
    createUser,
    deleteUser,
    getUsers,
    updateUser,
    getUser,
} = require("../controllers/users.controllers");

const userRouter = router();

/* userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.patch("/", updateUser);
userRouter.delete("/", deleteUser);
userRouter.get("/", getUser);
 */

//getting all users
userRouter.route("/").get(pathMiddleware, getUsers).post(createUser);
//getting a specific user with unique user id
userRouter.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);



module.exports = userRouter;
