import { SearchIcon, NewspaperIcon, PhotographIcon, ShoppingBagIcon, VideoCameraIcon, DotsVerticalIcon } from "@heroicons/react/outline"

function Menu() {
    return (
        <div className="flex items-center justify-between border-b">
            <div className="flex items-center ml-[10%] space-x-7">
                <div className="flex items-center space-x-1 pb-3 border-b border-blue-700 cursor-pointer">
                    <SearchIcon className="h-4 text-blue-700" />
                    <h1 className="text-blue-700">All</h1>
                </div>
                <div className="flex items-center space-x-1 pb-3 cursor-pointer">
                    <NewspaperIcon className="h-4 text-gray-500" />
                    <h1 className="text-gray-500">News</h1>
                </div>
                <div className="flex items-center space-x-1 pb-3 cursor-pointer">
                    <PhotographIcon className="h-4 text-gray-500" />
                    <h1 className="text-gray-500">Images</h1>
                </div>
                <div className="flex items-center space-x-1 pb-3 cursor-pointer">
                    <ShoppingBagIcon className="h-4 text-gray-500" />
                    <h1 className="text-gray-500">Shopping</h1>
                </div>
                <div className="flex items-center space-x-1 pb-3 cursor-pointer">
                    <VideoCameraIcon className="h-4 text-gray-500" />
                    <h1 className="text-gray-500">Videos</h1>
                </div>
                <div className="flex items-center space-x-1 pb-3 cursor-pointer">
                    <DotsVerticalIcon className="h-4 text-gray-500" />
                    <h1 className="text-gray-500">More</h1>
                </div>
                <h1 className="pb-3 text-gray-500 translate-x-20 cursor-pointer">Tools</h1>
            </div>
        </div>
    );
}

export default Menu;