import React from "react";
//import { data } from "../../data/products";

function Banner() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
  <div className="w-[90%] max-w-[1980px] bg-[#21262c] rounded-sm flex flex-col md:flex-row px-20 py-20 shadow-xl/70 relative overflow-hidden">

    <div className="absolute -right-40 center-30 w-[90%] h-[1700px] bg-[#30343b] rounded-full opacity-50 z-0"></div>    
    
    <div className="w-full md:w-1/2 flex flex-col justify-between relative z-10">
      <div className="w-full flex items-start">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-300 mt-2">
          HAMMER STARH
        </h1>
      </div>

      <div className="w-full mt-6 md:mt-auto mb-10 space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-extralight">
          Maquinaria a la
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-amber-300 font-semibold">
          ALTURA.
        </h2>
        <h2 className="text-lg sm:text-xl text-gray-400">
          Somos una empresa 100% tijuanense dedicada a la <br />
          importación de maquinaria pesada.
        </h2>
        <h2 className="text-lg sm:text-xl text-gray-300 font-bold">
          En HAMMER STARH trabajamos para ofrecerte calidad, <br />
          confianza y eficiencia en cada equipo. Nacimos con la <br />
          misión de brindarte la mejor relación entre precio, <br />
          productividad y rapidez, asegurando que encuentres justo <br />
          lo que necesitas.
        </h2>
        <button className="bg-amber-300 hover:bg-amber-400 font-extrabold text-lg sm:text-xl md:text-2xl px-10 py-3 shadow-yellow-900 transition duration-300">
          Contáctanos
        </button>
      </div>
    </div>

    <div className="w-[60%] flex items-center justify-center relative z-10">
      <img
        src="https://i.postimg.cc/sDGLmNRg/excavadora-Fondo.png"
        alt="Banner"
        className="rounded-xl max-h-full object-contain"
      />
    </div>

  </div>
</div>

    </>
  );
}

export default Banner;
