import { useState } from "react";

export const useBio = () => {

    const [sectionButtonPressed, setSectionButtonPressed] = useState('');

    const handleSectionButtonClick = (section) => {

        if (sectionButtonPressed !== '') return 
        setSectionButtonPressed(section);
        setTimeout(() => {
            setSectionButtonPressed('');
        }, 2000); // Duración de la animación en milisegundos
    };

    return {
        sectionButtonPressed,
        handleSectionButtonClick
    }
}