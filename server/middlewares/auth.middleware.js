const jwt = require('jsonwebtoken');
require("dotenv").config();
const {BlacklistModel} = require("../models/blackList.models");

const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        if (!token) {
            return res.status(401).json({ msg: 'No token provided' });
        }
        const secret_key = process.env.secretKey;
        const decoded = jwt.verify(token, secret_key);
        if (!decoded) {
            return res.status(401).json({ msg: 'Invalid token' });
        }

        const isTokenBlacklisted = await BlacklistModel.findOne({ token: token });
        if (isTokenBlacklisted) {
            return res.status(401).json({ msg: 'Please login first!' });
        }

        next();
    } catch (err) {
        console.error('Authentication error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports ={
    auth
}