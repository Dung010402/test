import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  const [userValue, setUserValue] = useState();
  console.log(id);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/` + id)
      .then((res) => res.json())
      .then((res) => setUserValue(res));
  }, [id, setUserValue]);

  return (
    <div>
      {userValue ? (
        <div className="flex flex-row justify-around bg-gray-300 py-20 mx-20">
          <div className="">
            <img
              className="w-full"
              src={userValue.image}
              alt="{userValue.firstName}"
            />
            <p className=" text-center mt-8 text-gray-700 font-medium">
              Name: {userValue.firstName} {userValue.lastName}
            </p>
          </div>
          <div className="flex justify-between ">
            <div className="flex flex-col justify-between mr-6 text-gray-700 font-medium">
              <div>Age:</div>
              <div>Email:</div>
              <div>Address:</div>

              <div>Card Number:</div>
              <div>Card Type:</div>
              <div>Card Expire:</div>

              <div>Company Name:</div>
              <div>Company Address:</div>
              <div>Department:</div>
            </div>
            <div className="flex flex-col justify-between">
              <div>{userValue.age}</div>
              <div>{userValue.email}</div>
              <div>
                {userValue.address.address} {userValue.address.city}
              </div>
              <div>{userValue.bank.cardNumber}</div>
              <div>{userValue.bank.cardType}</div>
              <div>{userValue.bank.cardExpire}</div>
              <div>{userValue.company.name}</div>
              <div>{userValue.company.address.address}</div>
              <div>{userValue.company.department}</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default User;
