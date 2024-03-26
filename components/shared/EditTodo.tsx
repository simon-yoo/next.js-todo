'use client'

import { edit } from '@/app/actions/todoActions'

import Form from '../ui/Form'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { todoType } from '@/types/todoType'

import { BiEdit } from 'react-icons/bi'
import { useState } from 'react'

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false)

  const handleEdit = () => {
    if (todo.isCompleted === true) {
      return
    }
    setEditTodo(!editTodo)
  }

  const handleSubmit = () => {
    setEditTodo(false)
  }

  return (
    <div className='flex gap-5 items-center'>
      {!editTodo && (
        <Button onClick={handleEdit} text={<BiEdit />} actionButton />
      )}
      {editTodo && (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name='inputId' value={todo.id} type='hidden' />
          <div className='flex justify-center'>
            <Input type='text' name='newTitle' placeholder='Edit Todo...' />
            <Button type='submit' text='Save' />
          </div>
        </Form>
      )}
    </div>
  )
}

export default EditTodo
