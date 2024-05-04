import React, { useState } from 'react'
import ListHead from '../components/List/ListHead';
import { FaSortDown } from "react-icons/fa6";
import { FaSortUp } from "react-icons/fa6";

const paginatedData = [
  {
    id: 1,
    name: 'John',
    email: "seth@gmail.com",
    age: 2,
    salary: 200,
    phone: "07252343423",
    status: 1
  },
  {
    id: 2,
    name: 'Doe',
    email: "doe@gmail.com",
    age: 70,
    salary: 100,
    phone: "09524454445",
    status: 1
  },
  {
    id: 3,
    name: 'Philipes',
    email: "seth@gmail.com",
    age: 15,
    salary: 300,
    phone: "023435453575",
    status: 0
  },
  {
    id: 4,
    name: 'Bilish',
    email: "seth@gmail.com",
    age: 28,
    salary: 1000,
    phone: "023486786",
    status: 1
  },
  {
    id: 5,
    name: 'Devin',
    email: "seth@gmail.com",
    age: 32,
    salary: 7000,
    phone: "035574747547",
    status: 0
  },
  {
    id: 6,
    name: 'John',
    email: "seth@gmail.com",
    age: 50,
    salary: 550,
    phone: "03252343423",
    status: 1
  },
]

const tableItemsPerPage = [5, 10, 30, 50, 100, 'ALL']


const TableHead = ({headerStyle, spanStyle, heading, handleSorting, headingIndex, sortIndex, sortDirection }) => {

    return(
      <th className={`text-[11px] border-r-[1px] border-b-[1px] border-b-black max-md:text-[.6rem] max-md:font-[400] select-none ${headerStyle}`}>
      <div onClick={() => handleSorting(headingIndex)} className='flex items-center mr-4 cursor-pointer'>
        <span className={spanStyle} >{heading}</span>
        <div className='ml-auto' >
          <FaSortUp className={`text-gray-400 ${sortIndex === headingIndex && (sortDirection == "asc" ? 'text-black' : '')}`} />
          <FaSortDown className={`text-gray-400 ${sortIndex === headingIndex && (sortDirection == "desc" ? 'text-black' : '')}`} />
        </div>
      </div>
    </th>
    )
}

