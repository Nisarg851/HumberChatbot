import { useState } from "react";

const ChatBoxView = (props) => {

    const [messageViewCSS, setMessageViewCSS] = useState({
        user:"\
        self-end\
        bg-[#041e41]\
        text-white\
        ",
        bot:"\
        self-start\
        text-black\
        "
    });

    return (
        <div className={`
        m-1
        p-3
        w-[95%]
        h-fit 
        text-left
        rounded-2xl
        ${messageViewCSS[props.boxOwner]}`}>
            {props.text}
        </div>
    );
}

export default ChatBoxView;