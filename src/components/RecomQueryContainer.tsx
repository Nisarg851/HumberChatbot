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
        mx-2
        w-[50%]
        xl:w-[23%]
        h-full
        border-1 
        border-slate-400
        rounded-xl
        shrink-0
        bg-white"
        onClick={onClickHandler}
        >
            <p ref={queryRef} className="p-2 font-serif text-black text-left italic">{query}</p>
        </div>
    );
}

export default RecomQueryContainer;