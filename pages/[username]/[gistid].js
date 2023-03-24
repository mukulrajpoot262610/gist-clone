import { useState } from "react"
import { BiCaretDown, BiCopy } from "react-icons/bi"
import { BsCheckLg } from "react-icons/bs"
import { MdOutlineCode } from "react-icons/md"

const Gist = () => {

    const [menuActive, setMenuActive] = useState(true)
    const [selectedMenu, setSelectedMenu] = useState("Embed")

    console.log(menuActive)

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

            <div className=''></div>
        </div>
    )
}

export default Gist