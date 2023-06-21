"use client";

const Home = () => {
  const handleClick = (params: string) => {
    console.log("params", params);
  };
  return (
    <div>
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
        </div>
        <div className="w-5/6 bg-slate-100"></div>
      </div>
    </div>
  );
};

export default Home;
