"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [donor, setDonor] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    mobile: "",
  });
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    const response = await fetch("/api/donor");
    const donorsData = await response.json();
    setDonors(donorsData);
  };

  const handleClick = (params: string) => {
    console.log("params", params);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/donor/new", {
        method: "POST",
        body: JSON.stringify({
          name: donor.name,
          age: donor.age,
          bloodGroup: donor.bloodGroup,
          mobile: donor.mobile,
        }),
      });
      const responseData = await response.json();
      fetchDonors();
    } catch (error) {
      console.log("Donor add Error", error);
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col w-1/6 bg-blue-500 h-screen">
        <button
          className="m-2 w-52 bg-slate-600 px-4 py-2 hover:bg-slate-400 text-white text-sm"
          onClick={() => handleClick("get")}
        >
          GET-Method
        </button>
        <button
          className="m-2 w-52 bg-slate-600 px-4 py-2  hover:bg-slate-400 text-white text-sm"
          onClick={() => handleClick("post")}
        >
          POST-Method
        </button>
        <button
          className="m-2 w-52 bg-slate-600 px-4 py-2  hover:bg-slate-400 text-white text-sm"
          onClick={() => handleClick("get_all")}
        >
          GET-ALL-Method
        </button>
        <button
          className="m-2 w-52 bg-slate-600 px-4 py-2  hover:bg-slate-400 text-white text-sm"
          onClick={() => handleClick("get_by_id")}
        >
          GET-BY-ID-Method
        </button>
        <button
          className="m-2 w-52 bg-slate-600 px-4 py-2  hover:bg-slate-400 text-white text-sm"
          onClick={() => handleClick("add")}
        >
          ADD-DONORS
        </button>
      </div>
      <div className="w-5/6 bg-slate-100">
        <div className="flex">
          <div className="m-7">
            <form onSubmit={handleSubmit}>
              <label>
                <span className="text-gray-700">Name</span>
                <input
                  value={donor.name}
                  onChange={(e) => setDonor({ ...donor, name: e.target.value })}
                  type="text"
                  placeholder="Enter name"
                  required
                  className="form_input"
                />
              </label>
              <label>
                <span className="text-gray-700">Mobile</span>
                <input
                  value={donor.mobile}
                  onChange={(e) =>
                    setDonor({ ...donor, mobile: e.target.value })
                  }
                  type="number"
                  placeholder="Enter age"
                  required
                  className="form_input"
                />
              </label>
              <label>
                <span className="text-gray-700">Age</span>
                <input
                  value={donor.age}
                  onChange={(e) => setDonor({ ...donor, age: e.target.value })}
                  type="number"
                  placeholder="Enter age"
                  required
                  className="form_input"
                />
              </label>
              <label>
                <span className="text-gray-700">Blood Group</span>
                <input
                  value={donor.bloodGroup}
                  onChange={(e) =>
                    setDonor({ ...donor, bloodGroup: e.target.value })
                  }
                  type="text"
                  placeholder="Enter blood group"
                  required
                  className="form_input"
                />
              </label>
              <div>
                <button
                  type="submit"
                  className="m-2 w-52 bg-slate-600 px-4 py-2  hover:bg-slate-400 text-white text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="m-7 flex flex-row">
            {donors.length !== 0 ? (
              donors.map((donor: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="w-50 m-5 max-w-sm rounded overflow-hidden shadow-lg h-48"
                  >
                    <div className="px-6 py-4 ">
                      <p className="font-bold text-xl mb-2">{donor.name}</p>
                      <p className="font-bold text-xl mb-2">{donor.age}</p>
                      <p className="font-bold text-xl mb-2">{donor.mobile}</p>
                      <p className="font-bold text-xl mb-2">
                        {donor.bloodGroup}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <p className="font-bold text-xl mb-2">Donors not Available</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
