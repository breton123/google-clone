import Result from "./Result"
import { ChevronRightIcon } from "@heroicons/react/solid"

function Results({ data }) {
    return (
        <div>
            <div className="flex flex-col space-y-5 ml-[10%] mt-2">
                <h1 className="text-gray-400">About 1,2365,756 results (0.41 seconds)</h1>
                {data.items?.map((result) => (
                    <Result key={result.link} title={result.title} description={result.snippet} link={result.formattedUrl} />
                ))}
            </div>
        </div>
    );
}

export default Results;

