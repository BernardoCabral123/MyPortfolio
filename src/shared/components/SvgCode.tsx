import { useEffect, useState } from 'react';
import React from 'react';

const SvgCode = ({ svgUrl }: { svgUrl: string }) => {
    const [svgCode, setSvgCode] = useState<string>('');

    useEffect(() => {
        fetch(svgUrl)
        .then(response => response.text())
        .then((data:string) => {
            setSvgCode(data);
        });
    }, []);

    return (<div dangerouslySetInnerHTML={{ __html: svgCode }} />)
}

export default SvgCode;