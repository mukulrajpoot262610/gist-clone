import Tabs from '@/components/discover/tabs'
import { useState } from 'react'
import { BsCodeSquare } from 'react-icons/bs'

const Discover = () => {

    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="min-h-screen">
            <div className='flex justify-start gap-3 items-center text-text-white p-6'>
                <BsCodeSquare className='font-bold text-3xl' />
                <h1 className='text-xl'>Discover gists</h1>
            </div>

            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <hr className='border-border-primary' />

            <div className=''></div>
        </div>
    )
}

export default Discover