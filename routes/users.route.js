const router = require ("express").Router;
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

userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);



module.exports = userRouter;
