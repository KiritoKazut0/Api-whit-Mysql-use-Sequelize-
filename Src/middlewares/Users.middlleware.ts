import { Request, Response, NextFunction } from "express";

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({
            success: false,
            message: "Incomplete fields: username, password, and email are required."
        });
    }

    next();
}
