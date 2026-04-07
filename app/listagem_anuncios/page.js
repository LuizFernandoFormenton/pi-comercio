'use client';

import { useEffect, useState } from 'react';
import supabase from '../conexao/supabase';
export default function ListagemAnuncios() {

    const [anuncios, setAnuncios] = useState([]);
    const [edita, setEditar] = useState(null);

    async function deletar(id) {
        const opcao = confirm("Tem certeza que deseja excluir?")
        if (opcao) {
            const { error } = await supabase
                .from('anuncios')
                .delete()
                .eq('id', id);

            if (error) {
                console.error('Erro ao excluir anúncio:', error);
            } else {
                buscarAnuncios();
            }
        }}

  
    async function aceitarAnuncio(id) {
        const { error } = await supabase
            .from('anuncios')
            .update({ status: true })
            .eq('id', id);

        if (error) {
            console.error('Erro ao aceitar anúncio:', error);
        } else {
            buscarAnuncios();
        }
    }

    async function buscarAnuncios() {
        const { data, error } = await supabase
            .from('anuncios')
            .select('*');

        if (error) {
            console.error('Erro ao buscar anúncios:', error);
        } else {
            setAnuncios(data);
        }
    }

    useEffect(() => {
        buscarAnuncios();
    }, []);

    return (
        <div className="container mt-5" >
            <h1><strong>Listagem de Anúncios</strong></h1>
            <p>Aqui você pode ver todos os anúncios cadastrados.</p>
            <hr />

            <div className="input-group">
                <input type="text" className="form-control" placeholder="Pesquisar..."
                    aria-label="Recipients username" aria-describedby="basic-addon2" />
                <button className="input-group-text" id="basic-addon2">🔍</button>
            </div>
            <br />
                <table className="table table-hover">
                    <thead style={{ backgroundColor: "#ff6b00", color: "white", fontWeight: "bold", fontSize: "18px"}}>
                        <tr>
                            <th scope="col" style={{ color: "#ff6b00" }}>Descrição</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Plano</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>link</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Imagem</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Acões</th>
                        </tr>
                    </thead>
                    <tbody>
                        {anuncios.map((anuncio) => (
                            <tr key={anuncio.id}>
                                <td><strong>{anuncio.descricao}</strong></td>
                                <td>{anuncio.planos} dias</td>
                                <td><a href={anuncio.url} target="_blank" rel="noopener noreferrer"><strong>Acessar o link da empresa</strong></a></td>
                                <td><img src={anuncio.imagem} alt="Imagem do anúncio" style={{ width: '300px' }} /></td>

                                <td>
                                    <button onClick={() => aceitarAnuncio(anuncio.id)} style={{ backgroundColor: "#28a745", color: "white", border: "none", padding: "5px 10px", marginRight: "5px" }}>Aceitar</button>
                                    <button onClick={() => deletar(anuncio.id)} style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "5px 10px" }}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
}