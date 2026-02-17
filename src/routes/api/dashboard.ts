import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/dashboard')({
    server:{
        handlers:{
            GET:()=>{
                return new Response("Hello world")
            }
        }
    },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/api/dashboard"!</div>
}
