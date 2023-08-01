import React from "react";

import Header from './components/Header';
import Producers from "./components/Producers";

export default function Home() {
    return (
        <>
            <Producers header={header} />
        </>
    );
}