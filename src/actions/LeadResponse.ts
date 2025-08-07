// app/actions/leadActions.ts
"use server";

import db from "@/lib/prisma";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres."),
  email: z.string().email("Por favor, insira um email válido."),
  whatsapp: z.string().min(10, "Número de WhatsApp inválido."),
  message: z.string().min(1, "A mensagem não pode estar em branco.").optional(),
});

interface CreateLeadProps {
  name: string;
  whatsapp: string;
  message: string;
  email: string;
}

export async function CreateLead(data: CreateLeadProps) {
  const validation = LeadSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      error: "Dados inválidos. Por favor, verifique os campos.",
    };
  }

  try {
    await db.lead.create({
      data: {
        name: validation.data.name,
        whatsapp: validation.data.whatsapp,
        message: validation.data.message || "",
        email: validation.data.email,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Erro ao criar lead:", error);
    return {
      success: false,
      error: "Ocorreu um erro no servidor. Tente novamente mais tarde.",
    };
  }
}