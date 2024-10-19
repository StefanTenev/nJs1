import React from 'react'

interface idkProps {
    text: string
    // dark: boolean
}

export default function Button({ text }: idkProps) {
  return (
    <button>
        {text}
    </button>
  )
}
