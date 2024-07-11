import { Skeleton } from "@nextui-org/skeleton";
import { TypeChatBox } from "./ChatContainerView";

interface MessageViewCSS {
    [key: string]: string
}

const ChatBoxView = ((content: TypeChatBox) => {

    const messageViewCSS: MessageViewCSS = {
        "user":"\
        self-end\
        bg-[#fec709]\
        text-black\
        ",
        "bot":"\
        self-start\
        text-black\
        border-1\
        border-black\
        "
    }

    return (
        <Skeleton isLoaded={content.boxOwner!=null} className={`
        m-2
        max-w-[90%]
        self-${content.boxOwner=="user" ? "end" : "start"} 
        rounded-lg`}>
            <div className={`
            p-3
            w-full
            h-fit 
            text-left
            rounded-2xl
            ${messageViewCSS[content.boxOwner!]}`}>
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
        </Skeleton>
    );
});

export default ChatBoxView;