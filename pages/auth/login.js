import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useFormik } from 'formik';
import * as yup from 'yup';

// layout for page

import Auth from "layouts/Auth.js";
import Button from "components/Atoms/Button/Button";
import Navbar from "components/Navbars/AuthNavbar";
import Input from "components/Atoms/Input/Input";
import { AuthActions } from "store/redux/authReducer";

export default function Login() {
  const alert = useAlert()
  const router = useRouter()
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState(false)
  const auth = useSelector(state => state.authReducer);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: value => {
      const { email, password } = value
      dispatch(AuthActions.doLoginRequest({
        data: {
          email: email,
          password: password
        },
        message: (msg) => alert.success(msg),
        error: (msg) => alert.error(msg),
        navigate: () => {
          router.push("/admin/dashboard")
        }
      }))
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      password: yup.string().required('Password is required')
    }),
  });

  return (
    <>
    <Navbar transparent />
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign
                  </h6>
                </div>
                {/* <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/github.svg" />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                    Google
                  </button>
                </div> */}
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form onSubmit={formik.handleSubmit}>
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
                      type={passwordType ? "text" : "password"} 
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
                      onClick={() => { setPasswordType(!passwordType) }}>
                        {
                          passwordType ? <i className="fas fa-eye-slash"></i> :  <i className="fas fa-eye"></i>
                        }
                    </div>
                    { formik.errors.password && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.password}</p>
                    )}
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <Button label="Login" type="submit" disabled={auth?.login?.fetching} isFetching={auth?.login?.fetching} />
                  </div>
                  <div className="flex flex-row align-center">
                    <hr className="w-full mt-3 border-b-1 border-blueGray-300" />
                    <p className="text-gray-200 text-sm text-center px-2">or</p>
                    <hr className="w-full mt-3 border-b-1 border-blueGray-300" />
                  </div>
                  <div className="text-center mt-2">
                    <Button label="Register" onClick={(e)=> { 
                      e.preventDefault()
                      router.push('/auth/register')
                     }} />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#log"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register" className="text-blueGray-200">
                  Create new account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
