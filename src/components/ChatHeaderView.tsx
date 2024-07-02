const ChatHeaderView = () => {
    return (
        <div className="
        w-full
        h-10%
        bg-[#212121]
        flex
        flex-col
        items-center
        ">
            <div className="relative">
                <div className="absolute 
                bottom-0
                right-0
                size-3 
                bg-green-500 
                rounded-full"></div>
                <img src="https://widget-assets.geckochat.io/5dcf2cdafbfce81a9fd8f1db006787f3.png"
                className="
                size-12
                rounded-full"/>
            </div>
            <span>Hawk Bot</span>
        </div>
    );
}

export default ChatHeaderView;