import userModel from "../models/user.model.js";

const GetUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({ allusers: users, message: "Hello from admin!!" });
    //
  } catch (error) {
    res.status(500).json({ message: "Internal server error!!" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const checkAdmin = await userModel.findById(userId);
    if (checkAdmin.role == "admin") {
      return res.status(409).json({ message: "You Cannot delete yourself" });
    }

    const user = await userModel.findByIdAndDelete(userId);

    if (!user) {
      res.status(404).json({ message: "User Not Found!!" });
    }

    res.status(200).json({ message: "User deleted successfully!!", user });

    //
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: "Internal server error!!" });
  }
};

export { GetUser, deleteUser };
