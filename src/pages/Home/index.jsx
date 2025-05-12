import Banner from "../../components/Banners/Banner";
import Catalogo from "../../components/Catalogo/Catalogo";
import ButtonWsp from "../../components/Button/ButtonWsp";

function index() {
  return (
    <>
    <Banner />
    
    <Catalogo />

    <ButtonWsp />
    {/* 
    <div className="">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Bienvenido a mi página web
      </h1>
      <p className="text-gray-700 text-lg max-w-xl text-center">
        Esta es una página creada con React, Vite y Tailwind CSS. 
        <br></br>
        Aquí puedes encontrar información básica sobre lo que hacemos.
      </p>
    </div>
      */}
    </>
  );
}

export default index;
