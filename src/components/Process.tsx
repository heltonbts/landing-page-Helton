"use client";

import React from "react";
import * as motion from "motion/react-client";
import { ClipboardCheck, FileText, Brush, Rocket } from "lucide-react";

export const WorkProcess = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const steps = [
    {
      icon: ClipboardCheck,
      title: "1. Briefing rápido",
      desc: "Entendo sua necessidade, produto e público-alvo para criar a página perfeita.",
    },
    {
      icon: FileText,
      title: "2. Estrutura e copy",
      desc: "Organizo o layout e crio o texto persuasivo que guia o visitante até a compra.",
    },
    {
      icon: Brush,
      title: "3. Design e personalização",
      desc: "Transformo as ideias em uma landing moderna, única e otimizada.",
    },
    {
      icon: Rocket,
      title: "4. Entrega e ajustes",
      desc: "Página entregue em até 48h, com ajustes inclusos para garantir a conversão.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent"
          >
            Como funciona o processo
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-300 max-w-3xl mx-auto font-light"
          >
            Simples, rápido e transparente. Veja como vamos transformar sua
            ideia em uma página que vende.
          </motion.p>
        </motion.div>

        {/* Etapas */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-3">
                {step.title}
              </h3>
              <p className="text-purple-200 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
