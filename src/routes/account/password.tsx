import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/account/password')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/account/password"!</div>
}
