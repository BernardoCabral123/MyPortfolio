import { useEffect, useState } from 'react';
import React from 'react';
import svgPath from '../../assets/images/animated.svg'

const AnimatedImg = () => {
    const [svgCode, setSvgCode] = useState<string>('');

    useEffect(() => {
        fetch(svgPath)
        .then(response => response.text())
        .then((data:string) => {
            setSvgCode(data);
        });
    }, []);

    return (<div dangerouslySetInnerHTML={{ __html: svgCode }} />)
}

export default AnimatedImg;