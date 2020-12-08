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
}

export const getUser = async (data) => {
    try {
        const _user = await User.findOne({ email: data.email });
        if (!_user){
            return null;
        }
        return _user;
    } catch (error) {
        throw error;
    }
}

export const createUser = async (data) => {
    try {
        if (getUser(data)) {
            return null;
        }
        const user = await User.create({data});
        return user;
    } catch (error) {
        throw error;
    }
    
}