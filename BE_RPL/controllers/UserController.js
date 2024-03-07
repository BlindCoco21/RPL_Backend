import User from "../models/UserModel.js";

export const getUsers = async(req, res) =>{
    try{
        const response = await User.findAll();
        res.status(200).jso(response);
    } catch (error) {
        console.log(error.message)
    }
}