import React, { useState } from 'react'
import ListHead from '../components/List/ListHead';

const paginatedData = [{
  id: 1,
  email: "seth@gmail.com",
}]

const tableItemsPerPage = [5, 10, 30, 50, 100, 'ALL']


const Employee = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  const handleCreate = () => {
  }

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

                    <tr className=" uppercase  text-sm leading-normal w-[100%]">
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">ID </th>
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">Name</th>
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[10%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%] text-[13px]">Email</th>
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[10%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%] text-[13px]">Status</th>
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center text-[13px]">Actions</th>
                    </tr>

                  </thead>

                  {paginatedData?.map((value, index) => (
                    <tbody className="text-[#000000] text-sm font-light w-[100%] bg-white" key={value.id} >
                      <tr className='' >
                        <td className="py-[2%] w-[3%]   border-r-[1px] border-t-[1px] text-center">
                          <span className="font-bold max-md:text-[.7rem] text-[13px] text-blue-500">{value.id}</span>
                        </td>
                        <td className="py-[2%] w-[10%]   border-r-[1px] border-t-[1px]   text-center">
                          <span className=" max-md:text-[.7rem] text-[13px] font-[350]">{value.email}</span>
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
