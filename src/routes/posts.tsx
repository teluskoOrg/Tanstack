import { queryClient } from '@/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
  component: RouteComponent,
})

const fetchPost = async() =>{
    await new Promise((resolve)=>setTimeout(resolve,2000))
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = response.json();
    return data;
}

function RouteComponent() {

    const {data, isLoading, isError, refetch, isFetching} = useQuery({
        queryKey:['posts'],
        queryFn: fetchPost
    })

    const mutation = useMutation({
        mutationFn: async(newPost)=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
                method:'POST',
                body: JSON.stringify(newPost),
                headers: {'Content-Type':'application/json'}
            })
            console.log(response)
            return response.json();
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['posts']})
        }
    })

    if(isLoading) return <p>...Loading</p>
    if(isError) return <p>Something weng wrong</p>
  return <>
    <ul>
        {!isFetching && data.slice(0,10).map((post)=>(
<li key={post.id}>{post.title}</li>
        ))}
    </ul>

    <button onClick={()=>refetch()}>Refetch</button>
    <button onClick={()=> mutation.mutate({title:'New Post',body:'hello'})}>Add</button>
  </>
}
