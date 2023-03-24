import { BsCodeSquare, BsStar } from "react-icons/bs"
import { TbGitFork } from "react-icons/tb"

const Tabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="tabs px-6 text-text-white">
            <a className={`${activeTab == 0 && "tab-bordered border-border-orange"}`}>
                <div className='flex items-center gap-2 m-2 mr-0 rounded-lg hover:bg-dark p-2 cursor-pointer' onClick={() => setActiveTab(0)}>
                    <BsCodeSquare className='font-bold text-lg' />
                    <h3>All Gists</h3>
                </div>
            </a>
            <a className={`${activeTab == 1 && "tab-bordered border-border-orange"}`}>
                <div className='flex items-center gap-2 m-2 mx-0 rounded-lg hover:bg-dark p-2 cursor-pointer' onClick={() => setActiveTab(1)}>
                    <TbGitFork className='font-bold text-lg' />
                    <h3>Forked</h3>
                </div>
            </a>
            <a className={`${activeTab == 2 && "tab-bordered border-border-orange"}`}>
                <div className='flex items-center gap-2 m-2 mr-0 rounded-lg hover:bg-dark p-2 cursor-pointer' onClick={() => setActiveTab(2)}>
                    <BsStar className='font-bold text-lg' />
                    <h3>Starred</h3>
                </div>
            </a>
        </div>
    )
}

export default Tabs