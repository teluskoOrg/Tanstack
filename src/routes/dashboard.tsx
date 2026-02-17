import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
  <div>Hello "/dashboard"!</div>
  <Outlet/>
  </>
}
