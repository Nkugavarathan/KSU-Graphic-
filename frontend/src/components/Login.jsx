import { useState } from "react"

function Login({ setIsAdmin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(
        "http://localhost/your-backend-folder/login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      )

      const data = await res.json()

      if (data.success) {
        setIsAdmin(true) // Save admin state in parent component
        setErrorMsg("") // Clear error if any
      } else {
        setErrorMsg(data.message)
      }
    } catch (error) {
      setErrorMsg("Server error")
    }
  }

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      </form>
    </div>
  )
}

export default Login
