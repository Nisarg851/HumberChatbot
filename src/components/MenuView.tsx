import { useState } from "react";
import MenuIcon from "../assets/menu-icon.svg"

const MenuView = () => {

    const quick_links: Array<string> = ["link1","link2","link3","link4","link5"]

    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <div className={`
        absolute 
        z-20  
        right-0 
        w-fit
        h-fit 
        ${menuToggle ? "rounded-xl" : "rounded-full"}
        bg-[#a234b500]`}>
            <div className="
            w-fit
            ">
                <img src={MenuIcon} className="
                p-2
                w-fit
                h-[45px]
                rounded-full
                " 
                onClick={() => {setMenuToggle(prevState => (!prevState))}}
                alt="send"></img>
                {
                    menuToggle 
                    ?  (<ul className="
                        w-[90vw]
                        lg:w-[20vw]
                        bg-[#041e41]
                        ">
                            {
                                quick_links.map(link => (
                                    <li className="m-1 p-1 text-left ">{link}</li>
                                ))
                            }
                        </ul>)
                    :   <div></div>
                }
            </div>
        </div>
    );
}

export default MenuView