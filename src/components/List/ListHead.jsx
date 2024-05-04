import React from 'react'


const ListHead = ({title, records, buttonText, handleCreate, setSearchData, searchData}) => {
    return (
        <div>
            <h1 className="text-[19px] text-gray-700 font-[700]  ">{title}</h1>
            <h1 className="text-[13px] text-gray-700 mb-4">
                {records} records found
            </h1>
            <div className="flex mt-8 flex-row-reverse justify-between">
                <button
                    onClick={() => handleCreate()}
                    className="bg-sky-100 text-sky-500  hover:bg-sky-500 !pl-6 !pb-1 !h-[2rem] !pr-4 !rounded-md hover:!text-white border-[1px] border-sky-500 !font-[600] !text-[14px] !normal-case"
                >
                    {buttonText}
                </button>
                <div className="w-[40%]">
                    <input
                        type="search"
                        placeholder="Search Here..."
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                        id=""
                        className="block w-[90%] pl-10  text-gray-900  p-2  rounded-md  border-gray-800  bg-white focus:outline-none"
                    />
                    {/* <SearchIcon className="mt-[-4rem] text-gray-700 ml-2" /> */}
                </div>
            </div>
        </div>
    )
}

export default ListHead
    