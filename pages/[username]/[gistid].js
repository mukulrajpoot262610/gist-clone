import { useState } from "react"
import { BiCaretDown, BiCopy } from "react-icons/bi"
import { BsCheckLg, BsCodeSquare } from "react-icons/bs"
import { MdOutlineCode } from "react-icons/md"
import { SiMarkdown } from "react-icons/si"
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/default-highlight"
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs"

const Gist = () => {

    const [menuActive, setMenuActive] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState("Embed")

    const codeString = `const Square = (n) => return n * n

const handleClick = (e) => {
        console.log(e)
}
const handleClick = (e) => {
        console.log(e)
}
`

    return (
        <div className="min-h-screen">
            <div className="flex justify-start items-start gap-2 p-6">
                <img src="https://avatars.githubusercontent.com/u/73209159?v=4" className="h-8 rounded-full" />
                <div className="text-xs">
                    <h1 className="text-xl text-text-secondary"><span className="text-text-blue hover:underline cursor-pointer">mukulrajpoot262610</span> / <span className="text-text-blue hover:underline font-semibold cursor-pointer">test.html</span></h1>
                    <p>Created 2 weeks ago</p>
                </div>
            </div>

            <div className="flex justify-between items-center px-6">
                <div className="tabs">
                    <a className={`tab-bordered border-border-orange`}>
                        <div className='flex items-center gap-2 my-1 rounded-lg hover:bg-dark p-2 cursor-pointer'>
                            <MdOutlineCode className='font-bold text-lg' />
                            <h3 className="text-text-secondary text-sm">Code</h3>
                        </div>
                    </a>
                </div>

                <div className="flex justify-center items-center gap-2">

                    <div className="flex justify-center items-center rounded-lg relative">
                        <div className="rounded-l-lg bg-button-secondary p-1.5 text-xs border-border-primary border text-text-secondary px-4 font-medium flex justify-center items-center gap-1 cursor-pointer" onClick={() => setMenuActive(!menuActive)}>
                            {selectedMenu} <BiCaretDown className="text-sm" />
                        </div>

                        {
                            menuActive && <ul className="menu menu-compact lg:menu-normal w-64 absolute top-8 border-border-primary border rounded-lg left-0 bg-dark">
                                <li className="text-xs p-2 text-text-secondary">What would you like to do?</li>
                                <hr className="border-border-primary" />
                                <div className="p-2 hover:bg-text-blue flex cursor-pointer" onClick={() => setSelectedMenu('Embed')}>
                                    <div className="mr-2 w-4">
                                        {
                                            selectedMenu === "Embed" && <BsCheckLg className="text-text-secondary text-lg" />
                                        }
                                    </div>
                                    <div>
                                        <p className="font-semibold text-text-secondary text-sm">Embed</p>
                                        <p className="text-xs">Embed this gist in your website.</p>
                                    </div>
                                </div>
                                <hr className="border-border-primary" />
                                <div className="p-3 hover:bg-text-blue rounded-b-lg flex cursor-pointer" onClick={() => setSelectedMenu('Share')}>
                                    <div className="mr-2 w-4">
                                        {
                                            selectedMenu === "Share" && <BsCheckLg className="text-text-secondary text-lg" />
                                        }
                                    </div>
                                    <div>
                                        <p className="font-semibold text-text-secondary text-sm">Share</p>
                                        <p className="text-xs">Copy shareable link for the gist.</p>
                                    </div>
                                </div>
                            </ul>
                        }

                        <input type="text" className="text-xs rounded-none max-w-xs border-border-primary p-1.5 bg-transparent outline-none border-y" />
                        <div className="rounded-r-lg bg-button-secondary p-2 text-xs border-border-primary border text-text-secondary px-3 cursor-pointer font-medium">
                            <BiCopy />
                        </div>
                    </div>

                    <button className="btn btn-sm text-text-secondary border-border-primary capitalize text-xs bg-button-secondary hover:bg-button-secondary">Download ZIP</button>
                </div>
            </div>

            <hr className='border-border-primary' />

            <div className='max-w-5xl mx-auto p-4'>
                <p className="text-text-secondary text-sm">Alternative file of MARCS interpolation code</p>

                <div className="border-border-primary border rounded-lg mt-3">
                    <div className="bg-dark border-b border-border-primary rounded-t-lg p-3 flex items-center gap-2">
                        <BsCodeSquare className='font-bold text-sm' />
                        <h3 className="text-xs font-semibold text-text-blue hover:underline cursor-pointer">All Gists</h3>
                    </div>

                    <div className="rounded-lg pl-4 text-xs">
                        <SyntaxHighlighter language="javascript" style={monokai} showLineNumbers wrapLines showInlineLineNumbers customStyle={{ background: '#22272E', borderRadius: '8px' }}>
                            {codeString}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <hr className="border-border-primary my-4" />

                <div className="flex gap-3 items-start">
                    <img src="https://avatars.githubusercontent.com/u/73209159?v=4" className="rounded-full border-border-primary border h-10" />

                    <div className="border-border-primary border rounded-lg mt-3 w-full">
                        <div className="bg-dark rounded-t-lg pt-2 px-2">
                            <div className="tabs border-border-primary text-text-secondary text-sm">
                                <a className="p-2 tab-active px-4 border bg-light border-b-0 rounded-t-lg border-border-primary">Write</a>
                                <a className="p-2 tab-active px-4 text-text-grey border-border-primary">Preview</a>
                            </div>
                        </div>

                        <div className="border-border-primary border m-4 mb-2 rounded-lg flex flex-col">
                            <textarea className="textarea w-full min-h-24 rounded-b-none border-0 border-b border-dashed border-border-primary text-text-secondary placeholder:text-text-grey" placeholder="Leave a comment" />
                            <div className="w-full h-8 rounded-b-lg bg-dark text-xs flex items-center px-4 justify-between">
                                Attach files by dragging & dropping, selecting or pasting them.
                                <SiMarkdown className="text-lg" />
                            </div>
                        </div>

                        <div className="flex justify-end items-center m-4 mt-2">
                            <button className="btn btn-sm bg-button-primary hover:bg-button-primary text-white border-border-primary capitalize text-xs">Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gist