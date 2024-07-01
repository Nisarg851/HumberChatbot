import { Input } from "@nextui-org/input"
import SendIcon from "../assets/send-icon.svg"

const ChatView = () => {
    const variants = ["flat", "bordered", "underlined", "faded"];

    return (
        <div className="absolute 
        lg:relative 
        z-0 
        top-0 
        left-0 
        z-1 
        w-screen
        lg:w-[50%] 
        h-[100%] 
        rounded-2xl 
        flex 
        justify-center 
        items-end border-2">
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
                "mb-8",
                "border-2\
                border-[#a7b4b4]",
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
        </div>
      );
}

export default ChatView;