import {useState} from "react";

type DropdownProps = {
    /**
     * The display text of the dropdown
     */
    label: string;
    /**
     * Change if the dropdown is open or not
     */
    open?: boolean
}


export const Dropdown = ({label, open}: DropdownProps) => {
    const [isOpen, setOpen] = useState(!!open);

    return <div className="relative mb-32">
        <button
            onClick={() => setOpen(!isOpen)}
            className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <span>{label}</span>
            <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20">
                <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
        </button>
        {isOpen ?
            <div className="absolute flex flex-col py-2 mt-1 text-gray-700 bg-white border rounded-lg">
                <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">One item</a>
                <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">Another
                    longer
                    item</a>
                <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">A medium
                    item</a>
            </div> : null
        }
    </div>
}
