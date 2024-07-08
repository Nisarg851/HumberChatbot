import { useState } from "react";
import MenuIcon from "../assets/menu-icon.svg"
import CrossIcon2 from "../assets/cross-icon-2.svg"

const MenuView = () => {

    const quick_links: Array<string> = ["link1","link2","link3","link4","link5"]

    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <div className={`
        absolute
        top-2
        right-2
        w-fit
        h-fit
        border-2
        border-white 
        ${menuToggle ? "rounded-xl" : "rounded-full"}
        bg-[#a234b500]`}>
            <div className="
            flex
            flex-col
            justify-center
            items-end
            w-fit
            h-fit
            ">
                <img src={menuToggle ? CrossIcon2 : MenuIcon}
                className="
                p-2
                w-fit
                h-[45px]
                rounded-full
                fill-red-500
                "
                onClick={() => {setMenuToggle(prevState => (!prevState))}}
                alt="send"></img>
                {
                    menuToggle 
                    ?  (<ul className="
                        w-[80vw]
                        lg:w-[20vw]
                        bg-[#041e41]
                        rounded-xl
                        ">
                            {
                                quick_links.map((link, index) => (
                                    <li key={index} className="m-1 p-1 text-left">{link}</li>
                                ))
                            }
                        </ul>)
                    :   <></>
                }
            </div>
        </div>
    );
}

export default MenuView