import { Box } from "@mui/material"
import React from "react"
import './timeline.css'
import { useConstants } from "../../core/hooks/useConstants"
import { InfoBox } from "../../components/InfoBox/InfoBox"
import { useTranslation } from "react-i18next"
import { useFormatters } from "../../core/hooks/useFormatters"

const Timeline = ({ showAnimation }) => {

    const {
        sections,
        timelineData
    } = useConstants()

    const { durationFormatter } = useFormatters()

    const { t } = useTranslation()

    return (
        <Box className={`${sections.TIMELINE} neon-ef ${ showAnimation ? 'snake-animation' : ''}`}>
            <InfoBox
                titleLabel={`⏳ ${t("línea del tiempo")}`}
            >
                <hr className="dashed" /> 
                <br/>
                {
                    timelineData.map((data, idx) => (
                        <Box key={`${data.title}${data.time}-${idx}`} className='description'>
                            <span> { data.title } ({ data.time}) { data.duration && `— [${ durationFormatter(data.duration) }]` } </span>
                            <span> { t(data.role) } </span>
                            <span dangerouslySetInnerHTML={{ __html: t(data.activity) }} />
                        </Box>
                    ))
                }
            </InfoBox>
        </Box>
    )
}

export { Timeline }