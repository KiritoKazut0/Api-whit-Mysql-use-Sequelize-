import { Request, Response, NextFunction } from "express";

export const validateFields = (req: Request, res:Response, next:NextFunction) => {
    const {username, password, email} = req.body;

    if (!username && !password && !email) {
        return res.status(400).json({
            succes: true,
            message: "Is requiered completed Fields"
        });
    }

    next();

}