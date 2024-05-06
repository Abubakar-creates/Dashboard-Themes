import React from 'react'
import { FaSortDown, FaSortUp } from 'react-icons/fa6'

const ListHead = ({ headerStyle, spanStyle, heading, handleSorting, headingIndex, sortIndex, sortDirection }) => {
    return (
        <th className={`text-[11px] border-[1px] border-b-black dark:!border-blue-300 max-md:text-[.6rem] max-md:font-[400] select-none ${headerStyle}`}>
            <div onClick={() => (handleSorting ? handleSorting(headingIndex) : '')} className='flex items-center mr-4 cursor-pointer'>
                <span className={spanStyle} >{heading}</span>
                {handleSorting && (
                    <div className='ml-auto' >
                        <FaSortUp className={`text-gray-400 ${sortIndex === headingIndex && (sortDirection == "asc" ? '!text-black dark:!text-white' : '')}`} />
                        <FaSortDown className={`mt-[-.4rem] text-gray-400 ${sortIndex === headingIndex && (sortDirection == "desc" ? '!text-black dark:!text-white' : '')}`} />
                    </div>
                )}
            </div>
        </th>
    )
}

export default ListHead
