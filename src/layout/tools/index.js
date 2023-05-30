import { Box } from "@mui/material"
import React from "react"
import { useTools } from "./hook"
import './tools.css'
import { InfoBox } from "../../components/InfoBox/InfoBox"
import { useConstants } from "../../core/hooks/useConstants"

const Tools = ({ showAnimation }) => {

    useTools()

    const {
        toolsData,
        sections
    } = useConstants()

    return (
        <Box className={`${sections.TOOLS} neon-ef ${ showAnimation && 'snake-animation'}`}>
            <InfoBox
                titleLabel={'🛠️ herramientas'}
            >
                <hr className="dashed" /> 
                <br/>
                {
                    toolsData.map((tool, idx) => (
                        <Box className='description'>
                            <span> { tool.field }: </span>
                            <Box className='items'>
                                {
                                    tool.items.map((item, idx) => (
                                        <span>
                                            { item }
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