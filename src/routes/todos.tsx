import { db } from '@/db'
import { todos } from '@/db/schema'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const createTodos = createServerFn({method:'POST'}).inputValidator((data:{title:string})=>data).handler(async({data})=>{
    await db.insert(todos).values({title:data.title})
})

const getTodo = createServerFn({method:'GET'}).handler(async()=>{
    return await db.select().from(todos)
})

export const Route = createFileRoute('/todos')({
    loader:()=>getTodo(),
  component: RouteComponent,
})

function RouteComponent() {
    const todo = Route.useLoaderData();
  return <>
  <button onClick={()=>createTodos({data:{title:'new todo'}})}>Add todo</button>
  {todo.map((t)=>(
    <li key={t.id}>{t.title}</li>
  ))}
  </>
}
