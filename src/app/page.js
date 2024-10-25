import Image from "next/image";
import { TbWorld, TbBrandReactNative, TbBrandCSharp } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { SiTailwindcss, SiMicrosoftazure, SiSpringboot } from "react-icons/si";
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

      <main className="mt-20 p-4 h-screen flex flex-col gap-10">
        <p className="text-2xl md:text-3xl lg:text-4xl text-blue-900 font-serif font-bold text-center">
          Nuestras Áreas de especialización
        </p>

        {/* Contenedor de las secciones */}
        <div className="flex flex-col md:flex-row bg-white items-center justify-center gap-4">
          {/* Sección Frontend */}
          <div className="flex-1 bg-slate-100 rounded-lg p-4 flex flex-col text-center md:text-left">
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-900 font-bold font-momo">
              Desarrollo Frontend
            </p>

            <p className="text-sm md:text-base lg:text-lg font-mono text-black mt-2 ">
              "Nos especializamos en crear interfaces atractivas, interactivas y optimizadas para el usuario, utilizando tecnologías modernas como React, Next.js y Tailwind CSS. Diseñamos experiencias intuitivas que se adaptan a cualquier dispositivo, asegurando que tu aplicación o sitio web no solo se vea bien, sino que también ofrezca una navegación fluida y eficiente."
            </p>

            {/* Iconos Frontend */}
            <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-9 gap-4 mt-4">
              <div className="w-max bg-blue-900 rounded-full p-2">
                <TbBrandReactNative className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="w-max bg-blue-900 rounded-full p-2">
                <FaReact className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="w-max bg-blue-900 rounded-full p-2">
                <FaNodeJs className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="w-max bg-blue-900 rounded-full p-2">
                <FaSquareJs className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="w-max bg-blue-900 rounded-full p-2">
                <SiTailwindcss className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="w-max bg-blue-900 rounded-full p-2">
                <RiNextjsFill className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="w-max bg-blue-900 rounded-full p-2">
                <FaHtml5 className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="w-max w-max bg-blue-900 rounded-full p-2">
                <FaCss3 className="text-white text-2xl md:text-3xl" />
              </div>
            </div>
          </div>

          {/* Sección Backend */}
          <div className="flex-1 bg-slate-100 rounded-lg p-4 flex flex-col text-center md:text-left">
            <p className="text-xl md:text-2xl lg:text-3xl text-red-900 font-extrabold font-serif">
              Desarrollo Backend
            </p>

            <p className="text-sm md:text-base lg:text-lg font-mono text-black mt-2 font-semibold">
              "Desarrollamos sistemas backend robustos y escalables que garantizan un rendimiento óptimo y la seguridad de tus datos. Utilizamos lenguajes y frameworks como Node.js, Python y bases de datos relacionales y no relacionales, para crear soluciones personalizadas que soporten la lógica de negocio, APIs y gestión eficiente de datos."
            </p>

            {/* Iconos Backend */}
            <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-8 gap-4 mt-4">
            <div className="w-max bg-red-900 rounded-full p-2">
                <FaJava className="text-white text-2xl md:text-3xl" />
                </div>
              <div className="w-max bg-red-900 rounded-full p-2">
                <TbBrandCSharp className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="w-max bg-red-900 rounded-full p-2">
                <DiMongodb className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="w-max bg-red-900 rounded-full p-2">
                <FaNodeJs className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="w-max bg-red-900 rounded-full p-2">
                <SiMicrosoftazure className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="w-max bg-red-900 rounded-full p-2">
                <IoLogoFirebase className="text-white text-2xl md:text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
