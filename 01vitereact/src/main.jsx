import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     target: '_blank'
//   }, 
//   children: 'Click here to visit Google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Click here to visit Google</a>
)

const reactElement = React.createElement('a', 
  {
    href: "https://google.com",
    target: '_blank'
  }, 
  'Click here to visit Google'
)

createRoot(document.getElementById('root')).render(
  
    // reactElement
  <App />
)
