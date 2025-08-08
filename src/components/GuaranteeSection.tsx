"use client";

import React from "react";
import * as motion from "motion/react-client";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, ThumbsUp, RefreshCw } from "lucide-react";

export const GuaranteeSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Proteção Total",
      desc: "Você está 100% protegido contra riscos. Só fica com a página se realmente amar o resultado.",
    },
    {
      icon: ThumbsUp,
      title: "Garantia de Satisfação",
      desc: "Se não atingir o nível prometido, devolvemos seu investimento sem enrolação.",
    },
    {
      icon: RefreshCw,
      title: "Revisões Inclusas",
      desc: "Ajustamos até que sua landing esteja perfeita e pronta para converter.",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950 overflow-hidden">
      {/* Glow no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent"
          >
            Garantia Incondicional de 7 Dias
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white-300 font-light"
          >
            Confiança total no que entregamos: se em até 7 dias você não estiver
            satisfeito, devolvemos 100% do valor sem perguntas.
          </motion.p>
        </motion.div>

        {/* Selo + Benefícios */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Selo */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={scaleIn}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full border-4 border-purple-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.5)] animate-pulse">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-20 blur-2xl" />
              <span className="text-3xl font-extrabold text-white text-center leading-tight">
                100%
                <br />
                Garantido
              </span>
            </div>
          </motion.div>

          {/* Lista de benefícios */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {benefits.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <CardContent className="flex gap-4 items-start p-6">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-400">
                        {item.title}
                      </h3>
                      <p className="text-purple-200 text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
