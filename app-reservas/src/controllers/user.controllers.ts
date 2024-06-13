import { Request, Response } from "express"
import { Users } from "../entities/Users"
import exp from "constants";

export const createUser = async (req:Request, res:Response) =>{

try {   
        const {UsuarioID, Password, Email} = req.body;

        const user = new Users();
        user.UsuarioID = UsuarioID;
        user.Password = Password;
        user.Email = Email;
        
        await user.save()
        return res.json(user)

} catch (error) {
    if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const getUsers = async ( req:Request, res:Response) =>{
    try {
        const users = await Users.find();
        return res.json(users)    
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const updateUser = async (req:Request, res:Response) => {

    try {
        const {UsuarioID, Password, Email} = req.body;
    
    const user = await Users.findOneBy({UsuarioID: req.params.id});
    
    if(!user) return res.status(404).json({message: 'User does not exists'});

    user.UsuarioID = UsuarioID;
    user.Password = Password;
    user.Email = Email;

    user.save();
    
    return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const deleteUser = async (req:Request, res:Response) => {
    try {
        const {id} = req.params;

    const result = await Users.delete({UsuarioID: id})

    if(result.affected === 0){
        return res.status(404).json({message: 'user not found'})
    }
    
    return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const getUser = async (req:Request, res: Response) => {
    try {
        const {id} = req.params;
        const user = await Users.findOneBy({UsuarioID: id});
        
        if(user === null){
            return res.status(404).json('user not found')
        }
        return res.json(user);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message})
        }
    }
}