"use client";

import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import ReactPixel from "react-facebook-pixel";
import {
  CheckCircle,
  X,
  Zap,
  Clock,
  Star,
  Users,
  MessageCircle,
  Globe,
  Eye,
  TrendingUp,
  Smartphone,
  ArrowRight,
  Sparkles,
  CircleDollarSign,
} from "lucide-react";
import FormLead from "./FormLead";
import { WhoIAm } from "./WhoIAm";
import Image from "next/image";
import LogoWhatsApp from "../../public/WhatsApp.webp";
import { WorkProcess } from "./Process";
import { GuaranteeSection } from "./GuaranteeSection";
import Link from "next/link";

const options = {
  autoConfig: true,
  debug: true,
};

export const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);

  useEffect(() => {
    setIsVisible(true);
    ReactPixel.init("652632903896478", undefined, options);
    ReactPixel.pageView();
    console.log('pixel iniciado')
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const whatsapp = "https://wa.link/wwhcrs";

  const RefWhatsApp = () => {
    console.log('evento disparado')
    ReactPixel.track('Contact')
    window.open(whatsapp, "_blank");
  };

  const GetLead = () => {
    console.log('evento disparado')
    ReactPixel.track('Lead')
  };

  const WhatsAppButton = ({ children, className = "" }: any) => (
    <motion.a
      href="#"
      className={`inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 ${className} relative`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6" />
      {children}
      <ArrowRight className="w-5 h-5" />
    </motion.a>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="h-[60px] w-[60px] fixed bottom-6 right-6 z-50 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-120">
        <Link href={''} onClick={RefWhatsApp}>
          <Image
            src={LogoWhatsApp}
            alt="logo do whatsapp"
            width={64}
            height={64}
          />
        </Link>
      </div>
      {/* Grid Background - similar to Motion.dev */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 69, 199, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 69, 199, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Hero Section - Motion.dev inspired */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Smartphone className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">
                Landing Page Profissional
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-none"
          >
            <span className="block text-white mb-2">
              Landing page profissional que vende por você
            </span>
            <motion.span
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              em até 48h
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Página rápida, bonita e pronta para rodar no seu tráfego. Você foca
            no produto. Eu entrego a página que converte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            onClick={RefWhatsApp}
          >
            <WhatsAppButton className="text-lg font-semibold">
              Quero minha landing page
            </WhatsAppButton>

            <motion.div
              className="flex items-center gap-2 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <CircleDollarSign className="w-4 h-4" />
              <span>Satisfação total, ou seu dinheiro de volta</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {[
              { icon: Zap, text: "Entrega rápida" },
              { icon: Globe, text: "Design moderno" },
              { icon: TrendingUp, text: "Foco em vendas" },
              { icon: Star, text: "100% personalizada" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(139, 69, 199, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon className="w-6 h-6 text-purple-400" />
                <span className="text-sm text-gray-300 font-medium">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              Você está perdendo{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                dinheiro
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
            >
              Está começando como infoprodutor? Precisa de uma landing rápida
              para testar sua oferta? Já tem tráfego, mas sente que sua página
              atual não converte?
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-red-400">
                  Sem uma landing bem feita
                </h3>
              </div>

              {[
                'Suas vendas dependem da "sorte"',
                "Você perde leads todos os dias",
                "Fica invisível para o cliente",
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-red-500/5 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20 hover:border-red-500/30 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-300 font-medium">
                    {problem}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-green-400">
                  Com uma landing otimizada
                </h3>
              </div>

              {[
                "Você vende 24h por dia, no automático",
                "Passa mais autoridade e confiança",
                "Vende e Captura leads mesmo enquanto dorme",
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-green-500/5 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 hover:border-green-500/30 transition-all duration-300"
                  whileHover={{ x: -4 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-300 font-medium">
                    {solution}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits & Proposal Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div variants={scaleIn} className="inline-block mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-full">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent"
            >
              🚀 O que você recebe:
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {[
              {
                icon: Globe,
                title: "Página moderna, rápida e personalizada",
                description: "Design único que representa sua marca",
              },
              {
                icon: TrendingUp,
                title: "Layout que vende: adaptado ao seu negócio",
                description: "Estrutura pensada para maximizar conversões",
              },
              {
                icon: MessageCircle,
                title: "Formulário de contato ou botão direto pro WhatsApp",
                description: "Facilita o contato dos seus clientes",
              },
              {
                icon: Clock,
                title: "Pronta em até 48 horas",
                description: "Agilidade sem perder a qualidade",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">
                  ✅ {benefit.title}
                </h3>
                <p className="text-purple-200">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30"
          >
            <p className="text-lg text-purple-200 mb-2">
              Tudo feito com as tecnologias mais modernas
            </p>
          </motion.div>
        </div>
        <WhoIAm />
      </section>

      <section>
        <WorkProcess />
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            >
              Resultados Comprovados
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  metric: "+10",
                  label: "projetos entregues no setor digital",
                },
                {
                  icon: Star,
                  metric: "100%",
                  label: "dos clientes satisfeitos",
                },
                {
                  icon: Star,
                  metric: "5.0",
                  label: "no atendimento e suporte",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-purple-900" />
                  </div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-purple-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm p-8 rounded-2xl border border-indigo-400/30"
            >
              <p className="text-lg text-indigo-200 mb-2">
                📍 Freelancer especialista em páginas que vendem
              </p>
              <p className="text-indigo-300">
                +1 ano desenvolvendo projetos para o digital
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section>
        <GuaranteeSection />
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-red-900/30 to-purple-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={scaleIn} className="inline-block mb-8">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-full">
                <Clock className="w-16 h-16 text-white animate-spin" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
            >
              ⚠️ Vagas limitadas por semana
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-purple-200 mb-12"
            >
              Clique abaixo e peça agora sua landing page pronta para vender.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="space-y-4"
              onClick={RefWhatsApp}
            >
              <WhatsAppButton className="text-xl px-12 py-6">
                COMEÇAR AGORA
              </WhatsAppButton>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-purple-300"
              >
                ⚡ Resposta em até 30 minutos
              </motion.p>
            </motion.div>
          </motion.div>
          <div>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-purple-200 mt-12 mb-0"
            >
              Ficou com alguma dúvida? Preencha o formulário e eu retorno
              rapidamente para ajudar.
            </motion.p>
            <FormLead GetLead={GetLead}/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-400"
          >
            © 2025 - Landing Pages Profissionais | Transformando Instagram em
            máquinas de venda
          </motion.p>
        </div>
      </footer>
    </div>
  );
};
