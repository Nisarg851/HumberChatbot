import { TypeChatBox } from "./ChatContainerView";

const ChatBoxView = ((content: TypeChatBox) => {

    const messageViewCSS: { user: string; bot: string; } = {
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
        ${messageViewCSS[content.boxOwner]}`}>
            <div ></div>
            {content.text}
            <ul className="w-full h-fit">
                {content.links?.map((item, index) => {
                    return(
                        <li key={index} className="
                            mx-0
                            my-1
                            p-2
                            rounded-xl
                            bg-[#041e41]
                            text-white
                            underline
                        "><a href={item} target="_blank" rel="noopener noreferrer">[{index+1}] {item}</a></li>
                    );
                })}
            </ul>
        </div>
    );
});

export default ChatBoxView;