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

export const getUserByid = async (req:Request, res:Response) => {
   try {
    const {id} = req.params;
    const ShearchUser = await Users.findOne({where:{id:id}});
    
    if (!ShearchUser) return res.status(404).json({
        succes: true,
        message: "User Not Found"
    })

    return res.status(200).json({
        succes: true,
        data: ShearchUser
    })

   } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server')
   }
    
}

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id || id === undefined) return res.status(400).send('is required user id')

      await  Users.destroy({
            where:  {
                id: id
            }
        })

        return res.status(200).json({
            succes: true
        })
        
    } catch (error) {
        console.log('hubo un error al eliminar el usuario', error);
        return res.status(500).send('error al eliminar un usuario')
    }

}