import { useEffect, useMemo, useRef, useState } from "react";
import ChatBoxView from "./ChatBoxView";
import { TypeChatBox } from "./ChatContainerView";
// import RecomQueryContainer from "./RecomQueryContainer";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import DropDownArrow from "../assets/drop-down-arrow.svg";

const ChatView: React.FC<{
    modifyUserRole: (newRole: string) => void,
    promptRequestHandler: (prompt: string) => Promise<void>,
    addTextToHistory: (content: TypeChatBox, position: number) => void,
    chatLogsState: TypeChatBox[]
}> = ({modifyUserRole, chatLogsState}) => {

    const scroller = useRef<HTMLDivElement>(null);

    const [selectedKeys, setSelectedKeys] = useState(new Set(["student"]));

    const selectedValue = useMemo(
        () => {
            const values = Array.from(selectedKeys);
            modifyUserRole(values[0]);
            return values.join(", ");
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [selectedKeys]
    );

    // const recommendedQuery: Array<string> = [
    //     "I have an interview coming up. Help!",
    //     "I need help with a resume and/or cover letter, what do I do?",
    //     "What is a Career and Student Success Advisor?",
    //     "Do I really need to be on LinkedIn?"
    // ];

    useEffect(()=>{
        scroller.current!.scrollTop = scroller.current!.scrollHeight;
    },[chatLogsState]);

    return (
        <div 
        ref={scroller}
        className="
        flex
        flex-col
        justify-start
        w-full
        h-full
        overflow-scroll
        no-scrollbar">

            <div className={`
                ${chatLogsState.length > 1 ? "hidden" : "block"}
                my-2
                w-full
                h-fit
                flex
                flex-col
                items-center`}>
                <img src="https://widget-assets.geckochat.io/5dcf2cdafbfce81a9fd8f1db006787f3.png"
                className="w-[25%] rounded-full border-1 border-slate-400"/>
                <p className="mx-2 text-black">
                    <i className="text-lg font-bold"> Hello! I'm Hawk bot </i><br/>
                    <i className="text-lg font-medium"> 
                        I'll help you Navigate through 
                        <a href="https://careers.humber.ca/" className="font-bold text-blue-500 decoration-dotted"> Career Resources </a>
                        offered by Humber
                    </i>
                </p>
            </div>
            
            <div className={`${chatLogsState.length > 1 ? "hidden" : "block"}`}>
                <Dropdown>
                <DropdownTrigger>
                    <Button 
                    variant="light" 
                    className="capitalize border-1 border-[#041e41]">
                        <i className="flex font-bold">
                            Role: {selectedValue}
                            <img src={DropDownArrow} alt="dropdown" />
                        </i>
                    </Button>
                </DropdownTrigger>
                <DropdownMenu 
                    aria-label="Choose Designation"
                    variant="shadow"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                    className="text-black"
                >
                    <DropdownItem key="student">Student</DropdownItem>
                    <DropdownItem key="faculty">Staff/Faculty</DropdownItem>    
                    <DropdownItem key="employer">Employer</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </div>

            {/* <div className={`
            ${chatLogsState.length > 1 ? "hidden" : "block"}
            my-2
            flex
            w-fit
            min-h-[20%]
            lg:min-h-[30%]
            max-w-full
            overflow-x-scroll
            lg:overflow-hidden
            no-scrollbar
            animate-slide-in-from-right
            `}>
                {recommendedQuery.map((rec_query, index) => {
                    return <RecomQueryContainer 
                    key={index}
                    query={rec_query}
                    promptRequestHandler={promptRequestHandler} 
                    addTextToHistory={addTextToHistory}  
                    chatLogStateLength={chatLogsState.length}/>;
                    })}
            </div> */}

            {/* <hr className="mx-2 border-slate-500"/> */}

            {
                chatLogsState.map((chatBox: TypeChatBox, index: number) => {
                    return <ChatBoxView 
                    key={index}
                    boxOwner={chatBox["boxOwner"]}
                    text={chatBox["text"]}
                    links={chatBox["links"]}/>
                })
            }

        </div>
    );
}

export default ChatView;