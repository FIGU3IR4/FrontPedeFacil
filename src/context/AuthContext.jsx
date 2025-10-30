import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [restaurante, setRestaurante] = useState(null)

  function login(data) {
    setRestaurante(data)
  }
  function logout() {
    setRestaurante(null)
  }

  return <AuthContext.Provider value={{ restaurante, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}