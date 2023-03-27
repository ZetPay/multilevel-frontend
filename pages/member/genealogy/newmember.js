import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Member from "layouts/Member";
import { useDebouncedCallback } from 'use-debounce';
import { useRouter } from "next/router";
import { useAlert } from "react-alert";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AuthActions } from "store/redux/authReducer";
import { PaymentActions } from "store/redux/paymentReducer";
import Input from "components/Atoms/Input/Input";
import Option from "components/Atoms/Option/Option";
import { formatMoney } from "helper/numberFormat";
import Button from "components/Atoms/Button/Button";

export default function Newmember() {
    const router = useRouter();
    const alert = useAlert();
    const dispatch = useDispatch();
    const [termConst, setTermConst] = useState(false)
    const [refCode, setRefCode] = useState('')
    const [passwordType, setPasswordType] = useState(false)
    const { deposit_list: { data, fetching } } = useSelector(state => state.paymentReducer);
    const authData = useSelector(state => state.authReducer);
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
        id: 5,
        name: "ovo",
        image: "/img/payment/ic_ovo.png"
      },
      {
        id: 6,
        name: "qris",
        image: "/img/payment/ic_qris.png"
      },
      {
        id: 7,
        name: "cash",
        image: ""
      }
    ])
  
    useEffect(() => {
      dispatch(PaymentActions.doGetDepositListRequest());
    }, [])
  
    const debounced = useDebouncedCallback((value) => {
      setRefCode(value)
      dispatch(AuthActions.doCheckRefRequest({
        referrer_code: value
      }))
    }, 1000);
  
    const onChcekLocation = (val) => {
      dispatch(AuthActions.doCheckPositionRequest({
        data: {
          referrer_code: refCode,
          position: val
        },
        message: (type, msg) => type === "error" ? alert.error(msg) : alert.success(msg)
      }))
    }
  
  
    const formik = useFormik({
      initialValues: {
        email: '',
        username: '',
        password: '',
        nik: '',
        ttl: '',
        agama: '',
        jenis_kelamin: '',
        alamat: '',
        bank: '',
        norek: '',
        phone: '',
        referal: '',
        position: '',
        paket: ''
      },
      onSubmit: value => {
        const { email, username, password, phone, position, paket, alamat, bank, norek, nik, ttl, agama, jenis_kelamin } = value
        if (authData?.position?.data?.status === "success" || refCode.length === 0) {
          if(paymentMethode?.length > 0){
            if (termConst) {
              dispatch(AuthActions.doRegisterRequest({
                data: {
                  name: username,
                  email: email,
                  password: password,
                  referrer_code: authData?.ref?.data?.status === "success" ? refCode : null,
                  position: position?.length > 0 && refCode.length > 0 ? position : null,
                  deposit_id: paket,
                  phone: String(phone),
                  payment_method: paymentMethode,
                  address: alamat, 
                  bank_name: bank, 
                  bank_account_number: String(norek), 
                  nik: String(nik), 
                  ttl: ttl, 
                  religion: agama,
                  gender: jenis_kelamin
                },
                message: (msg) => alert.success(msg),
                error: (msg) => alert.error(msg),
                navigate: () => {
                  router.replace("/member/dashboard")
                  setTimeout(()=>{
                    router.reload(window.location.pathname)
                  },1500)
                }
              }))
            } else {
              alert.info("Please agree with the Privacy Policy!")
            }
          }else{
            alert.info("Payment methode is required!")
          }
        } else {
          alert.info("Please select an available position!")
        }
      },
      validationSchema: yup.object({
        username: yup.string().required('Username is required'),
        email: yup
          .string()
          .email('Must be a valid email')
          .required('Email is required'),
        password: yup.string().required('Password is required'),
        nik: yup.number().min(16).required('Nik is required'),
        ttl: yup.string().required('Tempat Tanggal Lahir is required'),
        agama: yup.string().required('Agama is required'),
        phone: yup.number().required('Phone is required'),
        jenis_kelamin: yup.string().required('Jenis Kelamin is required'),
        alamat: yup.string().required('Alamat is required'),
        bank: yup.string().required('Nama Bank is required'),
        norek: yup.number().required('No Rekening is required'),
        referal: yup.string(),
        position: yup.string(),
        paket: yup.string().required(),
      }),
    });

    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-12 py-6">
                  <div className="text-center flex">
                    <h6 className="text-blueGray-700 text-xl font-bold">Add New Member</h6>
                  </div>
                </div>
                <div className="w-full px-4 lg:px-10 py-10 pt-0 mx-auto bg-white">
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-wrap bg-white">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Input
                              type="text"
                              label="Username"
                              placeholder="Input username"
                              name="username"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.username ? 'red' : '' }}
                            />
                            {formik.errors.username && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.username}</p>
                            )}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Input
                              type="email"
                              label="Email"
                              placeholder="Input Email"
                              name="email"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.email ? 'red' : '' }}
                            />
                            {formik.errors.email && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.email}</p>
                            )}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Input
                              type="number"
                              label="NIK"
                              placeholder="Input NIK"
                              name="nik"
                              value={formik.values.nik}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.nik ? 'red' : '' }}
                            />
                            {formik.errors.nik && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.nik}</p>
                            )}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Input
                              type={passwordType ? "text" : "password"}
                              label="Password"
                              placeholder="Input Password"
                              name="password"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.password ? 'red' : '' }}
                            />
                            <div
                              className="absolute top-0 right-0 text-blueGray-400 bg-transparent rounded text-base font-normal block w-8 py-3 px-1 leading-normal cursor-pointer text-center mt-6 mr-2"
                              onClick={() => { setPasswordType(!passwordType) }}>
                              {
                                passwordType ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>
                              }
                            </div>
                            {formik.errors.password && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.password}</p>
                            )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap bg-white">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Input
                              type="text"
                              label="TTL"
                              placeholder="Input Tempat Tanggal Lahir"
                              name="ttl"
                              value={formik.values.ttl}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.ttl ? 'red' : '' }}
                            />
                            {formik.errors.ttl && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.ttl}</p>
                            )}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Input
                              type="text"
                              label="Agama"
                              placeholder="Input Agama"
                              name="agama"
                              value={formik.values.agama}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.agama ? 'red' : '' }}
                            />
                            {formik.errors.agama && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.agama}</p>
                            )}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Option
                              label="Jenis Kelamin"
                              placeholder="Chose Jenis Kelamin"
                              data={["Laki-Laki", "Perempuan"]}
                              name="jenis_kelamin"
                              value={formik.values.jenis_kelamin}
                              onChange={(val) => {
                                formik.handleChange(val)
                              }}
                              onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.jenis_kelamin ? 'red' : '' }}>
                              <option label="Chose Jenis Kelamin" value="default" ></option>
                              {["Laki-Laki", "Perempuan"]?.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                              ))}
                            </Option>
                            {formik.errors.jenis_kelamin && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.jenis_kelamin}</p>
                            )}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Input
                              type="text-area"
                              label="Alamat"
                              placeholder="Input Alamat"
                              name="alamat"
                              value={formik.values.alamat}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.alamat ? 'red' : '', height: 50}}
                            />
                            {formik.errors.alamat && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.alamat}</p>
                            )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap bg-white">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Input
                              type="text"
                              label="Nama Bank"
                              placeholder="Input Nama Bank"
                              name="bank"
                              value={formik.values.bank}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.bank ? 'red' : '' }}
                            />
                            {formik.errors.bank && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.bank}</p>
                            )}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Input
                              type="number"
                              label="Nomor Rekening"
                              placeholder="Input Nomor Rekening"
                              name="norek"
                              value={formik.values.norek}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.norek ? 'red' : '' }}
                            />
                            {formik.errors.norek && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.norek}</p>
                            )}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Input
                              type="number"
                              label="Phone"
                              placeholder="Input Phone Number"
                              name="phone"
                              value={formik.values.phone}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.phone ? 'red' : '' }}
                            />
                            {formik.errors.phone && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.phone}</p>
                            )}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <Input
                              type="text"
                              label="Id Upline/Referal Code"
                              placeholder="Input Referal Code"
                              name="referal"
                              onChange={(e) => debounced(e.target.value)}
                              // onBlur={formik.handleBlur}
                              style={{ borderColor: formik.errors.referal ? 'red' : '' }}
                            />
                            {formik.errors.referal && (
                              <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.referal}</p>
                            )}
                        </div>
                      </div>
                    </div>

                  <div className="relative w-full px-4 mb-4">
                    {
                      refCode?.length > 0 && (
                        <Option
                          label="Position"
                          placeholder="Chose Position"
                          data={["left", "right"]}
                          name="position"
                          value={formik.values.position}
                          onChange={(val) => {
                            formik.handleChange(val)
                            onChcekLocation(val.target.value)
                          }}
                          onBlur={formik.handleBlur}
                          style={{ borderColor: formik.errors.position ? 'red' : '' }}>
                          <option label="Chose Deposite" value="default" ></option>
                          {["left", "right"]?.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                          ))}
                        </Option>
                      )
                    }
                    {formik.errors.position && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.position}</p>
                    )}
                  </div>

                  <div className="relative w-full px-4 mb-4">
                    <Option
                      label="Select Packet Deposit"
                      placeholder="Chose Deposite"
                      name="paket"
                      value={formik.values.paket}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ borderColor: formik.errors.paket ? 'red' : '' }} >
                      <option label="Chose Deposite" value="default" ></option>
                      {
                        fetching ? (
                          <option></option>
                        ) : (data?.length > 0 ? data : []).map((item, index) => (
                          <option key={index} value={item?.id}>{item?.name} Rp {formatMoney(item?.nominal)}</option>
                        ))
                      }
                    </Option>
                    {formik.errors.paket && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.paket}</p>
                    )}
                  </div>

                  <div className="relative w-full mb-4 px-4">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">
                        Payment Methode
                    </label>
                    <div className="flex flex-wrap mb-6">
                      {
                        payment?.map((item,i) => (
                          <div key={i} className="max-w-sm w-full lg:w-3/12 md:w-4/12 sm:w-2/12 px-2 mt-3">
                            <button type="button" onClick={() => setPaymentMethode(item.name)} className={item?.name === paymentMethode ? "border border-red-500 rounded rounded-sm w-full flex " : "border border-blueGray-500 "+"rounded rounded-sm w-full flex"}>
                              {
                                item.image ? (
                                  <img src={item.image} alt={item.name} className="py-3 px-3 h-12"/>
                                ) : (
                                  <div className="flex py-3 px-3 mx-auto">
                                    <p className="text-md text-center font-bold text-gray-300">{item.name.toUpperCase()}</p>
                                  </div>
                                )
                              }
                            </button>
                          </div>
                        ))
                      }
                    </div>
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer py-5">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        value={termConst}
                        onChange={() => {
                          setTermConst(!termConst)
                        }}
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6 px-4">
                    <Button label="Add New Member" isFetching={authData?.register?.fetching} disabled={authData?.register?.fetching} type="submit" />
                  </div>
                  <div className="flex flex-row align-center">
                    <hr className="w-full mt-3 border-b-1 border-blueGray-300" />
                    <p className="text-gray-200 text-sm text-center px-2">or</p>
                    <hr className="w-full mt-3 border-b-1 border-blueGray-300" />
                  </div>
                </form>
                </div>
              </div>
            </div>
        </div>
    )
}

Newmember.layout = Member;