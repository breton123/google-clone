function Result({link, title, description}) {
    return (
        <div className="flex flex-col">
            <h1>{link}</h1>
            <h1 className="text-2xl text-blue-900 w-1/3 truncate">{title}</h1>
            <h1 className="w-2/5 text-gray-500">{description}</h1>
        </div>
    );
}

export default Result;