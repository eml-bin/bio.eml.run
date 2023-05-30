import { useBackground } from "./hook"

import './background.css'

const BackgroundContainer = ({ device, children }) => {
    const { 
        canvasRef
    } = useBackground()

    return (
        <>
            <canvas ref={canvasRef}/>
            <div id="childrenContainer" className={device}>
                { children }
            </div>
        </>
    )
}

export default BackgroundContainer