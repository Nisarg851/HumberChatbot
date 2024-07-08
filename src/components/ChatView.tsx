import { useEffect, useRef } from "react";
import ChatBoxView from "./ChatBoxView";
import RecomQueryContainer from "./RecomQueryContainer";

const ChatView = ({chatLogsState}) => {

    const scroller = useRef<HTMLDivElement>(null);

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
        overflow-auto
        no-scrollbar">
            {/* <div className="
            my-3
            flex
            w-full
            h-fit
            overflow-x-auto
            overflow-y-hidden
            no-scrollbar">
                <RecomQueryContainer/>
                <RecomQueryContainer/>
                <RecomQueryContainer/>
                <RecomQueryContainer/>
            </div> */}
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