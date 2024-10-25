import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Cliente extends Document {

    
    @Prop({required: false})
    cedula: string;

    @Prop({required: false})
    name: string;

    @Prop({required: false})
    lastname: string;


    @Prop({required: false, unique: false})
    email: string;

    @Prop({required: false})
    cel: string;


}


export const ClienteSchema = SchemaFactory.createForClass(Cliente)