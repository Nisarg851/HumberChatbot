import ChatBoxView from "./ChatBoxView";

const ChatView = () => {

    return (
        <div className="
        flex
        flex-col
        w-full
        h-full
        overflow-auto
        no-scrollbar">

            <ChatBoxView boxOwner="bot" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ullam quo sint incidunt soluta molestias consequuntur ea et cumque error ratione excepturi pariatur, minima illo?"}/>
            <ChatBoxView boxOwner="user" text={"        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium eos cupiditate aliquam culpa distinctio? Qui nobis reprehenderit dolorem architecto aliquam! Rerum illo quaerat aliquid ex? Nesciunt beatae in harum, aliquam consequuntur obcaecati sunt officia cum provident facere illum dolores itaque dicta repellendus, nulla molestiae. Odit, sed harum eius quaerat sunt non deleniti a, nisi quasi minus aperiam reiciendis assumenda tempore impedit quibusdam delectus minima, doloribus ex. Quae harum illo labore error, voluptates id, eos dolorum, quas minima sit at cum! Quasi ad inventore tenetur modi eius blanditiis odit libero. Pariatur ab amet non quod nihil atque deleniti ducimus illum."}/>
            <ChatBoxView boxOwner="bot" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ullam quo sint incidunt soluta molestias consequuntur ea et cumque error ratione excepturi pariatur, minima illo?"}/>
            <ChatBoxView boxOwner="user"text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ullam quo sint incidunt soluta molestias consequuntur ea et cumque error ratione excepturi pariatur, minima illo?"}/>
            <ChatBoxView boxOwner="user"text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ullam quo sint incidunt soluta molestias consequuntur ea et cumque error ratione excepturi pariatur, minima illo?"}/>
            <ChatBoxView boxOwner="bot" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ullam quo sint incidunt soluta molestias consequuntur ea et cumque error ratione excepturi pariatur, minima illo?"}/>
            <ChatBoxView boxOwner="user"text={"        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium eos cupiditate aliquam culpa distinctio? Qui nobis reprehenderit dolorem architecto aliquam! Rerum illo quaerat aliquid ex? Nesciunt beatae in harum, aliquam consequuntur obcaecati sunt officia cum provident facere illum dolores itaque dicta repellendus, nulla molestiae. Odit, sed harum eius quaerat sunt non deleniti a, nisi quasi minus aperiam reiciendis assumenda tempore impedit quibusdam delectus minima, doloribus ex. Quae harum illo labore error, voluptates id, eos dolorum, quas minima sit at cum! Quasi ad inventore tenetur modi eius blanditiis odit libero. Pariatur ab amet non quod nihil atque deleniti ducimus illum."}/>
            <ChatBoxView boxOwner="bot"text={"        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium eos cupiditate aliquam culpa distinctio? Qui nobis reprehenderit dolorem architecto aliquam! Rerum illo quaerat aliquid ex? Nesciunt beatae in harum, aliquam consequuntur obcaecati sunt officia cum provident facere illum dolores itaque dicta repellendus, nulla molestiae. Odit, sed harum eius quaerat sunt non deleniti a, nisi quasi minus aperiam reiciendis assumenda tempore impedit quibusdam delectus minima, doloribus ex. Quae harum illo labore error, voluptates id, eos dolorum, quas minima sit at cum! Quasi ad inventore tenetur modi eius blanditiis odit libero. Pariatur ab amet non quod nihil atque deleniti ducimus illum."}/>

        </div>
    );
}

export default ChatView;