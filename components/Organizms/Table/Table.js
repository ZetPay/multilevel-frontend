import React from "react";
import PropTypes from "prop-types";
import { FiRefreshCcw } from "react-icons/fi";

// components
export default function Table(props) {
  const { color, children, total, currentPage, lastPage, prev, next, refresh, refreshing } = props

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <div className="flex justify-between py-3 pl-2">
                <div className="max-w-xs mr-2">
                    <label htmlFor="hs-table-search" className="sr-only">
                        Search
                    </label>
                    <div className="absolute mt-4 px-3">
                        <svg
                            className="h-3.5 w-3.5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="hs-table-search"
                        id="hs-table-search"
                        className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        placeholder="Search..."
                    />
                </div>
                <div className="flex items-center space-x-2">
                        <div className="relative">
                            <button type="button" onClick={refresh} disabled={refreshing} className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                                {
                                  refreshing ? (
                                    <span className="bg-blueGray-600 relative inline-flex items-center px-2 py-1 space-x-1 text-sm font-medium text-gray-600 border border-gray-300 rounded-md sm:py-2">
                                      <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-9 w-9" viewBox="0 0 25 25" fill="none"
                                            stroke="currentColor">
                                            <path d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5" stroke="#fafafa" strokeWidth="1.2"/>
                                        </svg>
                                      </div>
                                    </span>
                                  ) : (
                                    <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                                      <div>
                                          <FiRefreshCcw/>
                                      </div>
                                      <div className="hidden sm:block">
                                          Refresh
                                      </div>
                                    </span>
                                  )
                                }
                            </button>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          {children}
        </div>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <div className="flex justify-between py-3 pl-2">
                <div className="max-w-xs mr-2">
                    
                </div>
                <div className="flex items-center space-x-2">
                        <div className="relative">
                          
                          <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-700 dark:text-gray-400">
                                Showing <span className="font-semibold text-gray-900 dark:text-gray-50">1</span> to <span className="font-semibold text-gray-900 dark:text-gray-50">10</span> of <span className="font-semibold text-gray-900 dark:text-gray-50">{total}</span> Entries
                            </span>
                            <div className="bg-blueGray-600 inline-flex mt-2 xs:mt-0">
                              <button onClick={() => prev()} type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                  <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                  Prev
                              </button>
                              <button onClick={() => next()} type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                  Next
                                  <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                              </button>
                            </div>
                          </div>

                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Table.defaultProps = {
  color: "light",
};

Table.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
