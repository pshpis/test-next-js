'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import prisma from "@/utils/prisma";
import {wait} from "@/utils/wait";

export async function createTodo(prevState: any, formData: FormData) {
    await wait(1000);
    const schema = z.object({
        todo: z.string().min(1).max(20),
    });

    let data = {todo: ""};
    try {
        data = schema.parse({
            todo: formData.get('todo'),
        });
    }
    catch (e) {
        return { message: 'Failed data validation' }
    }

    try {
        await prisma.todo.create({
            data: {
                task: data.todo,
            },
        });

        revalidatePath('/');
        return { message: `Added todo ${data.todo}` }
    } catch (e) {
        return { message: 'Failed to create todo' }
    }
}
