import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ProfileActions } from "../../store/redux/profileReducer";

// components
import Button from "components/Atoms/Button/Button";
import Input from "components/Atoms/Input/Input";

export default function CardSettings() {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState('')

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      // avatar: '',
      address: '',
      city: '',
      postal_code: '',
      country: ''
    },
    onSubmit: value => {
      const {  
        name,
        email,
        phone,
        address,
        city,
        postal_code,
        country
      } = value

      const images = {
        name: avatar.files[0]?.name,
        type: avatar.files[0]?.type,
        uri: avatar.value,
      }
      const data = new FormData();
      data.append("name",name)
      data.append("email",email)
      data.append("phone",phone)
      data.append("avatar",images);
      data.append("address",address)
      data.append("postal_code",postal_code)
      data.append("city",city)
      data.append("country",country)

      dispatch(ProfileActions.doUpdateProfileRequest(data))
    },
    validationSchema: yup.object({
      name: yup.string().required("Name/Username is required"),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      phone: yup.number().required('Phone is Required'),
      // avatar: '',
      address: yup.string().required('Address is required'),
      city: yup.string().required('City is required'),
      postal_code: yup.number().required('Postal Code is required'),
      country: yup.string().required('Country is required'),
    }),
  });

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <Input 
                      type="text" 
                      label="Name/Username" 
                      placeholder="Input Name" 
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{borderColor: formik.errors.name ? 'red' : ''}}
                    />
                    { formik.errors.name && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.name}</p>
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
                      style={{borderColor: formik.errors.email ? 'red' : ''}}
                    />
                    { formik.errors.email && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.email}</p>
                    )}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                    <Input 
                      type="number" 
                      label="Phone" 
                      placeholder="Input Phone" 
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
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                    <Input 
                      type="file" 
                      label="Avatar" 
                      placeholder="Input Avatar" 
                      name="avatar"
                      onChange={e => {
                        setAvatar(e.target)
                      }}
                      // onBlur={formik.handleBlur}
                      // style={{borderColor: formik.errors.avatar ? 'red' : ''}}
                    />
                    {/* { formik.errors.avatar && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.avatar}</p>
                    )} */}
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                    <Input 
                      type="text" 
                      label="Address" 
                      placeholder="Input Address" 
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{borderColor: formik.errors.address ? 'red' : ''}}
                    />
                    { formik.errors.address && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.address}</p>
                    )}
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                    <Input 
                      type="text" 
                      label="City" 
                      placeholder="Input City" 
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{borderColor: formik.errors.city ? 'red' : ''}}
                    />
                    { formik.errors.city && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.city}</p>
                    )}
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                    <Input 
                      type="number" 
                      label="Postal Code" 
                      placeholder="Input Postal code" 
                      name="postal_code"
                      value={formik.values.postal_code}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{borderColor: formik.errors.postal_code ? 'red' : ''}}
                    />
                    { formik.errors.postal_code && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.postal_code}</p>
                    )}
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                    <Input 
                      type="text" 
                      label="Country" 
                      placeholder="Input Country" 
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{borderColor: formik.errors.country ? 'red' : ''}}
                    />
                    { formik.errors.country && (
                      <p className="mt-2 text-sm text-red-600 text-red-500">{formik.errors.country}</p>
                    )}
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4 mt-6">
                <Button label="Update Profile" type="submit" disabled={false} isFetching={false} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
