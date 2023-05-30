import { useEffect, useRef, useState } from 'react'
import { useConstants } from '../../core/hooks/useConstants'

export const useBackground = () => {
    const canvasRef = useRef(null)

    const { codex } = useConstants()

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const canvas = canvasRef.current,
        context = canvas.getContext('2d'),
        innerWidth = (canvas.width = windowSize.width),
        innerHeight = (canvas.height = windowSize.height)

        let font = 16,
        col = (innerWidth / font),
        arr = [];

        for (let i = 0; i < col; i++) arr[i] = 87;
        var indexColor = 0
        
        const matrixTimer = setInterval(() => {
            context.fillStyle = "rgba(0,0,0,0.2)";
            context.fillRect(0, 0, innerWidth, innerHeight);
            context.fillStyle = '#1AF597';
            context.font = `${font}px aztec`;
            context.letterSpacing = "10px";
            
            indexColor++
            
            for (let i = 0; i < arr.length; i++) {
                let txt = codex[Math.floor(Math.random() * codex.length)];
                const X = i * font
                context.fillText(txt, X, arr[i] * font);
                
                if (arr[i] * font > innerHeight && Math.random() > 0.99) arr[i] = 0;
                arr[i]++;
            }

            if (indexColor === 3) indexColor = 0
        }, 87)

        return () => clearInterval(matrixTimer) 
        
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        canvasRef
    }
}

