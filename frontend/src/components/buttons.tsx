import React from 'react'

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'submit';
    className?: string;
}

const Buttons = (_props: ButtonProps) => {
  return (
    <button type={_props.type}
        className={_props.className}
        onClick={_props.onClick}>
        {_props.label}
    </button>
  )
}

export default Buttons