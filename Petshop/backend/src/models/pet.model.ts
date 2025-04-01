import { Prisma } from '@prisma/client';

export class Pet implements Prisma.PetCreateInput {
  nome_sobrenome: string;
  animal: string;
  dono: string;
  nascimento: string | Date;
  raca: string;
  telefone: string;
}
