import { useState } from 'react'
import { BsCodeSquare, BsStar } from 'react-icons/bs'

const Discover = () => {

    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="min-h-screen">
            <div className='flex justify-start gap-3 items-center text-text-white p-6'>
                <BsCodeSquare className='font-bold text-3xl' />
                <h1 className='text-xl'>Discover gists</h1>
            </div>

            <div className="tabs px-6 text-text-white">
                <a className={`${activeTab == 0 && "tab-bordered border-border-orange"}`}>
                    <div className='flex items-center gap-2 m-2 mr-0 rounded-lg hover:bg-dark p-2 cursor-pointer' onClick={() => setActiveTab(0)}>
                        <BsCodeSquare className='font-bold text-lg' />
                        <h3>All Gists</h3>
                    </div>
                </a>
                <a className={`${activeTab == 1 && "tab-bordered border-border-orange"}`}>
                    <div className='flex items-center gap-2 m-2 mr-0 rounded-lg hover:bg-dark p-2 cursor-pointer' onClick={() => setActiveTab(1)}>
                        <BsStar className='font-bold text-lg' />
                        <h3>Starred</h3>
                    </div>
                </a>
            </div>
            <hr className='border-border-primary' />
        </div>
    )
}

export default Discover