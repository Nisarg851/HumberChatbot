
import { TypeChatBox } from "./ChatContainerView";
import { mirage } from "ldrs";
import { Button } from "@nextui-org/button";
import TypeWriter from "./TypeWriter";
import { useCallback, useEffect, useState } from "react";
import HawkTypingVideo from "/hawk_typing.mp4";
import UserProfile from "../assets/user-icon.svg";
import axios from "axios";

interface MAP {
  [key: string]: {title: string, description: string};
}

// interface ResourceModel{
//     title: string,
//     url: string,
//     summary: string,
//     tags: string[]
// }

const LinkPageView = ({item, metaDataList, setMetaDataList}: {item: string, metaDataList: MAP, setMetaDataList: React.Dispatch<React.SetStateAction<MAP>>}) => {
    const [pageMetaData, setPageMetaData] = useState<{title: string, description: string}|null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(()=>{
        const fetchURLMetaData = async (pageUrl: string) => {
            if(metaDataList[item]!=undefined){
                setPageMetaData(metaDataList[item]);
                setLoaded(true);
                return;
            }
            const res = await axios.post(`https://humberchatbotbackend.onrender.com/metadata`,{
                url: pageUrl
            });
            setPageMetaData(res.data);
            setMetaDataList(prevData => {
                const newData = {...prevData};
                newData[item] = res.data;
                return newData
            })
            setLoaded(true);
        }
        // if(metaDataList[item]==undefined)
        fetchURLMetaData(item);
        // setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item]);

    return (
        <div>
            {
                !loaded
                ? <div className="w-8 h-8 border-b-2 border-black rounded-full animate-spin"></div>
                : (
                    <li className="
                        md:max-w-md
                        h-[30vh]
                        p-4
                        border-slate-200
                        bg-white
                        rounded-lg
                        truncate
                        shadow-md
                        text-slate-600
                        hover:shadow-xl
                        hover:border-1
                        animate-slide-in-from-left">
                            <a href={item} target="_blank" className="w-full h-full flex flex-col justify-between">
                                <div className="text-wrap">
                                    <h1 className="text-md font-bold text-[#041e41]">{pageMetaData!.title}</h1>
                                    <h2 className="text-sm text-blue-400">{item}</h2>
                                    <p className="my-4 text-sm overflow-hidden line-clamp-3 text-wrap text-start">{pageMetaData!.description}</p>
                                </div>
                                <span className="w-fit text-sm hover:font-bold hover:underline hover:mr-2">Visit Page →</span>
                            </a>
                                
                    </li>
                )
            }
        </div>
    );
}

const ChatBoxView = ((content: TypeChatBox) => {

    mirage.register();
    
    const contentLinksLength = content.links?.length ?? 0;
    const offset = 6;
    const totalLinkPages = Math.ceil(contentLinksLength/offset);
    const [linksPage, setLinksPage] = useState<number>(1);
    const [typerwriterMounted, setTypeWriterMounted] = useState<boolean>(false);
    const [metaDataList, setMetaDataList] = useState<MAP>({});

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
                h-fit 
                text-black
                text-left
                rounded-lg
                ${content.boxOwner=="user" ? "self-end text-end md:w-fit bg-[#fec709]" : "self-start"}`
                }>
                {content.text == ""
                    ? (<div className="flex justify-start items-center m-2 p-3">
                            <video src={HawkTypingVideo} autoPlay muted loop className="hidden md:block w-12 h-12 rounded-full shadow-md" />
                            <l-mirage
                                size="60"
                                speed="2.5" 
                                color="#041e41"></l-mirage>
                        </div>)
                    : (<div className={`flex ${content.boxOwner=="user" && "flex-row-reverse"}`}>
                        {content.boxOwner=="bot"
                            ? <video src={HawkTypingVideo} autoPlay muted className="hidden md:block w-12 h-12 rounded-full shadow-md" />
                            : <img src={UserProfile} className="p-1 w-8 h-8 rounded-full bg-white shadow-md"/>
                        }
                        <div>
                                    <div className="px-4 text-justify ">
                                        {
                                        content.boxOwner=="bot"
                                            ? <TypeWriter content={content.text} speed={10} setTypeWriterMounted={setTypeWriterMounted}/>
                                            : <p className="whitespace-pre-wrap">{content.text}</p>
                                        }
                                    </div>
                                    <ul className={`${(typerwriterMounted && content.boxOwner!="user") ? "block" : "hidden"} md:p-2 grid md:grid-cols-2 gap-4 w-full h-fit overflow-hidden`}>
                                        {content.links?.slice((linksPage-1)*offset, (linksPage-1)*offset+offset).map((item, index) => {
                                            const newLinkIndex = ((linksPage-1)*offset)+index;
                                            return(
                                                <LinkPageView key={newLinkIndex} item={item} metaDataList={metaDataList} setMetaDataList={setMetaDataList}/>
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
                    </div>
                    )
                }
        </div>
    );
});

export default ChatBoxView;