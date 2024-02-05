import LoginInput from './components/LoginInput'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login () {
  const urlHandler = useNavigate()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target[0]?.value,
        password: e.target[1]?.value
      })
    }).catch(err => {
      console.error(err)
    })

    urlHandler('/')
  }
  return (
    <main>
      <section className="login-info">
        <h1>Create User</h1>
        <p>Enter your information to create an account</p>
      </section>
      <section className="user-form">
        <form onSubmit={handleSubmit}>
          <LoginInput
            content="Username"
            placeholder="Enter your username"
            isRequired={true}
          />

          <LoginInput
            content="Password"
            placeholder="Entre a password"
            isRequired={true}
          />

          <button>
            Create User
          </button>
        </form>
      </section>
    </main>
  )
}
