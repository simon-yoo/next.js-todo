'use client'

import { useRef, ReactNode, FormEvent } from 'react'

interface formProps {
  children: ReactNode
  action: (formData: FormData) => Promise<void | boolean>
  className?: string
  onSubmit?: () => void
}

const Form = ({ children, action, className, onSubmit }: formProps) => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Prevent default form submission behavior

    const formData = new FormData(event.currentTarget) // Get form data
    await action(formData) // Call the action function with form data

    formRef.current?.reset() // Reset the form
    if (onSubmit) onSubmit() // Call onSubmit function if provided
  }
  return (
    <form className={className} onSubmit={handleSubmit} ref={formRef}>
      {children}
    </form>
  )
}

export default Form
