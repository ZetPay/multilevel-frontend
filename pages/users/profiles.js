import React, { useEffect, useState } from 'react'
import Admin from "layouts/Admin.js";
import CardSettings from 'components/Cards/CardSettings';
import CardProfile from 'components/Cards/CardProfile';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from '../../store/redux/profileReducer';
import { PaymentActions } from '../../store/redux/paymentReducer';
import Option from 'components/Atoms/Option/Option';
import Button from 'components/Atoms/Button/Button';
import { formatMoney } from 'helper/numberFormat';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Profiles(){
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profileReducer.profile)
  const { deposit_list : { data, fetching } } = useSelector(state => state.paymentReducer);
  const [paymentMethode, setPaymentMethode] = useState('')
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
  
  const formik = useFormik({
    initialValues: {
      paket: '',
    },
    onSubmit: val => {
      let data = new FormData();
      data.append("deposit_id", val.paket)
      data.append("payment_method",paymentMethode)
      dispatch(PaymentActions.doUpgradePaketRequest(data))
    },
    validationSchema: yup.object({
      paket: yup.string().required()
    })
  });

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile name={profile?.data?.user?.name} downline={profile?.data?.user?.downlines} />
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-2">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <h3 className="text-center text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 mt-6">
                    Upgrade Paket
                  </h3>
                  <div className="flex py-2 lg:pt-4">
                    <form className="w-full px-2">
                      <div className="relative w-full mb-6">
                        <Option 
                          label="Select Packet Deposit" 
                          placeholder="Chose Deposite" 
                          name="paket"
                          value={formik.values.paket}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{borderColor: formik.errors.paket ? 'red' : ''}} >
                          <option label="Chose Deposite" value="default" ></option>
                          {
                            fetching ? (
                              <option></option>
                            ) : (data?.length > 0 ? data : []).map((item, index) => (
                              <option key={index} value={item?.id}>{item?.name} Rp {formatMoney(item?.nominal)}</option>
                            ))
                          }
                        </Option>
                        { formik.errors.paket && (
                          <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.paket}</p>
                        )}
                      </div>
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                          Payment Methode
                      </label>
                      <div className="flex flex-wrap mb-6">
                        {
                          payment?.map((item,i) => (
                            <div key={i} className="w-full lg:w-4/12 md:w-6/12 sm:w-2/12 px-2">
                              <button type="button" onClick={() => setPaymentMethode(item.name)} className={item?.name === paymentMethode ? "border border-red-500 rounded rounded-sm" : "border border-gray-600 "+"rounded rounded-sm"}>
                                <img src={item.image} alt={item.name} className="py-3 px-3 h-12"/>
                              </button>
                            </div>
                          ))
                        }
                      </div>
                      <div className="mb-6">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password">
                          Summary
                        </label>
                        <p className="block text-blueGray-600 text-xs font-medium mb-2">Paket Yang Dipilih : GOLD</p>
                        <p className="block text-blueGray-600 text-xs font-medium mb-2">Harga Paket : Rp 3.500.000,-</p>
                        <hr className="my-2 border-b-1 border-blueGray-300" />
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
                        <Button label="Upgrade Pake" isFetching={false} disabled={false} type="submit"  />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
      </div>
    </>
  )
}

Profiles.layout = Admin;