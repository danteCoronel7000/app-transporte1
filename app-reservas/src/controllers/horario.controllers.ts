import { Request, Response } from "express";
import { Horarios } from "../entities/Horarios";
import exp from "constants";
import { prependListener } from "process";



    export const createHorario = async (req:Request, res:Response) =>{

    try {   
            const {RutaID, BusID, FechaSalida, HoraSalida, FechaLlegada, Precio} = req.body;
    
            const horario = new Horarios();
            horario.RutaID = RutaID;
            horario.BusID = BusID;
            horario.FechaSalida = FechaSalida;
            horario.HoraSalida = HoraSalida;
            horario.FechaLlegada = FechaLlegada;
            horario.Precio  = Precio;
            
            await horario.save()
            return res.json(horario)
    
    } catch (error) {
        if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
    
    export const getHorarios = async ( req:Request, res:Response) =>{
        try {
            const horarios = await Horarios.find();
            return res.json(horarios)    
        } catch (error) {
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
    
    export const updateHorario = async (req:Request, res:Response) => {
    
        try {
            const {RutaID, BusID, FechaSalida, HoraSalida, FechaLlegada, Precio} = req.body;
        
        const horario = await Horarios.findOneBy({HorarioID: parseInt(req.params.id)});
        
        if(!horario) return res.status(404).json({message: 'Horario does not exists'});
    
        horario.RutaID = RutaID;
        horario.BusID  = BusID;
        horario.FechaSalida = FechaSalida;
        horario.HoraSalida  = HoraSalida;
        horario.FechaLlegada = FechaLlegada;
        horario.Precio = Precio;
    
        horario.save();
        
        return res.sendStatus(204)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message})
            }
        }
    }
    
    export const deleteHorario = async (req:Request, res:Response) => {
        try {
            const {id} = req.params;
    
            const result = await Horarios.delete({HorarioID: parseInt(id)})
    
            if(result.affected === 0){
                    return res.status(404).json({message: 'Horario not found'})
        }
        
        return res.sendStatus(204)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message})
            }
        }
    }
    
    export const getHorario = async (req:Request, res: Response) => {
        try {
            const {id} = req.params;
            const horario = await Horarios.findOneBy({HorarioID: parseInt(id)});
            
            if(horario === null){
                return res.status(404).json('Horario not found')
            }
            return res.json(horario);
        } catch (error) {
            if(error instanceof Error){
                return res.status(500).json({ message: error.message})
            }
        }
    }