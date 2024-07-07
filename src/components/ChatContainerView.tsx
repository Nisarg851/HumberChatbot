import { useState, useCallback, FormEvent } from "react";
import { Input } from "@nextui-org/input"
import SendIcon from "../assets/send-icon.svg"
import ChatHeaderView from "./ChatHeaderView";
import ChatView from "./ChatView";

interface TypeChatBox {
  boxOwner: string;
  text: string;
}

const ChatContainerView = () => {

  const [chatLogsState, setChatLogsState] = useState<TypeChatBox[]>([{
    boxOwner: "bot",
    text: "Hi, Before we get started, just know I’m a bot in training, and your questions help me learn! Short, clear phrases work best for me."
  }]);

  const addTextToHistory = useCallback((boxOwner: string, text: string) => {
    setChatLogsState(prevState => [...prevState, {boxOwner, text}]);
  },[]);

  const queryPromptAPI = useCallback((endpoint: string)=>{
      const tempResponse: string = endpoint + "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum totam eos animi debitis, sunt eligendi quam soluta, vel molestias veritatis atque? Maiores sed dignissimos asperiores saepe facere inventore architecto, praesentium dolore tenetur incidunt rerum ratione impedit commodi consequuntur! Alias quo quibusdam error aliquam praesentium rerum dolorum. Repellendus autem obcaecati deserunt id quaerat alias ea blanditiis, aliquam sequi vero. Numquam rerum placeat pariatur aperiam magni perspiciatis hic voluptates! Dignissimos ipsa eos sapiente, non recusandae officia sint ratione velit! Officia doloribus itaque dignissimos eaque nesciunt ex maxime magni quasi voluptatem adipisci nam, et hic illo eos soluta dolor. Voluptatum mollitia iure alias.";

      const start = Math.floor(Math.random() * tempResponse.length);
      const length = Math.floor(Math.random() * tempResponse.length - start);

      return tempResponse.substring(start, start+length);
  },[]);

    const inputSubmitHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formValues = Object.fromEntries(new FormData(form));
      const prompt: string = formValues["prompt"] as string;

      addTextToHistory("user", prompt);
      const response = queryPromptAPI("replace api end point here..."); // Temporary hardcoded response
      addTextToHistory("bot", response);
      form.reset();
    },[addTextToHistory, queryPromptAPI]);

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
          <ChatHeaderView/>
          <ChatView chatLogsState={chatLogsState}/>
          <form onSubmit={(value) => {inputSubmitHandler(value)}} 
          className="w-full h-[8vh] border-2 border-slate-300 rounded-full">
            <Input
              isClearable
              radius="lg"
              name="prompt"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "text-lg",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-[1.2rem] \
                  placeholder:text-default-700/80 \
                  dark:placeholder:text-white/60",
                ],
                inputWrapper: [
                  "bg-white",
                  "!cursor-text",
                  "rounded-full"
                ],
              }}
              endContent={<img src={SendIcon} className="
              m-0
              p-2
              w-[45px]
              bg-[#ffffff00]
              " alt="send"></img>}
              placeholder="Ask Hawk..."
            />
          </form>
        </div>
      );
}

export default ChatContainerView;