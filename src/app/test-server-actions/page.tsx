import {AddForm} from "@/components/todo/AddForm";
import prisma from "@/utils/prisma";

export default async function Home() {
    const todos = await prisma.todo.findMany();
    console.log(todos);
    return (
        <main>
            <h1 className="sr-only">Todos</h1>
            <AddForm/>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                    </li>
                ))}
            </ul>
        </main>
    )
}
