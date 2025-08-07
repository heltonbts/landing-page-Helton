"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Code2, Laptop2, Rocket, BookOpenCheck } from "lucide-react";
import Eu from "../../../public/helton.jpg";
import LogoWhatsApp from "../../../public/WhatsApp.webp";

export default function AboutMePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-4 py-16 bg-[#1E1B2E] text-white relative"
    >

      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          <span className="block mb-2 text-white">Sobre</span>
          <motion.span
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Helton Batista
          </motion.span>
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <Image
          src={Eu}
          alt="Helton Batista"
          width={400}
          height={400}
          className="rounded-xl shadow-lg border-2 border-purple-500 mx-auto"
        />

        <Card className="bg-gray-900">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-purple-300">
              Olá, eu sou o Helton!
            </h3>
            <p className="text-gray-300 text-lg">
              Sou desenvolvedor Full‑Stack especializado em criar aplicações
              modernas, funcionais e centradas na experiência do usuário.
            </p>

            <ul className="space-y-3 text-gray-300 text-left">
              <li className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-green-400" /> Stack: Next.js,
                TypeScript, Tailwind, Prisma
              </li>
              <li className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-green-400" /> Experiência com
                projetos SaaS e automações
              </li>
              <li className="flex items-center gap-2">
                <Laptop2 className="h-5 w-5 text-green-400" /> Landing pages,
                sistemas de agendamento e painéis
              </li>
              <li className="flex items-center gap-2">
                <BookOpenCheck className="h-5 w-5 text-green-400" /> Em
                constante evolução (cursos, bootcamps, EAD Engenharia de
                Software)
              </li>
            </ul>

            <Button variant="default" className="mt-4">
              Me chama no WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
