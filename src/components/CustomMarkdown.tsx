/* eslint-disable no-unused-vars */
import Markdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';

const CustomMarkdown = ({ children, className = "" }: { children: string, className: string }) => {
    return (
          <div className={`markdown ${className} text-wrap`}>
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}>
              {children}
            </Markdown>
          </div>
      );
}

export default CustomMarkdown;