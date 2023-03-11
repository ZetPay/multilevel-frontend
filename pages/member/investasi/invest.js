import React, {useEffect, useState} from 'react'
import { PaymentActions } from 'store/redux/paymentReducer';
import { ProfileActions } from 'store/redux/profileReducer';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Atoms/Button/Button';
import { formatMoney } from 'helper/numberFormat';
import Admin from 'layouts/Admin';

export default function Invest(){
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profileReducer.profile)
    const { deposit_list : { data, fetching } } = useSelector(state => state.paymentReducer);
    const [paymentMethode, setPaymentMethode] = useState('')
    const [paket, setPaket] = useState('')
    const [payment] = useState([
      {
        id: 1,
        name: "bca",
        image: "/img/payment/ic_bca.png"
      },
      {
        id: 2,
        name: "bni",
        image: "/img/payment/ic_bni.png"
      },
      {
        id: 3,
        name: "bri",
        image: "/img/payment/ic_bri.png"
      },
      {
        id: 4,
        name: "cimb",
        image: "/img/payment/ic_cimb.png"
      },
      {
        id: 5,
        name: "ovo",
        image: "/img/payment/ic_ovo.png"
      },
      {
        id: 6,
        name: "qris",
        image: "/img/payment/ic_qris.png"
      }
    ])
  
    useEffect(()=>{
      dispatch(PaymentActions.doGetDepositListRequest());
      dispatch(ProfileActions.doGetProfileRequest())
    },[])
    
    const onUpgradePaket = () => {
      console.log({
        deposit_id: paket,
        payment_method: paymentMethode
      })
      dispatch(PaymentActions.doUpgradePaketRequest({
        deposit_id: paket,
        payment_method: paymentMethode
      }))
    }

    return ( 
      <div className="relative flex flex-wrap -mt-4">
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">Upgrade Paket</h6>
                {/* <button
                  className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                  type="button"
                >
                  Settings
                </button> */}
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
                <div className="w-full px-2">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                      Select Packet Deposit
                  </label>

                  <div className="flex flex-wrap mb-6">
                    {
                      fetching ? (
                        <option></option>
                      ) : (data?.length > 0 ? data : []).map((item, index) => (
                        <div key={index} className="max-w-sm w-full lg:w-3/12 md:w-4/12 sm:w-2/12 px-2 mt-3">
                          <button 
                            type="button" 
                            onClick={() => setPaket(item?.id)} 
                            className={paket === item?.id ? "w-full border border-red-500 rounded rounded-lg" : "w-full border border-blueGray-600"+" rounded rounded-lg"}>
                            <div className="px-6 p-4">
                              <div className="mb-2">
                                <p className="font-bold text-xl text-center">{item?.name}</p>
                              </div>
                              <p className="text-gray-700 font-medium text-base">
                                Rp {formatMoney(item?.nominal)},-
                              </p>
                            </div>
                          </button>
                        </div>
                      ))
                    }
                  </div>
                  <hr className="my-2 border-b-1 border-blueGray-300" />
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                      Payment Methode
                  </label>
                  <div className="flex flex-wrap mb-6">
                    {
                      payment?.map((item,i) => (
                        <div key={i} className="max-w-sm w-full lg:w-3/12 md:w-4/12 sm:w-2/12 px-2 mt-3">
                          <button type="button" onClick={() => setPaymentMethode(item.name)} className={item?.name === paymentMethode ? "border border-red-500 rounded rounded-sm w-full flex " : "border border-blueGray-500 "+"rounded rounded-sm w-full flex "}>
                            <img src={item.image} alt={item.name} className="py-3 px-3 h-12"/>
                            <p className="text-xs text-center font-regular text-gray-300 self-center">Fee Rp 2.500,-</p>
                          </button>
                        </div>
                      ))
                    }
                  </div>
                  <hr className="my-2 border-b-1 border-blueGray-300" />
                  <div className="mb-6">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-4"
                      htmlFor="grid-password">
                      Summary
                    </label>
                    <p className="block text-blueGray-600 text-xs font-medium mb-2">Paket Yang Dipilih : GOLD</p>
                    <p className="block text-blueGray-600 text-xs font-medium mb-2">Harga Paket : Rp 3.500.000,-</p>
                    <hr className="my-4 border-b-1 border-blueGray-300" />
                    <p className="block text-blueGray-600 text-xs font-medium mb-2">Active Paket : SILVER</p>
                    <p className="block text-blueGray-600 text-xs font-medium mb-2">Harga Paket : Rp 1.500.000,-</p>
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-3"
                      htmlFor="grid-password">
                      Subtotal
                    </label>
                    <div className="flex w-full">
                    <p className="block text-blueGray-600 text-sm font-medium">Total</p>
                    <p className="block text-blueGray-600 text-sm font-bold mb-3 text-align-right px-3"> Rp 1.500.000,-</p>
                    </div>
                  </div>
                  <div className="my-4">
                    <Button type="button" label="Upgrade Pake" isFetching={false} disabled={false} onClick={() => { onUpgradePaket()}}  />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
Invest.layout = Admin;