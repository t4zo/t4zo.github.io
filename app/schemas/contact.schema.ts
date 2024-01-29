import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve conter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(5, 'Mensagem deve conter pelo menos 5 caracteres')
});