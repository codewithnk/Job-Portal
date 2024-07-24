import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access",
            success: false
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.id = decoded.UserId;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token",
            success: false
        });
    }
}

export default isAuthenticated;
