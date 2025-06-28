import { useForm } from "react-hook-form"

export const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    console.log("datos enviados: ", data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Formulario enviado con éxito")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-2 p-4 bg-white text-black flex flex-col gap-2"
    >
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        id="email"
        {...register("email", {
          required: "El email es requerido",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "El email no es válido",
          },
        })}
        className="border-2 p-2 rounded-md"
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        {...register("password", {
          required: "La contraseña es requerida",
          minLength: {
            value: 8,
            message: "La contraseña debe tener al menos 8 caracteres",
          },
        })}
        className="border-2 p-2 rounded-md"
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="text-white bg-blue-500 p-2 rounded-md"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  )
}
