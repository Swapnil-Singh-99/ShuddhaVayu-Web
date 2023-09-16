import React, { useState, useEffect, useContext, useCallback } from "react";
import UserItem from "./Usersitem";



const DisplayReports = () => {
  const [LoadedReports, SetLoadedReports] = useState();
  

  useEffect(() => {
    main();
  }, []);

   const fetchData = useCallback(async ()=> {
    try {
      const response = await fetch(
        "https://shuddhavayu-default-rtdb.firebaseio.com/DisplayReport.json"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },[]) 

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const main = async () => {
    const dataArray = await fetchData();
    SetLoadedReports(await dataArray);
  };


  return (
    <>
      <div className="bg-cover"  >
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-900 text-white">
            Reports
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10  sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 transition ease-in duration-300">
            {LoadedReports &&
              LoadedReports.map((data) => (
             <UserItem id={data.id}  name={data.name} value={data.value} date_time={data.date_time} location={data.location}/>
              ))}
              
          </div>
        </div>
      </div>
    </>
  );
};
export default DisplayReports;
