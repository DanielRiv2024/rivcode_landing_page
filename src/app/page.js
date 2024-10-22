import Image from 'next/image';
import { TbWorld } from "react-icons/tb";


export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto p-4 flex flex-row justify-between">
        <Image
            src="/images/rivcode_image_bw.png"
            alt="Rivcode Logo"
            width={130}
            height={110}
            className="mr-4"
          />
          <div className='flex flex-row items-center gap-2'>
          <TbWorld color='black' size={20} />
          <h1 className="text-xl font-bold text-black text-lg">Español</h1>
          
          </div>
          
        </div>
      </header>

      <main className="p-4">
        <div className="h-screen bg-gray-100 mb-4">Contenido de prueba</div>
        <div className="h-screen bg-gray-200 mb-4">Más contenido de prueba</div>
      </main>
    </div>
  );
}
