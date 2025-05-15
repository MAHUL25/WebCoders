import React from 'react'

interface PreviewProps {
    html: string;
}

const Preview = ({html}: PreviewProps) => {
    return (
        <iframe sandbox='allow-scripts' srcDoc={html} title='Live Preview' className='w-full h-[95%] bg-white round-lg'/>
    )
}

export default Preview