import { useEffect, useState } from 'react'
import { type Post as PostType } from './types/posts.types'
import Post from './components/post'
import './App.css'

function App () {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(async promise => await promise.json())
      .then(json => { setPosts(json as PostType[]) })
      .catch(err => { console.error(err) })
  }, [])
  return (
    <>
      <main>
        <header>
          <div>
            <img src="https://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="User avatar" />
          </div>
          <input type="text" placeholder='What is happening?' />
        </header>

        {
          posts.map((post) => (
            <Post key={post.id} createdAt={post.createdAt} mainText={post.mainText}/>
          ))
        }
      </main>
    </>
  )
}

export default App
