import { BsCodeSquare, BsStar } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { TbGitFork } from "react-icons/tb";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const GistItem = () => {

    const codeString = `const Square = (n) => return n * n

const handleClick = (e) => {
        console.log(e)
}
const handleClick = (e) => {
        console.log(e)
}
`

    return (
        <div className="my-2">
            <div className="flex justify-between items-start flex-col lg:flex-row">
                <div className="flex justify-start items-start gap-2">
                    <img src="https://avatars.githubusercontent.com/u/73209159?v=4" className="h-8 rounded-full lg:block hidden" />
                    <div className="text-xs">
                        <h1 className="text-sm text-text-secondary"><span className="text-text-blue hover:underline cursor-pointer">mukulrajpoot262610</span> / <span className="text-text-blue hover:underline font-semibold cursor-pointer">test.html</span></h1>
                        <p>Created 2 weeks ago</p>
                        <p>test</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4 mt-2 lg:mt-0">
                    <div className='flex items-center gap-1 cursor-pointer hover:text-text-blue text-xs text-text-grey'>
                        <BsCodeSquare className='font-bold text-sm' />
                        <h3>1 file</h3>
                    </div>
                    <div className='flex items-center gap-1 cursor-pointer hover:text-text-blue text-xs text-text-grey'>
                        <TbGitFork className='font-bold text-sm' />
                        <h3>0 fork</h3>
                    </div>
                    <div className='flex items-center gap-1 cursor-pointer hover:text-text-blue text-xs text-text-grey'>
                        <FaRegCommentAlt className='font-bold text-sm' />
                        <h3>0 comments</h3>
                    </div>
                    <div className='flex items-center gap-1 cursor-pointer hover:text-text-blue text-xs text-text-grey'>
                        <BsStar className='font-bold text-sm' />
                        <h3>0 star</h3>
                    </div>
                </div>

            </div>

            <div className="border-border-primary rounded-lg p-1 border mt-3 mb-10 pl-7 text-xs max-h-48 overflow-hidden hover:border-text-blue cursor-pointer">
                <SyntaxHighlighter language="javascript" style={monokai} showLineNumbers wrapLines showInlineLineNumbers customStyle={{ background: '#22272E' }}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default GistItem