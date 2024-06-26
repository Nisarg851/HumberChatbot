import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ChatView from './components/ChatView'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <ChatView/>
      </div>
  );
}

export default App
