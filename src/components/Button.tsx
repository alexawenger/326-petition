'use server';

import React from 'react'
interface ButtonProps {
  children: React.ReactNode
  action: () => void
}
const Button = ({children, action}: ButtonProps) => {
  return (
    <div onClick={action} className= 'bg-slate-500 hover:cursor-pointer p-4 rounded'>{children}</div>
  )
}

export default Button