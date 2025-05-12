import { FaWhatsapp } from "react-icons/fa";
import React from "react";

function ButtonWsp() {
return (
    <>
    <div className="fixed bottom-8 right-8 animate-bounce">
        <a href="https://wa.me/526648568481">
        <FaWhatsapp size={70} className="text-green-600" />
        </a>
    </div>
    </>
);
}

export default ButtonWsp;
