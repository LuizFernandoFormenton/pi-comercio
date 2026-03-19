'use client'

import { useParams } from "next/navigation";

function Comercio() {

    const params = useParams()

    return (
        <div>
            <h1>Detalhes do comércio</h1>
            <p>ID: {params.id}</p>
        </div>
    );
}

export default Comercio;