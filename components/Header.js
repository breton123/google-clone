import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid"
import { CogIcon, MenuIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
import { useRef } from "react";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const oldSearch = router.query.term;

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
    
        if (!term) return;
    
        router.push(`/search?term=${term}`)
    
      };

    return (
        <div className="flex justify-between items-center py-7 px-5">
            <div className="flex items-center space-x-10">
                <img onClick={() => router.push(`/`)} className="h-9 cursor-pointer" src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img>
                <div className="flex items-center">
                    <input ref={searchInputRef} className="shadow-md rounded-full w-[700px] h-12 pl-3 pr-16 border-gray border-[1px] border-opacity-70 hover:shadow-lg" placeholder={oldSearch}></input>
                    <div className="flex items-center space-x-3 -translate-x-16">
                        <MicrophoneIcon className="h-5 fill-blue-500 cursor-pointer" />
                        <SearchIcon className="h-5 fill-blue-500 cursor-pointer" onClick={search} />
                    </div>

                </div>
            </div>
            <div className="flex items-center space-x-4">
                <CogIcon className="h-11 text-gray-500 hover:bg-gray-200 p-2 rounded-full cursor-pointer" />
                <MenuIcon className="h-11 text-gray-500 hover:bg-gray-200 p-2 rounded-full cursor-pointer" />
                <span className="p-4 bg-green-500 rounded-full cursor-pointer"></span>
            </div>

        </div>
    );
}

export default Header;