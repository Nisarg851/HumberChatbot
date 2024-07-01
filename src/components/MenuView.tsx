import MenuIcon from "../assets/menu-icon.svg"

const MenuView = () => {
    return (
        <div className="absolute lg:relative 
        z-20  
        top-0 
        left-0 
        m-5
        w-fit
        h-fit 
        rounded-full
        border-2 
        bg-[#a234b5]">
            <img src={MenuIcon} className="
            m-0
            p-2
            w-[45px]
            bg-[#ffffff00]
            " alt="send"></img>
        </div>
    );
}

export default MenuView