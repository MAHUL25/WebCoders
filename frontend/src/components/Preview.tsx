import React from 'react'

interface PreviewProps {
    html: string;
}

const Preview = ({html}: PreviewProps) => {
    return (
        <iframe sandbox='allow-scripts' srcDoc={html} title='Live Preview' style={{width: '100%', height: '100%', border: 'none'}} />
    )
}

export default Preview