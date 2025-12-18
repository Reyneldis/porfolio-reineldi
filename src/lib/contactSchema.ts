// src/lib/contactSchema.ts
import { z } from "zod";

// Definimos el esquema de validación para el formulario de contacto
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es obligatorio")
    .max(50, "El nombre debe tener menos de 50 caracteres"),
  email: z
    .string()
    .min(1, "El email es obligatorio")
    .email("Formato de email inválido"),
  subject: z
    .string()
    .min(1, "El asunto es obligatorio")
    .max(100, "El asunto debe tener menos de 100 caracteres"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "El mensaje debe tener menos de 500 caracteres"),
});

// Inferimos el tipo TypeScript a partir del esquema de Zod
// Esto nos da autocompletado y seguridad de tipos
export type ContactFormInputs = z.infer<typeof contactSchema>;
