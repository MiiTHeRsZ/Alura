import { useEffect, useState } from 'react';

import { loadingHeader } from '../services/loadingData';

export default function useTexts() {
    const [texts, setTexts] = useState({});

    useEffect(() => {
        const devolution = loadingHeader();
        setTexts(devolution);
    }, []);

    return texts;
}