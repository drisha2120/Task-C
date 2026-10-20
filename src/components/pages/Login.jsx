
function Login() {
  function handleLogin(event) {
    event.preventDefault()
    alert('Login form submitted!')
  }

  return (
    <main className="mx-auto my-10 max-w-md rounded-xl bg-white p-8 shadow-md">
      <h1 className="mb-6 text-3xl font-bold">Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="mb-2 block">Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block">Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <button className="w-full rounded-lg bg-teal-600 p-3 text-white">
          Login
        </button>
      </form>
    </main>
  )
}

export default Login

