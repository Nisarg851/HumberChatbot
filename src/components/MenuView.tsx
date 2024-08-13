import { useState } from "react";
import MenuIcon from "../assets/menu-icon.svg"
import CrossIcon2 from "../assets/cross-icon-2.svg"

const MenuView = ({clearChatHandler}: { clearChatHandler: () => void }) => {

    const quick_links: Record<string, string> = {
        "Career and Advising" : "https://careers.humber.ca/",
        "Career Resources" : "https://careers.humber.ca/resources-career.php",
        "CareerConnect" : "https://careers.humber.ca/employer-careerconnect.php",
        "Contact an Advisor" : "https://careers.humber.ca/advisor-team.php",
        "Devant": "http://humber.devant.ca"
    }

    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <div className={`
        absolute
        z-10
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
            overflow-hidden
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
                <ul className={`
                        ${menuToggle ? "block" : "hidden"}
                        animate-pop-in
                        w-[80vw]
                        lg:w-[20vw]
                        bg-[#041e41]
                        rounded-xl
                        border-b-2
                        border-white
                        `}>
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
                                    <a href={link as string} target="_blank" rel="noopener noreferrer">{title}</a>
                                    </li>
                                ))
                            }
                            <button className="
                            my-4
                            p-1
                            w-[90%]
                            bg-white
                            text-[#041e41]
                            font-bold
                            rounded-md
                            "><a href="mailto:careers@humber.ca">Need Help?</a></button>

                            <button className="
                            mb-5
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

                        </ul>
            </div>
        </div>
    );
}

export default MenuView