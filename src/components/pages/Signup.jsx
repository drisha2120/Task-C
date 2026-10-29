
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignup(event) {
    event.preventDefault()
    setMessage('')
    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      await updateProfile(userCredential.user, {
        displayName: name,
      })

      setMessage('Account created successfully!')
      setName('')
      setEmail('')
      setPassword('')
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto my-10 max-w-md rounded-xl bg-white p-8 shadow-md">
      <h1 className="mb-6 text-3xl font-bold">Create an Account</h1>

      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="mb-2 block">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block">Password</label>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Create a password (at least 6 characters)"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-teal-600 p-3 text-white disabled:opacity-50"
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>

        {message && (
          <p role="status" className="break-words text-sm">
            {message}
          </p>
        )}
      </form>
    </main>
  )
}

export default Signup
