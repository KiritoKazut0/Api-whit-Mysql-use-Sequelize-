import Users from "../Models/Users";
import { Request, Response } from "express";

export const addUser = async (req: Request, res: Response) => {

    try {
        const { username, password, email } = req.body;
        const newUser = await Users.create({ username, password, email });

        return res.status(201).json({
            succes: true,
            user: newUser
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send('No se pudo crear el usuario');
    }
}

export const getUsers = async (req: Request, res: Response) => {
   try {
    const users = await Users.findAll();

    return res.status(200).json({
        succes: true,
        data: users
    });
   } catch (error) {
        console.log(error);
        return res.status(500).send('hubo un error en el servidor');
   }
}