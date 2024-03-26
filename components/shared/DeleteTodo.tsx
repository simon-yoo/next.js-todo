'use client'

import Form from '../ui/Form'
import Button from '../ui/Button'
import Input from '../ui/Input'
import { todoType } from '@/types/todoType'
import { BsFillTrashFill } from 'react-icons/bs'
import { deleteTodo } from '@/app/actions/todoActions'

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input type='hidden' name='inputId' value={todo.id} />
      <Button type='submit' actionButton text={<BsFillTrashFill />} />
    </Form>
  )
}

export default DeleteTodo
