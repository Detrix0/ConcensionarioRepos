import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehiculo extends Entity {
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
  color: string;

  @property({
    type: 'number',
    required: true,
  })
  modelo: number;

  @property({
    type: 'string',
    required: true,
  })
  serie_chasis: string;

  @property({
    type: 'string',
    required: true,
  })
  serie_motor: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'number',
    required: true,
    default: 0
  })
  descuento?: number;

  @property({
    type: 'boolean',
    default: true,
  })
  estado?: boolean;


  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
