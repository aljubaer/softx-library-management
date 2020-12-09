import * as Yup from 'yup';
import {getUser, UserServices} from './user.service';

export const signUp = async (req, res) => {
    try {
        console.log('SIgning up');
        const data = req.body;
        const user = await UserServices.createUser(data);
        console.log(user);
        res.status(200).json({message: 'User registration successful'});
    } catch (error) {
        res.status(401).json({message: error.message});
    }
};

export const login = async (req, res) => {
    const data = req.body;
    try {
        const accessToken = await getUser(data);
        console.log(accessToken);
        res.status(200).json(accessToken);
    } catch (error) {
        res.status(401).json({message: error.message});
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserServices.fetchAllUsers();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}