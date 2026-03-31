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
            <h1>Listagem de Anúncios</h1>
            <p>Aqui você pode ver todos os anúncios cadastrados.</p>
            <hr></hr>
                <table className="table table-hover">
                    <thead>
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
                                <td>{anuncio.descricao}</td>
                                <td>{anuncio.planos}</td>
                                <td><a href={anuncio.url} target="_blank" rel="noopener noreferrer">{anuncio.url}</a></td>
                                <td><img src={anuncio.imagem} alt="Imagem do anúncio" style={{ width: '100px' }} /></td>

                                <td>
                                    <button onClick={() => aceitarAnuncio(anuncio.id)}>Aceitar</button>
                                    <button onClick={() => deletar(anuncio.id)} >Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
}