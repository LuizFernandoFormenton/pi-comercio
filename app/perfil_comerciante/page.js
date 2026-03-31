'use client'

import Link from "next/link";
import "./Perfil_comerciante.css"
import Produtos from "./Produtos";
import MenuLateral from "../components/Menu_lateral";


export default function PerfilComerciante() {



    return (
        
        <div  className="text-center mb-4 fw-bold" style={{ color: "#ff6b00" }}>

            <Produtos/>

            <div  className="text-center mb-4 fw-bold" style={{ color: "#ff6b00" }}>           

                {/* CONTEÚDO PRINCIPAL */}
                
                <div  className="text-center mb-4 fw-bold" style={{ color: "#ff6b00" }}>

                    

                </div>

            </div>
        </div>
    );
}