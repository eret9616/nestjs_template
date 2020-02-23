import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata): Promise<any> {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    let msg = '';

    function TraversalAndPrintErrors(arr) {
      for (const i of arr) {
        if (i.children) {
          TraversalAndPrintErrors(i.children);
        }
        if (i.constraints) {
          for (const j in i.constraints) {
            if (i.constraints.hasOwnProperty(j)) {
              msg += i.constraints[j] + ';';
            }
          }
        }
      }
    }
    TraversalAndPrintErrors(errors);

    if (errors.length > 0) {
      //         badrequestexceptions
      throw new BadRequestException(msg);
    }
    return value;
  }

  private toValidate(metatype: any): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
