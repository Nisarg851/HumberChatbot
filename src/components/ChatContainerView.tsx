import { Input } from "@nextui-org/input"
import SendIcon from "../assets/send-icon.svg"
import ChatHeaderView from "./ChatHeaderView";
import ChatView from "./ChatView";

const ChatContainerView = () => {
    return (
        <div className="
        w-screen
        lg:w-[50%] 
        h-[100%] 
        rounded-2xl 
        flex 
        flex-col
        justify-end
        items-center">
          <ChatHeaderView/>
          <ChatView/>
          <Input
            isClearable
            radius="lg"
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
                "h-[8vh]",
                "border-2\
                border-slate-300",
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
          <span className="
          my-1
          text-white
          ">
            Powered by Humber
          </span>
        </div>
      );
}

export default ChatContainerView;