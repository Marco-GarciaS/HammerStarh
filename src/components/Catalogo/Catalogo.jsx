//import { data } from "../../data/products";

function Catalogo() {
return (
    <>
    <div className="flex flex-col items-center justify-center px-4 py-8">        
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-amber-300 font-semibold mb-10 text-center">
        Catálogo
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%] max-w-[1980px]">
        <div className="bg-[#21262c] shadow-xl/30 rounded-sm flex flex-col items-center justify-center h-50 ">
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold">
            SILENCED TYPE
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl">
            Hydraulic Breaker
            </h2>
            <img 
            src="https://i.postimg.cc/5ySW-PQ8m/silenced-Typecc.png"
            alt="Breaker"
            className="w-100 object-contain "
            />
        </div>

        <div className="bg-[#21262c] shadow-xl/30 rounded-sm flex flex-col items-center justify-center h-50 ">
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold">
            TOP TYPE
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl">
            Hydraulic Breaker
            </h2>
            <img
            src="https://i.postimg.cc/63R7YKzh/top-Type-pngc.png"
            alt="Breaker"
            className="w-100 object-contain "
            />
        </div>

        <div className="bg-[#21262c] shadow-xl/30 rounded-sm flex flex-col items-center justify-center h-50">
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold">
            SIDE TYPE
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl">
            Hydraulic Breaker
            </h2>
            <img
            src="https://i.postimg.cc/QdW0hGn2/side-Typecc.png"
            alt="Breaker"
            className="w-60 object-contain"
            />
        </div>
        
        <div className="bg-[#21262c] shadow-xl/30 rounded-sm flex flex-col items-center justify-center h-50">
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold">
            BACKHOE TYPE
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl">
            Hydraulic Breaker
            </h2>
            <img
            src="https://i.postimg.cc/dQyRxPDp/backhoec.png"
            alt="Breaker"
            className="w-90 object-contain "
            />
        </div>
        <div className="bg-[#21262c] shadow-xl/30 rounded-sm flex flex-col items-center justify-center h-50">
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold">
            SKID STEER
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl">
            Hydraulic Breaker
            </h2>
            <img
            src="https://i.postimg.cc/dt9ybqFH/skid-Steerc.png"
            alt="Breaker"
            className="w-20 object-contain "
            />
        </div>
        <div className="bg-[#21262c] shadow-xl/30 rounded-sm flex flex-col items-center justify-center h-50">
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold">
            EXCAVATOR TYPE
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl">
            Hydraulic Breaker
            </h2>
            <img
            src="https://i.postimg.cc/mgPB6P63/excavator-Type.png"
            alt="Breaker"
            className="w-20 object-contain "
            />
        </div>
        </div>
    </div>
    </>
);
}

export default Catalogo;
