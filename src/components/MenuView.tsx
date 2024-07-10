import { useState } from "react";
import MenuIcon from "../assets/menu-icon.svg"
import CrossIcon2 from "../assets/cross-icon-2.svg"

const MenuView = ({clearChatHandler}: { clearChatHandler: () => void }) => {

    const quick_links: unknown = {
        "Home" : "https://www.humber.ca/",
        "Career and Advising" : "https://careers.humber.ca/",
        "Career Resources" : "https://careers.humber.ca/resources-career.php",
        "CareerConnect" : "https://careers.humber.ca/employer-careerconnect.php",
        "Contact Advisor" : "https://careers.humber.ca/advisor-team.php"
    }

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
        `}>
            <div className="
            flex
            flex-col
            justify-center
            items-end
            w-fit
            h-fit
            ">
                <img src={menuToggle ? CrossIcon2 : MenuIcon}
                className={`
                p-2
                w-fit
                h-[45px]
                rounded-full
                fill-red-500
                ${menuToggle ? "hidden" : "inline"}
                `}
                onClick={() => {setMenuToggle(prevState => (!prevState))}}
                alt="send"></img>
                {
                    menuToggle 
                    ?  (<ul className="
                        w-[80vw]
                        lg:w-[20vw]
                        bg-[#041e41]
                        rounded-xl
                        border-b-2
                        border-white
                        ">
                            <li key="Quick Links" className={`m-1 
                            p-1 
                            flex 
                            justify-between 
                            items-center 
                            text-left 
                            font-bold 
                            border-b-2 
                            text-lg`}>
                                <i>Quick Links</i>
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
                            </li>
                            {
                                Object.entries(quick_links).map(([title, link]) => (
                                    <li key={title} className="m-1 p-1 text-left">
                                    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                                    </li>
                                ))
                                // quick_links.map((link, index) => (
                                //     <li key={index} className="m-1 p-1 text-left">{link}</li>
                                // ))
                            }
                            <button className="
                            my-2
                            p-1
                            w-[90%]
                            bg-white
                            text-[#041e41]
                            font-bold
                            rounded-md
                            "><a href="mailto:enquiry@humber.ca">Enquiry@humber.ca</a></button>

                            <button className="
                            my-2
                            p-1
                            w-[90%]
                            bg-white
                            text-[#041e41]
                            font-bold
                            rounded-md
                            "
                            onClick={()=>{
                                clearChatHandler(); 
                                setMenuToggle(prevState => (!prevState));
                            }}
                            >Clear Chat</button>

                        </ul>)
                    :   <></>
                }
            </div>
        </div>
    );
}

export default MenuView