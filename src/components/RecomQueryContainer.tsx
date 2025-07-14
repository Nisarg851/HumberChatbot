import { useCallback, useRef } from "react";
import { TypeChatBox } from "./ChatContainerView";

const RecomQueryContainer: React.FC<{
        query: string,
        promptRequestHandler: (prompt: string) => Promise<void>,
        addTextToHistory: (content: TypeChatBox, position: number) => void,
        chatLogStateLength: number
    }> = ({query, promptRequestHandler, addTextToHistory, chatLogStateLength}) => {

    const queryRef = useRef(null);

    const onClickHandler = useCallback(async ()=>{
        const prompt: string = (queryRef.current! as HTMLParagraphElement).textContent as string;
        const newUserChatLog: TypeChatBox = {boxOwner: "user", text: prompt};
        addTextToHistory(newUserChatLog, chatLogStateLength);
        await promptRequestHandler(prompt);
    },[addTextToHistory, chatLogStateLength, promptRequestHandler]);

    return (
        <div className="
            w-[20%]
            h-[20vh]
            border-slate-200
            bg-white
            rounded-lg
            truncate
            shadow-md
            hover:shadow-lg
            hover:border-1
            text-wrap
            animate-slide-in-from-left"
        onClick={onClickHandler}
        >
            <p ref={queryRef} className="p-2 font-serif text-black text-left italic">{query}</p>
        </div>
    );
}

export default RecomQueryContainer;