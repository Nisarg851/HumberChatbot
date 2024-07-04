import { useState, useEffect, useCallback } from "react";
import ChatBoxView from "./ChatBoxView";

const ChatView = ({chatLogsState}) => {


    // const addTextToHistory = useCallback((boxOwner: string, text: string) => {
    //     setChatLogsState([...chatLogsState, {boxOwner, text}]);
    // },[chatLogsState]);

    // const queryPromptAPI = useCallback((endpoint: string)=>{
    //     const tempResponse: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum totam eos animi debitis, sunt eligendi quam soluta, vel molestias veritatis atque? Maiores sed dignissimos asperiores saepe facere inventore architecto, praesentium dolore tenetur incidunt rerum ratione impedit commodi consequuntur! Alias quo quibusdam error aliquam praesentium rerum dolorum. Repellendus autem obcaecati deserunt id quaerat alias ea blanditiis, aliquam sequi vero. Numquam rerum placeat pariatur aperiam magni perspiciatis hic voluptates! Dignissimos ipsa eos sapiente, non recusandae officia sint ratione velit! Officia doloribus itaque dignissimos eaque nesciunt ex maxime magni quasi voluptatem adipisci nam, et hic illo eos soluta dolor. Voluptatum mollitia iure alias."

    //     return tempResponse;
    // },[]);

    // useEffect(() => {
    //     if(userPrompt){
    //         addTextToHistory("user",userPrompt);
    //         // API CALL
    //         // const response = queryPromptAPI("replace api end point here..."); // Temporary hardcoded response
    //         // addTextToHistory("bot", response);
    //     }
    // },[userPrompt]);

    return (
        <div className="
        flex
        flex-col
        w-full
        h-full
        overflow-auto
        no-scrollbar">
            {
                chatLogsState.map((chatBox, index) => {
                    return <ChatBoxView 
                    key={index}
                    boxOwner={chatBox["boxOwner"]}
                    text={chatBox["text"]}/>
                })
            }
            {/* <ChatBoxView boxOwner="bot" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ullam quo sint incidunt soluta molestias consequuntur ea et cumque error ratione excepturi pariatur, minima illo?"}/>

            <ChatBoxView boxOwner="user" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ullam quo sint incidunt soluta molestias consequuntur ea et cumque error ratione excepturi pariatur, minima illo?"}/> */}

        </div>
    );
}

export default ChatView;