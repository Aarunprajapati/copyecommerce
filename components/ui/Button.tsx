"use client"

import React from "react"
import { useFormStatus } from "react-dom"

interface ButtonProps{
    type: "button" | "submit",
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean


}

const Button = ({
    type,
    children,
    onClick=()=>{},
    disabled
}:ButtonProps) => {
    const {pending} = useFormStatus()
  return (
    <button
    type={type}
    onClick={onClick}
    aria-disabled = {pending}
    disabled={disabled}
    className="px-3 py-1 text-white bg-gray-700 rounded-md shadow"
    >
        {children}
    </button>
  )
}

export default Button
