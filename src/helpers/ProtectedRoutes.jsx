import { useSelector } from "react-redux"

/**
 * ProtectedRoutes component checks if the counter value is at least 2.
 * If it is, it renders the children components; otherwise, it displays an access denied message.
 *
 * @param {Object} children - The children components to render if access is granted.
 * @returns {JSX.Element} The rendered component based on the counter value.
 */

export const ProtectedRoutes = (children) => {
  const counter = useSelector((state) => state.counter.value)

  return (
    <>
      {counter >= 2 ? (
        <div>{children.children}</div>
      ) : (
        <div>
          <h1>Access Denied</h1>
          <p>You need to increment the counter to access this route.</p>
        </div>
      )}
    </>
  )
}
