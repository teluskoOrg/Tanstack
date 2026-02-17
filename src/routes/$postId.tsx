import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
   const {postId} = Route.useParams();
  return <div>Hello "/$postId"! {postId}</div>
}
