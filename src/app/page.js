import Image from "next/image";
import { TbWorld,TbBrandReactNative } from "react-icons/tb";

import { FaReact, FaNodeJs, FaJava,FaHtml5 ,FaCss3} from "react-icons/fa";
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
            <TbWorld color="black" size={20} />
            <h1 className="text-xl font-bold text-black text-base pt-[1px]">
              Español
            </h1>
          </div>
        </div>
      </header>

      <main className="mt-20 p-4 gap-10 flex flex-col">
        <div className="flex flex-col items-center">
          <p className="text-4xl text-black font-extrabold font-serif">
            ¿Quienes somos?
          </p>
          <div className="flex flex-row max-w-2xl break-words mt-10">
            <Image
              src="/images/about_us.webp"
              alt="Rivcode Logo"
              width={300}
              height={110}
              className="mr-4"
            />
            <p
              className="text-sm text-black
           font-serif font-semibold"
            >
              Somos una organización con sede en Costa Rica, dedicada al
              desarrollo e innovación tecnológica en los campos de software y
              hardware. Nos especializamos en crear soluciones avanzadas y
              eficientes, impulsando el crecimiento de empresas y proyectos
              mediante tecnologías de vanguardia que optimizan procesos y
              mejoran la calidad de los servicios.
            </p>
          </div>
        </div>

        <div className="flex flex-col h-screen bg-white items-center">
          <p className="text-2xl text-black font-extrabold font-serif">
            Desarrollo Frontend
          </p>
          <div className="flex flex-row max-w-2xl break-words mt-10">
            <Image
              src="/images/software.png"
              alt="Rivcode Logo"
              width={300}
              height={110}
              className="mr-4"
            />
            <div>
              <p
                className="text-sm text-black
           font-serif font-semibold"
              >
               
              </p>
              <div className="flex space-x-4">
              <div className="bg-black rounded-full p-2">
                  <TbBrandReactNative className="text-white text-3xl" />
                </div>
                <div className="bg-black rounded-full p-2">
                  <FaReact className="text-white text-3xl" />
                </div>
                <div className="bg-black rounded-full p-2">
                  <FaNodeJs className="text-white text-3xl" />
                </div>
                <div className="bg-black rounded-full p-2">
                  <FaSquareJs className="text-white text-3xl" />
                </div>
                <div className="bg-black rounded-full p-2">
                  <SiTailwindcss className="text-white text-3xl" />
                </div>
                <div className="bg-black rounded-full p-2">
                  <RiNextjsFill className="text-white text-3xl" />
                </div>
                <div className="bg-black rounded-full p-2">
                  <FaHtml5 className="text-white text-3xl" />
                </div>
                <div className="bg-black rounded-full p-2">
                  <FaCss3 className="text-white text-3xl" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
