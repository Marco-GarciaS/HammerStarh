function Banner() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-[90%] max-w-[1980px] h-[80vh] bg-[#2c343c] rounded-sm shadow-lg flex flex-col px-20 py-10">
          <div className="w-full flex items-start">
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-amber-300 mt-2">
              HAMMER STARH
            </h1>
          </div>

          <div className="w-full mt-auto mb-10 space-y-4">
            <h2 className="md:text-6xl sm:text-4xl text-3xl text-white font-extralight">
              Maquinaria a la
            </h2>
            <h2 className="md:text-6xl sm:text-4xl text-3xl text-amber-300 font-semibold">
              ALTURA.
            </h2>
            <h2 className="md:text-xl sm:text-xl text-lg text-gray-400">
              Somos una empresa 100% tijuanense dedicada a la <br></br>
              importacion de maquinaria pesada.
            </h2>
            <h2 className="md:text-xl sm:text-xl text-lg text-gray-300 font-bold">
              En HAMMER STARH trabajamos para ofrecerte calidad, <br></br>
              confianza y eficiencia en cada equipo. Nacimos con la <br></br>
              mision de brindarte la mejor relacion entre precio, <br></br>
              productividad y rapidez, asegurando que encuentres justo <br></br>
              lo que necesitas.
            </h2>
            <button className="bg-amber-300 hover:bg-amber-400 ml-20 font-extrabold md:text-2xl sm:text-xl text-lg px-15 py-3 shadow-yellow-900 transition duration-300">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
