
import { TypeChatBox } from "./ChatContainerView";
import { mirage } from "ldrs";
import { Button } from "@nextui-org/button";
import TypeWriter from "./TypeWriter";
import { useCallback, useState } from "react";
import LinkIcon from "../assets/link-icon.svg";
import CopyIcon from "../assets/copy-icon.svg";

interface MessageViewCSS {
    [key: string]: string
}

const copyHandler = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!")
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
};

const ChatBoxView = ((content: TypeChatBox) => {

    mirage.register();
    
    const contentLinksLength = content.links?.length ?? 0;
    const offset = 5;
    const totalLinkPages = Math.ceil(contentLinksLength/offset);
    const [linksPage, setLinksPage] = useState<number>(1);
    const [typerwriterMounted, setTypeWriterMounted] = useState<boolean>(false);

    const messageViewCSS: MessageViewCSS = {
        "user":"\
        self-end\
        bg-[#fec709]\
        ",
        "bot":"\
        self-start\
        border-1\
        border-black\
        "
    }

    const movePageHandler = useCallback((move: string)=>{
        setLinksPage(prevLinksPage => {
            let newLinksPage = move=="prev" ? (prevLinksPage==1 ? 1 : prevLinksPage-1) : prevLinksPage;
            newLinksPage = move=="next" ? (prevLinksPage==totalLinkPages ? totalLinkPages : prevLinksPage+1) : newLinksPage;
            return newLinksPage;
        });
    },[totalLinkPages]);

    return (
        <div 
            className={`
                m-2
                p-3
                w-fit
                max-w-[80%]
                h-fit 
                text-black
                text-left
                rounded-2xl
                ${messageViewCSS[content.boxOwner!]}
                self-${content.boxOwner=="user" ? "end" : "start"}`
                }>
                {content.text == ""
                    ? (<div className="m-2 p-3">
                            <l-mirage
                                size="60"
                                speed="2.5" 
                                color="#041e41"></l-mirage>
                        </div>)
                    : (<div>
                                <div>
                                    <TypeWriter content={content.text} speed={10} setTypeWriterMounted={setTypeWriterMounted}/>
                                </div>
                                <ul className={`${typerwriterMounted ? "block" : "hidden"} w-full h-fit overflow-hidden`}>
                                    {content.links?.slice((linksPage-1)*offset, (linksPage-1)*offset+offset).map((item, index) => {
                                        const newLinkIndex = ((linksPage-1)*offset)+index;
                                        return(
                                            <li key={newLinkIndex} className="
                                                mx-0
                                                my-1
                                                p-2
                                                rounded-xl
                                                bg-[#041e41]
                                                text-white
                                                underline
                                                truncate
                                                animate-slide-in-from-left
                                            ">
                                            <img src={CopyIcon} alt="(link)" 
                                                onClick={() => {copyHandler(item);}}
                                                className="inline mx-1"/>
                                            <a href={item} target="_blank" rel="noopener noreferrer">
                                                <img src={LinkIcon} alt="(link)" className="inline mx-1"/>
                                                [{newLinkIndex+1}] 
                                                <span className="w-fit">{item}</span>
                                            </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {
                                    totalLinkPages>1 && typerwriterMounted
                                    ? (
                                    <div>
                                        <div className={`
                                            mt-5
                                            flex
                                            justify-between
                                            items-center
                                            `}>
                                                <Button color="primary"
                                                    variant="bordered"
                                                    className={`${linksPage==1 ? "invisible" : "inline"}`}
                                                    onClick={()=>movePageHandler("prev")}>
                                                    Page {linksPage - 1}
                                                </Button>
                                                <div className="flex">
                                                {Array.from({ length: totalLinkPages}).map((_, index) => {
                                                        return (<div
                                                            key={index}
                                                            className={`
                                                            mx-1
                                                            size-1.5
                                                            border-1
                                                            ${linksPage-1 == index ? "bg-[#041e41]" : "bg-slate-400"}
                                                            rounded-full`}></div>);
                                                    })}
                                                </div>
                                                <Button color="primary"
                                                variant="bordered"
                                                className={`${linksPage==totalLinkPages ? "invisible" : "inline"}`}
                                                onClick={()=>movePageHandler("next")}>
                                                    Page {linksPage + 1}
                                                </Button>
                                            </div>
                                            <p className="mt-4">
                                                If you still need further information make sure to check out the FAQs  
                                                &nbsp;
                                                <a href="https://careers.humber.ca/questions-answers.php" className="text-blue-800 underline">
                                                    Humber: Defining Polytechnic Education | Humber College Institute of Technology & Advanced Learning - Toronto, Ontario, Canada
                                                </a> 
                                                &nbsp;
                                                or contact our Front Desk at
                                                &nbsp;
                                                <a href="mailto:careers@humber.ca" 
                                                className="text-blue-800 underline">careers@humber.ca</a> 
                                                &nbsp;
                                                or 416-675-6622 ext.5030
                                            </p>
                                    </div>
                                            
                                    )
                                    :   <></>
                                }
                        </div>
                    )
                }
        </div>
    );
});

export default ChatBoxView;