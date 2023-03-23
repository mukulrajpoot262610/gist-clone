import { BiCaretDown, BiPlus } from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav className="w-full h-16 bg-dark">
            <div className="flex justify-between items-center h-full px-4">
                <div className="flex justify-center items-center gap-4 font-semibold text-sm text-text-white">
                    <img src="/logo.png" className="h-8" />
                    <h2 className="cursor-pointer hover:text-white">All gists</h2>
                    <h2 className="cursor-pointer hover:text-white">Back to GitHub</h2>
                </div>

                <div className="flex justify-center items-center gap-3 font-semibold text-sm text-text-white">
                    <BiPlus className="cursor-pointer hover:text-white text-lg" />
                    <div className='flex justify-center items-center cursor-pointer hover:text-white'>
                        <img src="https://avatars.githubusercontent.com/u/73209159?s=40&v=4" className="h-5 rounded-full" />
                        <BiCaretDown className="  text-base" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar