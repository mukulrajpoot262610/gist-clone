import Link from 'next/link'
import { useState } from 'react'
import { BiCaretDown, BiPlus } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false)
    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    return (
        <nav className="w-full h-16 bg-dark z-40 relative">

            <div className="flex justify-between items-center h-full px-4">
                <div className="justify-center items-center gap-4 font-semibold text-sm text-text-white hidden lg:flex">
                    <img src="/navbar/logo.png" className="h-8" />
                    <Link href="/discover">
                        <h2 className="cursor-pointer hover:text-white">All gists</h2>
                    </Link>
                    <a href='https://github.com/'>
                        <h2 className="cursor-pointer hover:text-white">Back to GitHub</h2>
                    </a>
                </div>

                <FaBars className="cursor-pointer hover:text-white text-xl lg:hidden" onClick={() => setMobileMenuActive(!mobileMenuActive)} />
                <img src="/navbar/octocat.svg" className="h-6 lg:hidden" />

                <div className="flex justify-center items-center gap-3 font-semibold text-sm text-text-white">
                    <Link href="/create">
                        <BiPlus className="cursor-pointer hover:text-white text-lg" />
                    </Link>
                    <div className='hidden lg:flex justify-center items-center cursor-pointer hover:text-white relative' onClick={() => setMenuActive(!menuActive)}>
                        <img src="https://avatars.githubusercontent.com/u/73209159?s=40&v=4" className="h-5 rounded-full" />
                        <BiCaretDown className="text-base" />
                    </div>

                    {
                        menuActive && <ul className="hidden lg:block menu menu-compact lg:menu-normal w-48 absolute top-12 border-border-primary border rounded-lg right-4 bg-dark">
                            <Link href="/mukulrajpoot262610" onClick={() => setMenuActive(!menuActive)}>
                                <div className="p-3 flex cursor-pointer">
                                    <div>
                                        <p className="text-sm font-light">Signed in as</p>
                                        <p className="font-medium text-text-secondary text-sm">mukulrajpoot262610</p>
                                    </div>
                                </div>
                            </Link>
                            <hr className="border-border-primary" />
                            <div className="flex cursor-pointer">
                                <div className='w-full my-2'>
                                    <Link href="/mukulrajpoot262610" onClick={() => setMenuActive(!menuActive)}>
                                        <p className="text-sm hover:text-white hover:bg-text-blue p-1.5 px-4 w-full font-normal text-text-secondary">Your gists</p>
                                    </Link>
                                    <Link href="/mukulrajpoot262610?tab=starred" onClick={() => setMenuActive(!menuActive)}>
                                        <p className="text-sm hover:text-white hover:bg-text-blue p-1.5 px-4 w-full font-normal text-text-secondary">Starred gists</p>
                                    </Link>
                                    <a href='https://docs.github.com/en' target="_blank" onClick={() => setMenuActive(!menuActive)}>
                                        <p className="text-sm hover:text-white hover:bg-text-blue p-1.5 px-4 w-full font-normal text-text-secondary">Help</p>
                                    </a>
                                </div>
                            </div>
                            <hr className="border-border-primary" />
                            <div className='w-full my-2'>
                                <a href='https://github.com/mukulrajpoot262610' target="_blank" onClick={() => setMenuActive(!menuActive)}>
                                    <p className="text-sm hover:text-white cursor-pointer hover:bg-text-blue p-1.5 px-4 w-full font-normal text-text-secondary">Your GitHub profile</p>
                                </a>
                            </div>
                            <hr className="border-border-primary" />
                            <div className='w-full my-2' >
                                <p className="text-sm hover:text-white cursor-pointer hover:bg-text-blue p-1.5 px-4 w-full font-normal text-text-secondary" onClick={() => setMenuActive(!menuActive)}>Sign out</p>
                            </div>
                        </ul>
                    }
                </div>
            </div>

            {
                mobileMenuActive && <div className='bg-dark h-44 p-4 pt-0 z-40'>
                    <hr className='border-border-primary' />
                    <Link href="/discover" onClick={() => setMobileMenuActive(!mobileMenuActive)}>
                        <p className="text-sm hover:text-white hover:bg-text-blue p-2 w-full font-semibold text-text-white">All Gists</p>
                    </Link>
                    <hr className='border-border-primary' />
                    <a href="https://github.com/mukulrajpoot262610" onClick={() => setMobileMenuActive(!mobileMenuActive)}>
                        <p className="text-sm hover:text-white hover:bg-text-blue p-2 w-full font-semibold text-text-white">Back to GitHub</p>
                    </a>
                    <hr className='border-border-primary' />
                    <a href="https://github.com/mukulrajpoot262610" onClick={() => setMobileMenuActive(!mobileMenuActive)}>
                        <div className='flex justify-center items-center cursor-pointer hover:text-white relative' onClick={() => setMobileMenuActive(!mobileMenuActive)}>
                            <img src="https://avatars.githubusercontent.com/u/73209159?s=40&v=4" className="h-5 rounded-full" />
                            <p className="text-sm hover:text-white hover:bg-text-blue p-2 w-full font-semibold text-text-white">mukulrajpoot262610</p>
                        </div>
                    </a>
                    <hr className='border-border-primary' />
                    <a href="https://github.com/mukulrajpoot262610" onClick={() => setMobileMenuActive(!mobileMenuActive)} className="flex items-center">
                        <FiLogOut className='text-text-white' />
                        <p className="text-sm hover:text-white hover:bg-text-blue p-2 w-full font-semibold text-text-white">Sign Out</p>
                    </a>
                </div>
            }


        </nav>
    )
}

export default Navbar