import { useState, useCallback, FormEvent, useRef } from "react";
import { Textarea } from "@nextui-org/input"
import SendIcon from "../assets/send-icon.svg"
// import CrossIcon from "../assets/cross-icon.svg"
import ChatHeaderView from "./ChatHeaderView";
import ChatView from "./ChatView";
import axios from "axios";


const BASE_URL: string = "https://humberchatbotbackend.onrender.com"

export interface TypeChatBox {
  boxOwner: string;
  text: string;
  links?: Array<string>;
}

const ChatContainerView = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const botGreetingMessage = {
    boxOwner: "bot",
    text: "Hi there!, I'm Hawk. I'll assist you navigating Humber's career resources. Before we get started, please provide short and clear phrases as they work best for me! If you encounter any issues or need more help, checkout Menu"
  }

  const [userRole, setUserRole] = useState("student");

  // handler for passing to child nodes
  const modifyUserRole: (newRole: string) => void = useCallback((newRole: string) => {
    setUserRole(newRole);
  }, [setUserRole]);

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
    try {
    const response = await axios.post(`${BASE_URL}/get-query-result`,{
        user_role: userRole,
        query: prompt,
      });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      return {
        "answer": "😔Request timed out. Please try again.",
        "resources": []
      } 
    } else {
      return {
        "answer": "😣❗An error occurred while fetching the response. Please try again",
        "resources": []
      }
    }
  }
  },[userRole]);

  const promptRequestHandler = useCallback(async (prompt: string) => {
    addTextToHistory({boxOwner: "bot", text: ""}, chatLogsState.length);
    const response_data = await queryPromptAPI(prompt);
    addTextToHistory({boxOwner: "bot", text: response_data.response_message, links: response_data.relevant_links}, chatLogsState.length-1);
  }, [addTextToHistory, chatLogsState.length, queryPromptAPI]);

    const inputSubmitHandler = useCallback(async (event: (FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>)) => {
      event.preventDefault();
      const form = formRef.current ?? event.target as HTMLFormElement;
      const formValues = Object.fromEntries(new FormData(form));
      const prompt: string = formValues["prompt"] as string;

      if(prompt != ""){
        addTextToHistory({boxOwner: "user", text: prompt}, chatLogsState.length);
        form.reset();
        await promptRequestHandler(prompt);
      }
    },[addTextToHistory, chatLogsState.length, promptRequestHandler]);

    return (
        <div className="
        pb-10
        w-screen
        flex 
        flex-col
        justify-end
        items-center
        bg-white">
          <ChatHeaderView clearChatHandler={clearChatHandler} chatLogsLengthState={chatLogsState.length}/>
          <ChatView 
            modifyUserRole={modifyUserRole}
            addTextToHistory={addTextToHistory} 
            promptRequestHandler={promptRequestHandler} 
            chatLogsState={chatLogsState}/>

          <form ref={formRef} onSubmit={(event) => {inputSubmitHandler(event)}} 
          className="
          w-full
          md:w-[60%] 
          h-fit 
          flex 
          justify-center 
          items-start
          border-2
          border-slate-200 
          rounded-xl">
            <Textarea
              isClearable
              name="prompt"
              className="w-full text-black"
              classNames={{
                inputWrapper: "border-none shadow-none", 
                input: "focus:outline-none focus:ring-0 focus:border-transparent",
              }}
              defaultValue=""
              placeholder="Ask Hawk..."
              variant="bordered"
              onKeyDown={(event)=>{ if(event.key === 'Enter' && !event.shiftKey){event.preventDefault(); inputSubmitHandler(event);}}}
              // eslint-disable-next-line no-console
              onClear={() => console.log("textarea cleared")}
            />
            <button 
              type="submit"
              className="
                  m-0
                  p-2
                  w-12
                  bg-[#ffffff00]">
              <img src={SendIcon} alt="send"></img>
            </button>
          </form>
        </div>
      );
}

export default ChatContainerView;