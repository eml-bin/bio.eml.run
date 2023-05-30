import React from 'react'
import { Box } from "@mui/material"

export const WebSectionContainer = ({ children, ...props }) => {
    return (
        <Box {...props}>
            { children }
        </Box>
    )
}