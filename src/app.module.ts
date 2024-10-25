import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { MongooseModule } from '@nestjs/mongoose';
import { ClienteModule } from './cliente/cliente.module';
import { CommonModule } from './common/common.module';

import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';




@Module({
  imports: [

    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema
    }),

    
    ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public'),
    }), 
    
    MongooseModule.forRoot(process.env.MONGODB),
    
      
    ClienteModule,
    
    CommonModule,
    
    
    
    
    ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(){
    
  }
}
