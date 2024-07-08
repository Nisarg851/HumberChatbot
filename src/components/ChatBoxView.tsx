const ChatBoxView = ({boxOwner, text}) => {

    const messageViewCSS = {
        user:"\
        self-end\
        bg-[#fec709]\
        text-black\
        ",
        bot:"\
        self-start\
        text-black\
        border-1\
        border-black\
        "
    };

    return (
        <div className={`
        m-1
        p-3
        w-fit
        max-w-[90%]
        h-fit 
        text-left
        rounded-2xl
        ${messageViewCSS[boxOwner]}`}>
            {text}
        </div>
    );
}

export default ChatBoxView;