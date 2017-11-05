import React from 'react'
import AuthView from './AuthView'

export const HomeView = () => (
  <div className="home-container">
    <div className="container">
      <h1>Öğretmenler için <br />başlangıç noktası!</h1>
      <AuthView />
    </div>
  </div>
)

export default HomeView
