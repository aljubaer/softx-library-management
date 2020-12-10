import * as yup from 'yup';
import {UserServices} from './user.service';

export const signUp = async (req, res) => {
    const sighUpSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required().min(6)
    });
    try {
        const data = req.body;
        const valid = await sighUpSchema.isValid(
            {
                email: data.email,
                password: data.password.trim()
            });
        if (valid) {
            const user = await UserServices.createUser(data);
            res.status(200).json({message: 'User registration successful'});
        } else {
            res.status(401).json({message: 'Invalid request.'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const login = async (req, res) => {
    const loginSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });
    const data = req.body;
    try {
        const valid = await loginSchema.isValid(data);
        if (valid) {
            try {
                const accessToken = await UserServices.getUser(data);
                console.log(accessToken);
                res.status(200).json(accessToken);
            } catch (error) {
                res.status(500).json({message: error.message});
            }
        } else {
            res.status(401).json({message: 'Invalid request'});
        }
    } catch (e) {
        res.status(401).json({message: 'Invalid request'});
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