const Employee = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [sortDirection, setSortDirection] = useState(null);
  const [sortIndex, setSortIndex] = useState(null);

  const handleCreate = () => {
  }

  // <-------------------------Sorting-------------------------->

  const handleSorting = (index) => {
    setSortIndex(index)
    setSortDirection((prevSortOrder) => (prevSortOrder === "normal" ? "asc" : prevSortOrder === "asc" ? "desc" : "normal"));

  }

  const sortedData = [...paginatedData]?.sort((a, b) => {
    if (sortIndex === 1) {
      return sortDirection === "asc" ? a.name.localeCompare(b.name) : sortDirection === "desc" ? b.name.localeCompare(a.name) : 0;
    } else if (sortIndex === 2) {
      return sortDirection === "asc" ? a.phone.localeCompare(b.phone) : sortDirection === "desc" ? b.phone.localeCompare(a.phone) : 0;
    } else if (sortIndex === 3) {
      return sortDirection === "asc" ? a.age - b.age : sortDirection === "desc" ? b.age - a.age : 0;
    } else if (sortIndex === 4) {
      return sortDirection === "asc" ? a.salary - b.salary : sortDirection === "desc" ? b.salary - a.salary : 0;
    } else if (sortIndex === 100) {
      return sortDirection === "asc" ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  });

  return (
    <>
      {loading ?
        // <Loading /> 
        ""
        :
        <>
          {noData ?
            //   <DataNotFound title={"No Category Found"} button={"+ Add Category"} />
            ''
            :

            <div className="py-2 px-10">
              <ListHead
                title={"Employee Table"}
                records={23}
                buttonText={"+ Add Employee"}
                searchData={search}
                setSearchData={setSearch}
                handleCreate={handleCreate} />
              <div className="">

                <table className="rounded-xl p-5 bg-white w-full max-md:w-[100%]  mt-6 ">
                  <thead className='mt-10'>

                    <tr className=" uppercase leading-normal w-[100%]">
                      <th className="py-[2%] border-r-[1px] border-b-[1px] border-b-black  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[11px] select-none ">ID </th>
                      <TableHead headerStyle="pl-[2rem]" heading="Name" handleSorting={handleSorting} headingIndex={1} sortDirection={sortDirection} sortIndex={sortIndex} />
                      <TableHead headerStyle="pl-[2rem]" heading="Phone" handleSorting={handleSorting} headingIndex={2} sortDirection={sortDirection} sortIndex={sortIndex} />
                      <TableHead headerStyle="" spanStyle="ml-auto" heading="Age" handleSorting={handleSorting} headingIndex={3} sortDirection={sortDirection} sortIndex={sortIndex} />
                      <TableHead headerStyle="" spanStyle="ml-auto" heading="Salary" handleSorting={handleSorting} headingIndex={4} sortDirection={sortDirection} sortIndex={sortIndex} />
                      {/* <th className="py-[2%] border-r-[1px] border-b-[1px] border-b-black  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-left pl-[2rem] max-md:w-[2%]  text-[11px] select-none ">
                        <div onClick={() => handleSorting(2)} className='flex justify-between items-center mr-4 cursor-pointer'>
                          <span>Phone</span>
                          <div>
                            <FaSortUp className={`text-gray-400 ${sortIndex === 2 ? sortDirection == "asc" ? 'text-black' : '' : ''}`} />
                            <FaSortDown className={`text-gray-400 ${sortIndex === 2 ? sortDirection == "desc" ? 'text-black' : '' : ''}`} />
                          </div>
                        </div>
                      </th>
                      <th className="py-[2%] border-r-[1px] border-b-[1px] border-b-black  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[11px] select-none ">
                        <div onClick={() => handleSorting(3)} className='flex justify-between items-center mr-4 cursor-pointer'>
                          <span className='ml-auto mr-8'>Age</span>
                          <div>
                            <FaSortUp className={`text-gray-400 ${sortIndex === 3 ? sortDirection == "asc" ? 'text-black' : '' : ''}`} />
                            <FaSortDown className={`text-gray-400 ${sortIndex === 3 ? sortDirection == "desc" ? 'text-black' : '' : ''}`} />
                          </div>
                        </div>
                      </th>
                      <th className="py-[2%] border-r-[1px] border-b-[1px] border-b-black  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[11px] select-none ">
                        <div onClick={() => handleSorting(4)} className='flex justify-between items-center mr-4 cursor-pointer'>
                          <span className='ml-auto mr-4'>Salary</span>
                          <div>
                            <FaSortUp className={`text-gray-400 ${sortIndex === 4 ? sortDirection == "asc" ? 'text-black' : '' : ''}`} />
                            <FaSortDown className={`text-gray-400 ${sortIndex === 4 ? sortDirection == "desc" ? 'text-black' : '' : ''}`} />
                          </div>
                        </div>
                      </th> */}
                      <th className="py-[2%] border-r-[1px] border-b-[1px] border-b-black  w-[10%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%] text-[11px] select-none ">Status</th>
                      <th className="py-[2%] border-r-[1px] border-b-[1px] border-b-black  w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center text-[11px] select-none ">Actions</th>
                    </tr>

                  </thead>

                  {sortedData?.map((value, index) => (
                    <tbody className="text-[#000000] text-sm font-light w-[100%] bg-white" key={value.id} >
                      <tr className='' >
                        <td className="py-[2%] w-[3%]   border-r-[1px] border-t-[1px] text-center">
                          <span className="font-bold max-md:text-[.7rem] text-[13px] text-blue-500">{value.id}</span>
                        </td>
                        <td className="py-[2%] w-[10%] pl-[2rem]  border-r-[1px] border-t-[1px]   text-left">
                          <span className=" max-md:text-[.7rem] text-[14px] font-[500]">{value.name}</span>
                          <p className=" max-md:text-[.7rem] text-[13px] font-[350] text-gray-600">{value.email}</p>
                        </td>
                        <td className="py-[2%] w-[10%] pl-[2rem]  border-r-[1px] border-t-[1px] text-left">
                          <span className=" max-md:text-[.7rem] text-[12px] font-[500]">{value.phone}</span>
                        </td>
                        <td className="py-[2%] w-[10%]   border-r-[1px] border-t-[1px]   text-center">
                          <span className=" max-md:text-[.7rem] text-[13px] font-[350]">{value.age}</span>
                        </td>
                        <td className="py-[2%] w-[10%] pr-[1.2rem]  border-r-[1px] border-t-[1px] text-right">
                          <span className=" max-md:text-[.7rem] text-[12px] font-[500]">${value.salary}</span>
                        </td>
                        <td className="py-[2%] w-[10%]   border-r-[1px] border-t-[1px]   text-center">
                          <button className={`${value.status === 1 ? 'bg-green-100 text-green-500  hover:bg-green-500 border-green-500' : 'bg-red-100 text-red-500  hover:bg-red-500 border-red-500'} !h-[1.5rem] !w-[5rem] !rounded-md hover:!text-white border-[1px] !font-[600] !text-[14px] !normal-case`}>
                            {value.status === 1 ? 'Enable' : 'Disable'}
                          </button>
                        </td>
                        <td className="py-[2%] w-[2%] max-md:text-[.7rem]  border-r-[1px] border-t-[1px]   text-center">
                          <div className="flex item-center justify-center gap-3">
                            <div className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="blue">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                            <div className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110" >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  ))}
                </table>
                <div className="h-[3rem] w-full px-10 bg-gray-200 flex justify-between items-center" >
                  <div className="flex items-center gap-5 ml-auto" >
                    {/* <p>1 - {itemPerPage === 'ALL' ? 'ALL' : itemsPerPage}</p> */}
                    <select className="px-2 !rounded-md  focus:outline-none border-[1px] border-gray-400  cursor-pointer"
                      // onChange={(e) => setItemPerPage(e.target.value)}
                      defaultValue={10}>
                      {tableItemsPerPage?.map((val, i) => (
                        <option value={val} key={i} >{val} / page</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          }
        </>
      }
    </>
  )
}

export default Employee
