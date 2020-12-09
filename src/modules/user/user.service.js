import User from './user.model';

import { AuthServices } from '../../services/auth';


export const authUser = async (req, res, next) => {
    const token = AuthServices.getTokenFromHeaders(req);

    if (!token) {
        req.user = null;
        return res.sendStatus(401);
    }

    const user = await User.findById(token.id);

    if (!user) {
        req.user = null;
        return res.sendStatus(401);
    }

    req.user = user;
    return next();
};

const fetchAllUsers = async () => {
    const users = User.find();
    return users;
}

export const getUser = async (data) => {
    try {
        const _user = await User.findOne({email: data.email});
        if (!_user) {
            console.error("User not found!");
            throw new Error('User not exist');
        }
        const accessToken = AuthServices.createToken(_user);
        const user = {
            id: _user._id,
            name: _user.name,
            email: _user.email,
            accessToken
        }
        await User.updateOne({ _id: user._id }, {accessToken})
        return accessToken;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

export const createUser = async (data) => {
    try {
        if (await getUser(data)) {
            throw new Error('User exist');
        }
    } catch (e) {
        const user = await User.create(data);
        return user;
    }
};

export const UserServices = {
    getUser,
    createUser,
    fetchAllUsers
};