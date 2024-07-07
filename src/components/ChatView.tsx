import { useEffect, useRef } from "react";
import ChatBoxView from "./ChatBoxView";

const ChatView = ({chatLogsState}) => {

    const scroller = useRef();

    useEffect(()=>{
        scroller.current.scrollTop = scroller.current.scrollHeight;
    },[chatLogsState]);

    return (
        <div 
        ref={scroller}
        className="
        flex
        flex-col
        w-full
        h-full
        overflow-auto
        no-scrollbar">
            
            {
                chatLogsState.reverse().map((chatBox, index) => {
                    return <ChatBoxView 
                    key={index}
                    boxOwner={chatBox["boxOwner"]}
                    text={chatBox["text"]}/>
                })
            }

        </div>
    );
}

export default ChatView;