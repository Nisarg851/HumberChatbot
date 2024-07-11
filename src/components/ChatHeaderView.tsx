import MenuView from "./MenuView";

const ChatHeaderView: React.FC<{ clearChatHandler: () => void }> = ({clearChatHandler}) => {
    return (
        <div className="
        py-2
        relative
        w-full
        h-10%
        bg-[#041e41]
        flex
        justify-start
        items-center
        ">
            <div className="relative">
                <div className="
                absolute 
                bottom-0
                right-3
                size-3 
                border-2
                border-[#041e41]
                bg-green-500 
                rounded-full"></div>
                <img src="https://widget-assets.geckochat.io/5dcf2cdafbfce81a9fd8f1db006787f3.png"
                className="
                mx-3
                size-12
                rounded-full"/>
            </div>
            <span className="font-serif font-bold">HAWK BOT</span>
            <MenuView clearChatHandler={clearChatHandler}/>
        </div>
    );
}

export default ChatHeaderView;