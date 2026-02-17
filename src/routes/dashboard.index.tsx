import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex justify-center items-center mt-5'>Hello "/dashboard/ default child route"!</div>
}
