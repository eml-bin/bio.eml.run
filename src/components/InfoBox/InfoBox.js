import { Box } from "@mui/material"
import './infobox.css'

export const InfoBox = ({titleLabel, boxClass, children }) => {

    return (
        <Box
            className={`infobox ${boxClass && boxClass}`}
        >
            <Box className={'title'}>
                <span>{titleLabel}</span>
            </Box>
            { children }
        </Box>
    )
} 