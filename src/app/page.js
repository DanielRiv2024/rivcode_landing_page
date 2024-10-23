import Image from "next/image";
import { TbWorld, TbBrandReactNative } from "react-icons/tb";

import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { SiTailwindcss, SiMicrosoftazure } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto p-2 flex flex-row justify-between">
          <Image
            src="/images/rivcode_logo.png"
            alt="Rivcode Logo"
            width={75}
            height={110}
            className="mr-4"
          />
          <div className="flex flex-row items-center gap-2">
            <TbWorld color="#1E3A8A" size={20} />
            <h1 className="text-xl font-bold text-blue-900 text-base pt-[1px]">
              Español
            </h1>
          </div>
        </div>
      </header>

      <main className="mt-20 p-4 h-screen gap-10 flex flex-col">
        <div className="flex flex-col bg-white items-center">
          <p className="text-3xl text-blue-900 font-serif font-bold">
            Nuestras Areas de especializacion
          </p>

          <div className="bg-slate-100 rounded-lg p-4">
            <p className="text-2xl text-gray-700 font-extrabold font-serif">
              Desarrollo Frontend
            </p>

            <p
              className="text-xs text-black
          font-extrabold text-black"
            >
              Utilizamos las últimas tecnologías para crear interfaces de
              usuario dinámicas y responsivas. Nuestro enfoque se centra en la
              experiencia del usuario y el rendimiento, asegurando que cada
              proyecto sea visualmente atractivo y funcional.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-900 rounded-full p-2">
                <TbBrandReactNative className="text-white text-3xl" />
              </div>
              <div className="bg-blue-900 rounded-full p-2">
                <FaReact className="text-white text-3xl" />
              </div>
              <div className="bg-blue-900 rounded-full p-2">
                <FaNodeJs className="text-white text-3xl" />
              </div>
              <div className="bg-blue-900 rounded-full p-2">
                <FaSquareJs className="text-white text-3xl" />
              </div>
              <div className="bg-blue-900 rounded-full p-2">
                <SiTailwindcss className="text-white text-3xl" />
              </div>
              <div className="bg-blue-900 rounded-full p-2">
                <RiNextjsFill className="text-white text-3xl" />
              </div>
              <div className="bg-blue-900 rounded-full p-2">
                <FaHtml5 className="text-white text-3xl" />
              </div>
              <div className="bg-blue-900 rounded-full p-2">
                <FaCss3 className="text-white text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
