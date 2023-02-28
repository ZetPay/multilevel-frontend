import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { PaymentActions } from "../../store/redux/paymentReducer";
import { useDebouncedCallback } from 'use-debounce';
import { useFormik } from 'formik';
import * as yup from 'yup';

// layout for page
import Auth from "layouts/Auth.js";
import Button from "components/Atoms/Button/Button";
import Input from "components/Atoms/Input/Input";
import Option from "components/Atoms/Option/Option";
import { formatMoney } from "helper/numberFormat";
import { AuthActions } from "store/redux/authReducer";

export default function Register() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [refCode, setRefCode] = useState('')
  const selector = useSelector(state => state.paymentReducer.deposit_list);
  const auth = useSelector(state => state.authReducer);

  useEffect(()=>{
    dispatch(PaymentActions.doGetDepositListRequest());
  },[])

  const debounced = useDebouncedCallback((value) => {
    setRefCode(value)
    dispatch(AuthActions.doCheckRefRequest({
      reff_code: value
    }))
  },1000);


  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      phone: '',
      referal: '',
      position: '',
      paket: ''
    },
    onSubmit: value => {
      const { email, username, password, phone, position, paket } = value
      dispatch(AuthActions.doRegisterRequest({
        name: username,
        email: email,
        password: password,
        reff_code: auth?.ref?.data?.status === "success" ? refCode : "",
        position: position,
        deposit_id: paket,
        phone: phone
      }))
    },
    validationSchema: yup.object({
      username: yup.string().required('Username is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      password: yup.string().required('Password is required'),
      phone: yup.number().required('Phone is required'),
      referal: yup.string(),
      position: yup.string(),
      paket: yup.string(),
    }),
  });

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign Up
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="relative w-full mb-3">
                    <Input 
                      type="text" 
                      label="Username" 
                      placeholder="Input username" 
                      name="username"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{borderColor: formik.errors.username ? 'red' : ''}}
                    />
                    { formik.errors.username && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.username}</p>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <Input 
                      type="email" 
                      label="Email" 
                      placeholder="Input Email" 
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{borderColor: formik.errors.email ? 'red' : ''}}
                    />
                    { formik.errors.email && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.email}</p>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <Input 
                      type="password" 
                      label="Password" 
                      placeholder="Input Password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{borderColor: formik.errors.password ? 'red' : ''}}
                    />
                    <div
                      className="absolute top-0 right-0 text-blueGray-400 bg-transparent rounded text-base font-normal block w-8 py-3 px-1 leading-normal cursor-pointer text-center mt-6 mr-2"
                      onClick={() => {  }}>
                        <i className="fas fa-eye"></i>
                    </div>
                    { formik.errors.password && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.password}</p>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <Input 
                      type="number" 
                      label="Phone" 
                      placeholder="Input Phone Number"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{borderColor: formik.errors.phone ? 'red' : ''}} 
                    />
                    { formik.errors.phone && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.phone}</p>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <Input 
                      type="text" 
                      label="Referal Code" 
                      placeholder="Input Referal Code"
                      name="referal"
                      onChange={(e) => debounced(e.target.value)}
                      // onBlur={formik.handleBlur}
                      style={{borderColor: formik.errors.referal ? 'red' : ''}} 
                    />
                    { formik.errors.referal && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.referal}</p>
                    )}
                  </div>

                  <div className="relative w-full mb-4">
                    {
                      auth?.ref?.data?.status === "success" && (
                        <Option 
                          label="Position" 
                          placeholder="Chose Position" 
                          data={["Kiri","Kanan"]}
                          name="position"
                          value={formik.values.position}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{borderColor: formik.errors.position ? 'red' : ''}}>
                          <option label="Chose Deposite" value="default" ></option>
                          {["Kiri","Kanan"]?.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                          ))}
                        </Option>
                      )
                    }
                    { formik.errors.position && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.position}</p>
                    )}
                  </div>

                  <div className="relative w-full mb-4">
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
                        selector?.fetching ? (
                          <option></option>
                        ) : selector?.data?.map((item, index) => (
                          <option key={index} value={item?.id}>Rp {formatMoney(item?.nominal)}</option>
                        ))
                      }
                    </Option>
                    { formik.errors.paket && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.paket}</p>
                    )}
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer py-5">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
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

                  <div className="text-center mt-6">
                    <Button label="Register" isFetching={auth?.register?.fetching} type="submit"  />
                  </div>
                  <div className="flex flex-row align-center">
                    <hr className="w-full mt-3 border-b-1 border-blueGray-300" />
                    <p className="text-gray-200 text-sm text-center px-2">or</p>
                    <hr className="w-full mt-3 border-b-1 border-blueGray-300" />
                  </div>
                  <div className="text-center mt-2">
                    <Button label="Login" type="URL" href="/auth/login"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Register.layout = Auth;
