import { ArgumentMetadata, BadGatewayException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipePipe implements PipeTransform {


  transform(value: string, metadata: ArgumentMetadata) {
    //console.log({value, metadata});

    if(!isValidObjectId(value)){
      throw new BadGatewayException(`${value} No es un MongoID`)
    }

    return value.toUpperCase();
  }
}
