import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Cliente extends Document {

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    lastname: string;


    @Prop({required: true, unique: true})
    email: string;

    @Prop({required: true})
    cel: string;


}


export const ClienteSchema = SchemaFactory.createForClass(Cliente)