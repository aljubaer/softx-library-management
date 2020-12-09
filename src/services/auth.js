import jwt from 'jsonwebtoken';

const JWT_SECRET = 'secretkey';

const JWT_OPTS = {
    issuer: 'myapp'
};

const createToken = (user) => {
    if (!user && !user._id) {
        return null;
    }

    const payload = {
        id: user._id,
        role: user.role
    };

    return jwt.sign(payload, JWT_SECRET, JWT_OPTS);
};

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET, JWT_OPTS);
};

const getTokenFromHeaders = (req, res, next) => {
    let token = req.headers.authorization || '';
    token = token.replace("Bearer ", '');
    console.log('token ', token);
    if (token) {
        try {
            const payload = verifyToken(token);
            console.log('payload ', payload);
            req.payload = payload;
            next();
        } catch (error) {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
};

const isAdmin = (req, res, next) => {
    if (req.payload && req.payload.role === 'ADMIN') {
        next();
    } else res.sendStatus(401);
}

export const AuthServices = {
    createToken,
    verifyToken,
    getTokenFromHeaders,
    isAdmin
};
