import {Entity, model, property} from '@loopback/repository';

@model()
export class Foto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<Foto>) {
    super(data);
  }
}

export interface FotoRelations {
  // describe navigational properties here
}

export type FotoWithRelations = Foto & FotoRelations;
