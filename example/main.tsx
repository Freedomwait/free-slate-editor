import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Editor from '../packages/Editor'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>
)
