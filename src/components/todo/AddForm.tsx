'use client'

import {experimental_useFormState as useFormState} from 'react-dom'
import {createTodo} from "@/actions/todo";

const initialState = {
    message: null,
}

export function AddForm() {
    const [state, formAction] = useFormState(createTodo, initialState)

    return (
        <form action={formAction}>
            <label htmlFor="todo">Enter Task</label>
            <input type="text" id="todo" name="todo" required/>
            <button type="submit">
                Add
            </button>
            <p aria-live="polite" style={{color: 'coral'}} role="status">
                {state?.message}
            </p>
        </form>
    )
}
