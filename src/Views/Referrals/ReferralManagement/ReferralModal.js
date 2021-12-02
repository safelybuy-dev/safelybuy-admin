import React, { useEffect, useState } from "react";
import {UserAvatar} from 'svg'
import { CloseIcon } from "svg";
import { getReferral } from "api/shopping";

const ReferralModal = ({ viewModal, setViewModal, refererId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!refererId) {
      setLoading(true);
    } else {
      getReferral(
        (res) => {
          setData(res.data.user);
        },
        (err) => {
          console.log(err);
        },
        refererId
      );
    }
  }, [refererId]);

  if (!viewModal) return null;
  return (
    <div
      onClick={() => setViewModal(null)}
      className="fixed overflow-scroll top-0 left-0 z-50 w-screen md:pt-0 md:px-0 h-screen bg-purple-600 bg-opacity-30 flex items-center justify-center"
    >
      <div className="flex flex-col relative rounded-3xl w-auto md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100 h-screen mt-16">
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-3xl">Customer Information</h3>
          <span
            onClick={() => setViewModal(null)}
            className="inline-block cursor-pointer rounded-full bg-red-500 p-3"
          >
            <CloseIcon color="white" />
          </span>
        </div>
        <div className="w-full h-full flex">
          <div className="pr-10 border-r-2">
            <div>
              <div className="flex w-full mr-4 md:mr-0 md:flex-col">
                <div className="w-32 md:w-24 rounded-xl h-32 md:h-24 mr-6 ">
                  <UserAvatar scale={5} />
                  
                </div>
                <div className="flex flex-col mt-8 md:w-full">
                  <h2 className="text-xl  font-medium">
                    {data.firstname + " " + data.lastname}
                  </h2>
                  <span className="text-purple-500 text-sm">{data.email}</span>
                </div>
              </div>
              <div className="mt-10">
                <span className="text-gray-400 text-sm">Referral Code</span>
                <h2 className="font-medium text-lg">{data.referral_code}</h2>
              </div>
            </div>
            <div className="w-auto mt-8 border-t-2">
              <div className="mt-4 flex flex-row justify-between">
                <div>
                  <span className="font-light text-gray-400">Phone number</span>
                  <h3 className="font-medium text-lg">{data.phone}</h3>
                </div>
                <div className="">
                  <span className="font-light text-gray-400">
                    Date of Birth
                  </span>
                  <h3 className="font-medium text-lg">
                    {data.dob ? data.dob : "--/--/--"}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full pl-8">
            <div className="w-96">
              <div className="w-full">
                <div>
                  <h1 className="text-2xl font-medium text-purple-500">
                    Bank Details
                  </h1>
                </div>
                { data.banks && data.banks.length  ?
                (<>
                <div className="w-full mt-4 flex flex-row justify-between">
                  <div>
                    <span className="text-gray-400 text-sm">Account Name</span>
                    <h3 className="font-medium text-lg">{data.banks[0]?.account_name}</h3>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">
                      Account Number
                    </span>
                    <h3 className="font-medium text-lg">{data.banks[0]?.account_number}</h3>
                  </div>
                </div>
                <div className="mt-8 pb-4">
                  <span className="text-gray-400 text-sm">Bank Name</span>
                  <h3 className="font-medium text-lg">{data.banks[0].bank.bank_name}</h3>
                </div>
              </>)
              : (
                <div className="justify-items-center align-middle mt-20 mb-10 text-xl">
                    <h1 className="text-center">No available Bank details for this user</h1>
                </div>
              )  
            }

              </div>
              <div>
                <div className="pt-2 border-t-2">
                  <div>
                    <h1 className="text-2xl font-medium text-purple-500">
                      Address Information
                    </h1>
                  </div>
                  <div>
                    {
                    data.address && data.address.length ?
                   <> 
                  <div className="w-96">
                    <div>
                      <h2 className="text-lg mb- font-medium">Address 1</h2>
                    </div>
                    <div className="flex flex-row w-96 justify-between">
                      <div>
                        <span className="text-gray-400 text-sm">
                          Contact Name
                        </span>
                        <h3 className="font-medium text-lg">
                        {data.firstname + " " + data.lastname}
                        </h3>
                      </div>
                      <div className="w-40">
                        <span className="text-gray-400 text-sm ">Address</span>
                        <h3 className="font-medium text-lg">
                        {`${data.address[0].street} ${data.address[0].city} ${data.address[0].state} ${data.address[0].country}`}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-gray-400 text-sm ">
                        Phone Number
                      </span>
                      <h3 className="font-medium text-lg">
                        {data.phone}
                      </h3>
                    </div>
                  </div>
                  <div className="w-96 mt-4">
                    <div>
                      <h2 className="text-lg mb-2 font-medium border-t-2">Address 2</h2>
                    </div>
                    <div className="flex flex-row w-96 justify-between">
                      <div>
                        <span className="text-gray-400 text-sm">
                          Contact Name
                        </span>
                        <h3 className="font-medium text-lg">
                        {data.firstname + " " + data.lastname}
                        </h3>
                      </div>
                      <div className="w-40">
                        <span className="text-gray-400 text-sm">Address</span>
                        <h3 className="font-medium text-lg">
                        {`${data.address[1].street} ${data.address[1].city} ${data.address[1].state} ${data.address[1].country}`}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-8">
                      <span className="text-gray-400 text-sm ">
                        Phone Number
                      </span>
                      <h3 className="font-medium text-lg">
                        {data.phone}
                      </h3>
                    </div>
                  </div>
                  </>
                  : (
                    <div className="justify-items-center align-middle mt-28">
                      <h1 className="text-center text-2xl">No Address information</h1>
                    </div>
                  )
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralModal;
