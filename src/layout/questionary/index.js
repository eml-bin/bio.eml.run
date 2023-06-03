import { Box } from "@mui/material"
import React from "react"
import './questionary.css'
import { useConstants } from "../../core/hooks/useConstants"
import { InfoBox } from "../../components/InfoBox/InfoBox"
import { useTranslation } from "react-i18next"

const Questionary = ({ showAnimation }) => {

    const {
        sections,
        questionaryData
    } = useConstants()

    const { t } = useTranslation()

    return (
        <Box className={`${sections.QUESTIONARY} neon-ef ${ showAnimation ? 'snake-animation' : ''}`}>
            <InfoBox
                titleLabel={`🧑‍🦱 ${t('cuestionario')}`}
            >
                <hr className="dashed" /> 
                <br/>
                {
                    questionaryData.map((item, idx) => (
                        <Box className='questions'>
                            <span>P: { `${t(item.question)}` }</span>
                            <br/>
                            <span dangerouslySetInnerHTML={{ __html: `R: ${t(item.answer)}` }} />
                        </Box>
                    ))
                }
            </InfoBox>
        </Box>
    )
}

export { Questionary }