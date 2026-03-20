'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Comercio() {

    const params = useParams()
    const [listaComercios, alteralistaComercios] = useState([])

    
    async function mostraID() {
        const { data, error } = await supabase
            .from('comercios')
            .select('*')
            .eq('id',params.id)

        alteralistaComercios(data)
    }

    useEffect(() => {
        mostraID();
    }, [params.id]);


    return (
        <div>
            <h1>Detalhes do comércio</h1>
            <p>ID: {params.id}</p>

            <hr />

            {listaComercios.map((item, index) => (
                <div>
                     <img 
                        src={item.logo} 
                        alt="Logo do comércio" 
                        style={{ width: "150px", marginBottom: "10px" }}> 
                        
                        </img>
                    <p><strong>Comércio:</strong> {item.nome}</p>
                    <p><strong>E-mail:</strong> {item.email}</p>
                    <p><strong>Telefone:</strong> {item.telefone}</p>
                    <p><strong>Whatsapp:</strong> {item.whatsapp}</p>
                    <p><strong>Endereço:</strong> {item.endereco}</p>
                    <p><strong>Categoria:</strong> {item.categoria}</p>
                    <p><strong>Descrição:</strong> {item.descricao}</p>
                    <p><strong>Status:</strong> {item.status}</p>
                    <p><strong>Data de criação:</strong> {item.created_at}</p>

                </div>
            ))
            }

        </div>
    );
}

export default Comercio;