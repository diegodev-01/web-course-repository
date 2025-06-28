import { useState } from "react"

const LoginView = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setError("Email is required")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      setError("Invalid email format")
      return
    }

    setError("")
    alert(`Email submitted: ${email}`)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enviar</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}

export default LoginView
