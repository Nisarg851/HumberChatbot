import { useState } from "react";
import MenuIcon from "../assets/menu-icon.svg"

const MenuView = () => {

    const quick_links: Array<string> = ["link1","link2","link3","link4","link5"]

    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <div className={`
        absolute 
        z-20  
        top-0 
        left-0 
        m-5
        w-fit
        h-fit 
        ${menuToggle ? "rounded-xl" : "rounded-full"}
        bg-[#a234b5]`}>
            <div className="
            w-fit
            ">
                <img src={MenuIcon} className="
                m-0
                p-2
                w-fit
                h-[45px]
                bg-[#ffffff00]
                rounded-full
                " 
                onClick={() => {setMenuToggle(prevState => (!prevState))}}
                alt="send"></img>
                {
                    menuToggle 
                    ?  <ul className="
                        w-[90vw]
                        lg:w-[20vw]
                        "> Quick Links
                            {
                                quick_links.map(link => (
                                    <li className="m-1 p-1 text-left">{link}</li>
                                ))
                            }
                        </ul>
                    :   <div></div>
                }
            </div>
        </div>
    );
}

export default MenuView