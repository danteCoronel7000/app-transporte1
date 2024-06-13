import { Request, Response } from "express";
import { Reservas } from "../entities/Reservas";
import exp from "constants";


    export const createReserva = async (req:Request, res:Response) =>{

    try {   
            const {UsuarioID, HorarioID, FechaReserva, Asientos, Estado} = req.body;
    
            const reserva = new Reservas();
            reserva.UsuarioID = UsuarioID;
            reserva.HorarioID = HorarioID;
            reserva.FechaReserva = FechaReserva;
            reserva.Asientos = Asientos;
            reserva.Estado = Estado;
            
            await reserva.save()
            return res.json(reserva)
    
    } catch (error) {
        if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
    
    export const getReservas = async ( _req:Request, res:Response) =>{
        try {
            const reserva = await Reservas.find();
            return res.json(reserva)    
        } catch (error) {
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
    
    export const updateReserva = async (req:Request, res:Response) => {
    
        try {
            const {UsuarioID, HorarioID, FechaReserva, Asientos, Estado} = req.body;
        
        const reserva = await Reservas.findOneBy({ReservaID: parseInt(req.params.id)});
        
        if(!reserva) return res.status(404).json({message: 'Reserva does not exists'});
    
        reserva.UsuarioID = UsuarioID;
        reserva.HorarioID = HorarioID;
        reserva.FechaReserva = FechaReserva;
        reserva.Asientos = Asientos;
        reserva.Estado = Estado;
    
        reserva.save();
        
        return res.sendStatus(204)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message})
            }
        }
    }
    
    export const deleteReserva = async (req:Request, res:Response) => {
        try {
            const {id} = req.params;
    
        const result = await Reservas.delete({ReservaID: parseInt(id)})
    
        if(result.affected === 0){
            return res.status(404).json({message: 'Reserva not found'})
        }
        
        return res.sendStatus(204)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message})
            }
        }
    }
    
    export const getReserva = async (req:Request, res: Response) => {
        try {
            const {id} = req.params;
            console.log("UsuarioID:", id);
            const reserva = await Reservas.findOneBy({ReservaID: parseFloat(id)});
            if(reserva === null){
                return res.status(404).json('user not found')
            }
            return res.json(reserva);
        } catch (error) {
            if(error instanceof Error){
                return res.status(500).json({ message: error.message})
            }
        }
    }