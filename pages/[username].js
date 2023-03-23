import GistItem from "@/components/profile/gistItem";
import { useRouter } from "next/router";
import { BiLink } from 'react-icons/bi';
import { BsCodeSquare, BsTwitter } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

const Profile = () => {

    const { query } = useRouter();
    console.log(query.username)

    return (
        <div className="mx-auto max-w-7xl h-full w-full p-7">
            <div className="grid grid-cols-12 w-full">

                <div className="col-span-3 p-3">
                    <div className="relative">
                        <img src="https://avatars.githubusercontent.com/u/73209159?v=4" className="rounded-full border-border-primary border" />
                        <div className="absolute bottom-10 right-1 rounded-full border-border-primary border w-10 h-10 bg-light flex justify-center items-center">
                            <h1>🚬</h1>
                        </div>
                    </div>

                    <div className="my-4">
                        <h1 className="text-text-secondary text-2xl font-semibold">Mukul Rajpoot</h1>
                        <h2 className="font-extralight text-xl tracking-tighter">mukulrajpoot262610</h2>

                        <h3 className="text-text-secondary font-normal mt-4">Full-Stack Developer / Website and WebApps / Learning Web3</h3>

                        <div className="flex justify-start items-center mt-4 gap-2">
                            <div className="flex items-center gap-1 text-sm cursor-pointer hover:text-text-blue">
                                <FiUsers className="text-text-grey" />
                                <h2 className="font-bold tracking-tighter text-text-secondary hover:text-text-blue">141</h2>
                                <h3 className="font-light">followers</h3>
                            </div>
                            <div className="flex items-center gap-1 text-sm cursor-pointer hover:text-text-blue">
                                <h2 className="font-bold tracking-tighter text-text-secondary hover:text-text-blue">14</h2>
                                <h3 className="font-light">following</h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm mt-4">
                            <GoLocation className="text-text-grey" />
                            <h3 className="font-light text-text-secondary tracking-tight">Bareilly, Uttar Pradesh</h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-1">
                            <BiLink className="text-text-grey" />
                            <h3 className="font-light text-text-secondary tracking-tight">mukulrajpoot.com</h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-1">
                            <BsTwitter className="text-text-grey" />
                            <h3 className="font-light text-text-secondary tracking-tight">@mukul_eth</h3>
                        </div>

                        <button className="btn btn-sm capitalize w-full mt-4 bg-button-secondary text-text-secondary border-border-primary text-sm hover:bg-button-secondary">View GitHub Profile</button>
                    </div>
                </div>

                <div className="col-span-9 p-3">
                    <div className="flex justify-between items-center">
                        <div className="tabs text-text-secondary">
                            <a className={`tab-bordered border-border-orange`}>
                                <div className='flex items-center gap-2 m-1 mx-0 rounded-lg hover:bg-dark p-1 cursor-pointer text-sm'>
                                    <BsCodeSquare className='font-bold' />
                                    <h3 className="tracking-tight">All Gists</h3>
                                    <h3 className="bg-button-secondary flex justify-center items-center rounded-full w-5 h-5 text-xs font-bold">3</h3>
                                </div>
                            </a>
                        </div>

                        <div className="border flex justify-center items-center border-border-primary rounded-lg pl-3 bg-button-secondary text-xs font-medium">
                            <h2>Type: </h2>
                            <select className="select select-sm bg-button-secondary text-text-secondary border-0 max-w-xs text-xs">
                                <option selected>All</option>
                                <option>Public</option>
                                <option>Private</option>
                            </select>
                        </div>
                    </div>
                    <hr className="border-border-primary" />

                    <div className="mt-6">
                        <GistItem />
                        <GistItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile