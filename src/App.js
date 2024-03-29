import { useState, useEffect } from "react";

export default function App() {
  // ** States
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  // Fecth User Details
  const fetchUserDetails = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const data = await response.json();
      setUserInfo(data?.results[0]);
      // Ï      console.log("Data Fetched Succussfull");
    } catch (error) {
      console.error(error);
      // ** Navigate or Redirect to Error Page
      alert("Please Refresh the pageÏ");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (!userInfo) return <div>Loading....</div>;
  console.log(userInfo);

  return (
    <div className="flex justify-center items-center  w-100 min-h-screen ">
      <div
        className=" border-solid border-2 border-indigo-600 bg-slate-600 shadow-md rounded-md flex items-center pl-8 pr-8 "
        style={{ minHeight: "300px", minWidth: "300px", maxWidth: "700px" }}
      >
        <div className="border-solid border-2 p-7 bg-slate-300 rounded-2xl border-indigo-600 grid grid-cols-10 gap-4 h-full">
          <div className="col-start-1 col-span-3  ">
            {/* Content of the first div */}
            <div
              className="w-300 h-300 rounded-full overflow-hidden"
              style={{ width: "175px", height: "175px" }}
            >
              <img
                className="p-4 border-solid border-teal-600 shadow-xl  "
                src={userInfo.picture?.large}
                alt="Profile Picture"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
          <div className="col-start-4 flex items-center col-span-7">
            {/* Content of the second div */}
            <ul>
              <li className="flex">
                <span
                  className="text font-semibold text-xl "
                  style={{ width: "80px", display: "inline-block" }}
                >
                  Name
                </span>
                <span className="text-base">{`${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`}</span>
              </li>
              <li className="flex">
                <span
                  className="text font-semibold text-xl "
                  style={{ width: "80px", display: "inline-block" }}
                >
                  Email
                </span>
                <span className="text-base">{`${userInfo.email}`}</span>
              </li>
              <li className="flex">
                <span
                  className="text font-semibold text-xl "
                  style={{ width: "80px", display: "inline-block" }}
                >
                  Phone
                </span>
                <span className="text-base">{`${userInfo.phone}`}</span>
              </li>
              <li className="flex">
                <span
                  className="text font-semibold text-xl "
                  style={{ width: "80px", display: "inline-block" }}
                >
                  Gender
                </span>
                <span className="text-base">{`${userInfo.gender}`}</span>
              </li>
              <li className="flex">
                <span
                  className="text font-semibold text-xl "
                  style={{ width: "80px", display: "inline-block" }}
                >
                  Age
                </span>
                <span className="text-base">{`${userInfo.dob.age}`}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
{
  "gender": "female",
  "name": {
      "title": "Miss",
      "first": "Laura",
      "last": "Woods"
  },
  "location": {
      "street": {
          "number": 2479,
          "name": "Henry Street"
      },
      "city": "Blessington",
      "state": "Wexford",
      "country": "Ireland",
      "postcode": 78276,
      "coordinates": {
          "latitude": "2.0565",
          "longitude": "95.2422"
      },
      "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
      }
  },
  "email": "laura.woods@example.com",
  "login": {
      "uuid": "9f07341f-c7e6-45b7-bab0-af6de5a4582d",
      "username": "angryostrich988",
      "password": "racers",
      "salt": "B5ywSDUM",
      "md5": "2eefb6307df2a5fb1f91c6b968dc905b",
      "sha1": "33cbf1e97a31e14c87fb18c481d1f6d958c76cbd",
      "sha256": "83e0c89668c8b6131df0c70fc4bb9abb8831e0ff97a0a29cdfa3949dd5afd491"
  },
  "dob": {
      "date": "1967-07-23T09:18:33.666Z",
      "age": 56
  },
  "registered": {
      "date": "2018-10-18T04:05:51.990Z",
      "age": 5
  },
  "phone": "031-623-5189",
  "cell": "081-807-8083",
  "id": {
      "name": "PPS",
      "value": "1101776T"
  },
  "picture": {
      "large": "https://randomuser.me/api/portraits/women/88.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
  },
  "nat": "IE"
}
*/
