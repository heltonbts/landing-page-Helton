// Ex: app/components/ContactForm.tsx
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { CreateLead } from "../actions/LeadResponse";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
};

type GetLeadProps = {
  GetLead: () => void;
};

export default function ContactForm({ GetLead }: GetLeadProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    setServerError(null);

    const result = await CreateLead(data);

    setIsSubmitting(false);

    if (result.success) {
      GetLead();
      toast.success("Mensagem enviada com sucesso");
      reset();
    } else {
      setServerError(result.error || "Ocorreu um erro desconhecido.");
    }
  };

  const inputClass =
    "mt-1 text-black block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none";
  const errorTextClass = "mt-1 text-red-500 text-xs";

  return (
    <div className="flex min-h-screen items-center justify-center p-4 m-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-slate-800 text-start">
          Entre em Contato
        </h2>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 text-start"
          >
            Nome Completo
          </label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome aqui"
            className={inputClass}
            {...register("name", { required: "O campo nome é obrigatório." })}
          />
          {errors.name && (
            <span className={errorTextClass}>{errors.name.message}</span>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700  text-start"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="voce@email.com"
            className={inputClass}
            {...register("email", {
              required: "O campo email é obrigatório.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Por favor, insira um email válido.",
              },
            })}
          />
          {errors.email && (
            <span className={errorTextClass}>{errors.email.message}</span>
          )}
        </div>

        {/* Campo WhatsApp */}
        <div>
          <label
            htmlFor="whatsapp"
            className="block text-sm font-medium text-black text-start"
          >
            WhatsApp
          </label>
          <input
            id="whatsapp"
            type="tel"
            placeholder="(99) 99999-9999"
            className={inputClass}
            {...register("whatsapp", {
              required: "O campo WhatsApp é obrigatório.",
            })}
          />
          {errors.whatsapp && (
            <span className={errorTextClass}>{errors.whatsapp.message}</span>
          )}
        </div>

        {/* Campo Mensagem */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-black text-start"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Deixe sua mensagem..."
            className={inputClass}
            {...register("message")} // Mensagem pode ser opcional
          />
        </div>

        {/* Erro do Servidor */}
        {serverError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{serverError}</span>
          </div>
        )}

        {/* Botão de Envio */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar Contato"}
          </button>
        </div>
      </form>
    </div>
  );
}
