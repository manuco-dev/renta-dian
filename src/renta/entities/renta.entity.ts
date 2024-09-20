import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Renta extends Document{



    name: string;

    
    lastname: string;



    cel: string;



    email: string;


}

export const RentaSchema = SchemaFactory.createForClass(Renta)
