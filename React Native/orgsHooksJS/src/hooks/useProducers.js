import { useEffect, useState } from "react";

import { loadingProducers } from "../services/loadingData";

export default function useProducers() {
    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const retorno = loadingProducers();
        retorno.lista.sort((produtor1, produtor2) => produtor1.distancia - produtor2.distancia);
        setTitle(retorno.titulo);
        setList(retorno.lista);
    }, []);

    return [title, list];
}
