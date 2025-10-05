import { useState, useEffect } from "react";
import CustomMarkdown from "./CustomMarkdown";

const TypeWriter = ({ content = "", speed = 10, setTypeWriterMounted }: {content: string, speed: number, setTypeWriterMounted: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

    useEffect(()=>{
        if(index === content?.length){
            setTypeWriterMounted(true);
            return;
        }
        setText(prevContent => (prevContent + content[index]));
        setTimeout(setIndex, speed, index+1);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[index]);
    
    return <div className="whitespace-pre-wrap"><CustomMarkdown className="">{text}</CustomMarkdown></div>;
};

export default TypeWriter;