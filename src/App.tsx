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
      justify-evenly 
      align-center'>
        {/* <MenuView/> */}
        <ChatContainerView/>
        {/* <div className="absolute
        lg:relative 
        z-10 
        lg:z-0 
        top-0 
        left-0 
        w-full 
        lg:w-[25%] 
        h-full 
        rounded-2xl 
        flex 
        justify-center 
        items-end 
        border-2 
        bg-black"></div> */}
      </div>
  );
}

export default App
