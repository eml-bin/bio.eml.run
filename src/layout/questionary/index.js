import { Box } from "@mui/material"
import React from "react"
import './questionary.css'
import { useConstants } from "../../core/hooks/useConstants"
import { InfoBox } from "../../components/InfoBox/InfoBox"

const Questionary = ({ showAnimation }) => {

    const {
        sections,
        questionaryData
    } = useConstants()

    return (
        <Box className={`${sections.QUESTIONARY} neon-ef ${ showAnimation ? 'snake-animation' : ''}`}>
            <InfoBox
                titleLabel={'🧑‍🦱 biografía'}
            >
                <hr className="dashed" /> 
                <br/>
                {
                    questionaryData.map((item, idx) => (
                        <Box className='questions'>
                            <span>P: { item.question }</span>
                            <br/>
                            <span dangerouslySetInnerHTML={{ __html: `R: ${item.answer}` }} />
                        </Box>
                    ))
                }
            </InfoBox>
        </Box>
    )
}

export { Questionary }