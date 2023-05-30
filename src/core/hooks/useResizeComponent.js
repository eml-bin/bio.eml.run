import React from 'react'
import _ from 'lodash'

const useResizeComponent = (ref) => {

    
    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleResize = () => {
        if (ref && ref.current) {
            const { width, height } = ref.current.getBoundingClientRect()

            setWidth(_.round(width))
            setHeight(_.round(height))
        }
    }
    
    React.useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [ref, handleResize])

    return { width, height }
}

export default useResizeComponent
