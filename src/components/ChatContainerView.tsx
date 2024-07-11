import { useState, useCallback, FormEvent, useRef } from "react";
import { Input } from "@nextui-org/input"
import SendIcon from "../assets/send-icon.svg"
import CrossIcon from "../assets/cross-icon.svg"
import ChatHeaderView from "./ChatHeaderView";
import ChatView from "./ChatView";
import axios from "axios";


const BASE_URL: string = "https://humberchatbotbackend.onrender.com"

export interface TypeChatBox {
  boxOwner: string | null;
  text: string;
  links?: Array<string>;
}

const ChatContainerView = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const botGreetingMessage = {
    boxOwner: "bot",
    text: "Hi, Before we get started, just know I’m a bot in training, and your questions help me learn! Short, clear phrases work best for me."
  }

  const [chatLogsState, setChatLogsState] = useState<TypeChatBox[]>([botGreetingMessage]);

  const clearChatHandler: () => void = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setChatLogsState(_prevState => [botGreetingMessage]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const addTextToHistory = useCallback((content: TypeChatBox, position: number) => {
    if(position >= chatLogsState.length){
      setChatLogsState(prevState => [...prevState, content]);
      return;
    }
    setChatLogsState(prevState => {
      const tempState: TypeChatBox[] = [...prevState];
      tempState[tempState.length-1] = content;
      return tempState;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[chatLogsState]);

  const queryPromptAPI = useCallback(async (prompt: string)=>{
      const response = await axios.post(`${BASE_URL}/get-query-result`,{
        query: prompt
      });
      return response.data;
  },[]);

    const inputSubmitHandler = useCallback(async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = formRef.current ?? event.target as HTMLFormElement;
      const formValues = Object.fromEntries(new FormData(form));
      const prompt: string = formValues["prompt"] as string;

      if(prompt != ""){
        addTextToHistory({boxOwner: "user", text: prompt}, chatLogsState.length);
        form.reset();
        addTextToHistory({boxOwner: null, text: ""}, chatLogsState.length);
        const response_data = await queryPromptAPI(prompt);
        addTextToHistory({boxOwner: "bot", text: response_data.response_message, links: response_data.relevant_links}, chatLogsState.length-1);
      }
    },[addTextToHistory, chatLogsState.length, queryPromptAPI]);

    return (
        <div className="
        pt-1
        pb-10
        w-screen
        lg:w-[50%] 
        h-[100%] 
        flex 
        flex-col
        justify-end
        items-center
        bg-white">
          <ChatHeaderView clearChatHandler={clearChatHandler}/>
          <ChatView chatLogsState={chatLogsState}/>
          <form ref={formRef} onSubmit={(event) => {inputSubmitHandler(event)}} 
          className="w-[98%] 
          h-fit 
          flex 
          justify-center 
          items-center 
          border-2 
          border-slate-300 
          rounded-full">
            <Input
              isClearable
              radius="lg"
              name="prompt"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "h-[8vh]",
                  "text-lg",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-[1.2rem] \
                  placeholder:text-default-700/80 \
                  dark:placeholder:text-white/60",
                ],
                inputWrapper: [
                  "!cursor-text",
                  "rounded-full",
                  "overflow-hidden",
                  "bg-white"
                ],
              }}
              endContent={<img src={CrossIcon}     
              className="
              m-0
              p-2
              w-[45px]
              bg-[#ffffff00]
              " 
              alt="send"></img>}
              placeholder="Ask Hawk..."
            />
            <button 
              type="submit"
              className="
                  m-0
                  p-2
                  w-[45px]
                  bg-[#ffffff00]">
              <img src={SendIcon} alt="send"></img>
            </button>
          </form>
        </div>
      );
}

export default ChatContainerView;