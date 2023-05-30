import { Box } from "@mui/material"
import React from "react"
import './timeline.css'
import { useConstants } from "../../core/hooks/useConstants"
import { InfoBox } from "../../components/InfoBox/InfoBox"

const Timeline = ({ showAnimation }) => {

    const {
        sections,
        timelineData
    } = useConstants()

    return (
        <Box className={`${sections.TIMELINE} neon-ef ${ showAnimation ? 'snake-animation' : ''}`}>
            <InfoBox
                titleLabel={'⏳ línea del tiempo'}
            >
                <hr className="dashed" /> 
                <br/>
                {
                    timelineData.map((data, idx) => (
                        <Box className='description'>
                            <span> { data.title } ({ data.time}) </span>
                            <span> {`${data.role}`} </span>
                            <span dangerouslySetInnerHTML={{ __html: data.activity }} />
                        </Box>
                    ))
                }
            </InfoBox>
        </Box>
    )
}

export { Timeline }