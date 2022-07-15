import { User } from "../../domain/entities/User";

export interface UserRepository {
  getAll: () => Promise<User[]>;
  save: (user: User) => Promise<User>;
  getByUserName: (username: string) => Promise<User | null>;
  update: (user: User) => Promise<User>;
  delete: (user: User) => Promise<void>;
  getById: (id: string) => Promise<User | null>;
}

// Simplemente se definen los contratos que se usaran en la capa de estructura
// No hay ninguna logica, solo el contrato