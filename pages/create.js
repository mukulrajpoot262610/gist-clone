import { ProtectedRoute } from "@/utils/ProtectedRoute"
import { useState } from "react"
import { BiCaretDown } from "react-icons/bi"
import { BsCheckLg } from "react-icons/bs"

const CreateGist = () => {

    const [menuActive, setMenuActive] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState("Create a Secret Gist")
    const [gistDescription, setGistDescription] = useState('')
    const [gistFilename, setGistFilename] = useState('')
    const [code, setCode] = useState('')


    const handleSubmit = async () => {

        console.log(gistDescription, gistFilename, code);
    }

    return (
        <ProtectedRoute>
            <div>
                <div className="max-w-5xl mx-auto py-6 justify-end font-semibold text-sm text-text-blue cursor-pointer hover:underline lg:flex hidden">
                    View your Gists
                </div>
                <div className="p-4 lg:hidden">
                    <button className="btn btn-sm text-text-secondary border-border-primary capitalize text-xs bg-button-secondary hover:bg-button-secondary w-full">View your Gists</button>
                </div>
                <hr className="border-border-primary" />

                <div className="max-w-5xl mx-auto p-4">
                    <input className="input input-sm border-border-primary bg-light placeholder:text-text-grey text-xs w-full text-text-secondary" placeholder="Gist Description..." onChange={(e) => setGistDescription(e.target.value)} />

                    <div className="border-border-primary border mt-4 rounded-lg">
                        <div className="border-b border-border-primary p-2 bg-dark rounded-t-lg flex justify-between items-center">
                            <input className="input input-sm border-border-primary bg-light placeholder:text-text-grey max-w-xs w-full text-xs text-text-secondary" placeholder="Filename including extension..." onChange={(e) => setGistFilename(e.target.value)} />
                        </div>
                        <div className="h-80">
                            <textarea className="textarea border-0 w-full h-80" onChange={(e) => setCode(e.target.value)}></textarea>
                        </div>
                    </div>

                    <div className="mt-3 flex justify-between items-center">
                        {/* <button className="btn btn-sm text-text-secondary border-border-primary capitalize text-xs bg-button-secondary hover:bg-button-secondary">Add file</button> */}
                        <div className="flex justify-center items-center relative">
                            <button className=" p-2 rounded-lg border border-r-0 border-border-primary capitalize text-xs bg-button-primary text-white rounded-r-none" onClick={handleSubmit}>{selectedMenu}</button>
                            <button className="p-[7px] rounded-lg capitalize text-xs bg-button-primary text-white rounded-l-none border border-border-primary" onClick={() => setMenuActive(!menuActive)}>
                                <BiCaretDown className="text-lg" />
                            </button>

                            {
                                menuActive && <ul className="menu menu-compact lg:menu-normal w-96 absolute top-10 border-border-primary border rounded-lg right-0 bg-dark">
                                    <li className="text-xs p-2 text-text-secondary">What would you like to do?</li>
                                    <hr className="border-border-primary" />
                                    <div className="p-2 hover:bg-text-blue flex cursor-pointer" onClick={() => setSelectedMenu('Create a Secret Gist')}>
                                        <div className="mr-2 w-5">
                                            {
                                                selectedMenu === "Create a Secret Gist" && <BsCheckLg className="text-text-secondary text-lg" />
                                            }
                                        </div>
                                        <div>
                                            <p className="font-semibold text-text-secondary text-sm">Create a Secret Gist</p>
                                            <p className="text-xs">Secret gist are hidden by search engines but visible to anyone you give the URL to.</p>
                                        </div>
                                    </div>
                                    <hr className="border-border-primary" />
                                    <div className="p-3 hover:bg-text-blue rounded-b-lg flex cursor-pointer" onClick={() => setSelectedMenu('Create public gist')}>
                                        <div className="mr-2 w-4">
                                            {
                                                selectedMenu === "Create public gist" && <BsCheckLg className="text-text-secondary text-lg" />
                                            }
                                        </div>
                                        <div>
                                            <p className="font-semibold text-text-secondary text-sm">Create public gist</p>
                                            <p className="text-xs">Public gist are visible to everyone.</p>
                                        </div>
                                    </div>
                                </ul>
                            }

                        </div>


                    </div>
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default CreateGist