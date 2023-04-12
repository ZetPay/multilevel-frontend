import React, { useState, useEffect } from "react";
import Table from "components/Organizms/Table/Table";
import Admin from "layouts/Admin";
import { useDispatch, useSelector } from "react-redux";
import { PaymentActions } from "store/redux/paymentReducer";
import { formatMoney } from "helper/numberFormat";
import moment from "moment";
import { FiCheckCircle, FiX } from "react-icons/fi";
import { useAlert } from "react-alert";

export default function Admintransaction() {
  const dispatch = useDispatch()
  const alert = useAlert()
  const { data } = useSelector(state => state.paymentReducer.order_list)
  const [currentPage,setCurrentPage] = useState(1)
  const [thead] = useState([
    {
      name: "No"
    },
    {
      name: "Order Number"
    },
    {
      name: "Order Type"
    },
    {
      name: "Name"
    },
    {
      name: "Payment Methode"
    },
    {
      name: "Nominal"
    },
    {
      name: "Status"
    },
    {
      name: "Date"
    },
    {
      name: "Action"
    }
  ])

  useEffect(()=>{
    dispatch(PaymentActions.doGetOrderListRequest())
    dispatch(PaymentActions.doGetTransactionListRequest())
  },[])

  const AppRoveTransaction = (id,type) => {
    dispatch(PaymentActions.doApproveTransactionRequest({
      data: {
        order_number: id,
        status: type
      },
      message: (msg) => alert.success(msg),
    }))
  }

  const nextPage = () => {
    const lastPage = data?.data?.last_page
    if(currentPage < lastPage){
      const next = currentPage + 1;
      setCurrentPage(next)
      dispatch(PaymentActions.doGetOrderListRequest(next))
    }
  }

  const prevPage = () => {
    if(currentPage !== 1){
      const prev = currentPage - 1;
      setCurrentPage(prev)
      dispatch(PaymentActions.doGetOrderListRequest(prev))
    }
  }

  const renderPaymentStatus = item => {
    switch (item) {
      case 'success':{
        return <p style={{backgroundColor: 'green',padding: 5, borderRadius: 5, color: 'white', textAlign: 'center'}}>SUCCESS</p>
      }
      case 'pending':{
        return <p style={{backgroundColor: '#e88e2e',padding: 5, borderRadius: 5, color: 'white', textAlign: 'center'}}>PENDING</p>
      }
      case 'failed':{
        return <p style={{backgroundColor: 'red',padding: 5, borderRadius: 5, color: 'white', textAlign: 'center'}}>FAILED</p>
      }
      default:
        break;
    }
  }

    return (
        <div className="flex flex-wrap bg-white">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Transaction List</h6>
                    {/* <button
                      className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                      type="button"
                    >
                      Settings
                    </button> */}
                  </div>
                </div>
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold py-3 px-6"
                    htmlFor="grid-password">
                      Payment History
                </label>
                <Table 
                  color="light" 
                  prev={prevPage}
                  next={nextPage}
                  total={data?.data?.total}
                  currentPage={currentPage}
                  lastPage={data?.data?.last_page}>
                    <table className="border-collapse items-center w-full bg-transparent">
                      <thead>
                        <tr>
                        {
                          thead?.map((x,i) => (
                              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                {x?.name}
                              </th>
                          ))
                        } 
                        </tr>  
                      </thead>
                      <tbody>
                        {
                          data?.data?.data?.map((y,l) => (
                            <tr id={l} className="border border-solid">
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {l+1}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.order_number}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.order_type}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.user?.name}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.payment_method}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  Rp {formatMoney(y?.amount)},-
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {renderPaymentStatus(y?.payment_status)}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {moment(y?.updated_at).format("DD-MMM-YYYY h:mm:ss")}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  <div>
                                    {
                                      y?.payment_status === "pending" && (
                                        <div className="flex row">
                                          <button onClick={() => AppRoveTransaction(y?.order_number, "success")}  type="button" className="flex mx-auto" style={{width: 24, height: 24, backgroundColor: "green", alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                                            <FiCheckCircle width={24} color="white" />
                                          </button>
                                          <div style={{width: 10}} />
                                          <button onClick={() => AppRoveTransaction(y?.order_number, "failed")}  type="button" className="flex mx-auto" style={{width: 24, height: 24, backgroundColor: "red", alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                                            <FiX width={24} color="white" />
                                          </button>
                                        </div>
                                      )
                                    }
                                  </div>
                                </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </Table>
              </div>
            </div>
        </div>
    )
}

Admintransaction.layout = Admin;