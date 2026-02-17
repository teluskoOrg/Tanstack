import { createFileRoute, Outlet } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start';
import { useEffect } from 'react';

const todoData = createServerFn().handler(async()=>{
const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const response = await data.json();
    console.log(response);
    return response;
})

export const Route = createFileRoute('/dashboard')({
  loader:()=> todoData(),
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(()=>{
    fetch('/api/dashboard').then((res)=>res.text()).then((data)=>console.log(data));
  })
  const todo = Route.useLoaderData();
  return <>
  <div className='flex justify-center items-center mt-5'>Hello "/dashboard"! </div>
  <div className='flex justify-center items-center mt-5'>{todo.title}</div>
  <Outlet/>
  </>
}
