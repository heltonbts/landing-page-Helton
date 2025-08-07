"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Eu from '../../public/helton.jpg'

export function WhoIAm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-md mx-auto my-12 p-6 bg-transparent rounded-lg shadow-lg text-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold mb-8 leading-none"
      >
        <span className="block text-white mb-2">
          Quem
        </span>
        <motion.span
          className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Sou eu?
        </motion.span>
      </motion.h3>
      <div className="mb-6">
        <Image
          src={Eu}
          alt="Foto de quem sou eu"
          width={120}
          height={120}
          className="rounded-full mx-auto"
        />
      </div>
      <Card className="bg-gray-900">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-300">
            Olá, eu sou o Helton!
          </h2>
          <p className="text-gray-300">
            Sou desenvolvedor Full‑Stack apaixonado por criar interfaces
            modernas, rápidas e acessíveis.
          </p>

          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" /> Next.js
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" /> Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" /> Animações suaves com
              Motion
            </li>
          </ul>

          <Button variant="default">Saiba Mais</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
