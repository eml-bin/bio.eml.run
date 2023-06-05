import { Box } from "@mui/material"
import React from "react"
import { useTools } from "./hook"
import './tools.css'
import { InfoBox } from "../../components/InfoBox/InfoBox"
import { useConstants } from "../../core/hooks/useConstants"
import { useTranslation } from "react-i18next"

const Tools = ({ showAnimation }) => {

    useTools()

    const {
        toolsData,
        sections
    } = useConstants()

    const { t } = useTranslation()

    return (
        <Box className={`${sections.TOOLS} neon-ef ${ showAnimation && 'snake-animation'}`}>
            <InfoBox
                titleLabel={`🛠️ ${t('herramientas')}`}
            >
                <hr className="dashed" /> 
                <br/>
                {
                    toolsData.map((tool, idx) => (
                        <Box key={`${tool.field}-${idx}`} className='description'>
                            <span> { t(tool.field) }: </span>
                            <Box className='items'>
                                {
                                    tool.items.map((item, idx) => (
                                        <span key={`${item}-${idx}`}>
                                            { t(item) }
                                        </span>
                                    ))
                                }
                            </Box>
                        </Box>
                    ))
                }
            </InfoBox>
        </Box>
    )
}

export { Tools }