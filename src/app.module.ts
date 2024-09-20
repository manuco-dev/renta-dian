import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RentaModule } from './renta/renta.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteModule } from './cliente/cliente.module';
import { CommonModule } from './common/common.module';



@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public'),
    }), 
    
    MongooseModule.forRoot('mongodb://localhost:27017/renta-dian'),
    
    RentaModule,
    
    ClienteModule,
    
    CommonModule,
    
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
