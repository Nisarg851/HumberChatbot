import './App.css'

import ChatContainerView from './components/ChatContainerView'
import MenuView from './components/MenuView'

function App() {

  return (
      <div className='m-0 
      p-0 
      w-screen 
      h-screen 
      flex 
      justify-center 
      align-center
      bg-black'>
        {/* <MenuView/> */}
        <ChatContainerView/>
        {/* <div className="
        hidden
        lg:absolute 
        lg:block
        z-10  
        top-0 
        right-0 
        w-fit
        h-fit 
        bg-black"></div> */}
      </div>
  );
}

export default App
