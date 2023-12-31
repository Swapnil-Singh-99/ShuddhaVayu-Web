import React, { useState, useEffect, useContext, useCallback } from "react";
import UserItem from "./Usersitem";

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';



const DisplayReports = () => {
  const [LoadedReports, SetLoadedReports] = useState();

  useEffect(() => {
    main();
  }, []);

  async function fetchData() {
    try {
      const querySnapshot = await getDocs(collection(db, "UserReports"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      newData.sort(function (a, b) {
        return b.time.localeCompare(a.time);
      });
      return newData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const main = async () => {
    const dataArray = await fetchData();
    SetLoadedReports(await dataArray);
  };
  return (
    <>

      <section class="container mx-auto p-6 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-black-900 bg-gray-100 uppercase border-b border-gray-600">
                  {/* <th class="px-4 py-3">ID</th> */}
                  <th class="px-4 py-3">Name</th>
                  <th class="px-4 py-3">location</th>
                  <th class="px-4 py-3">Date and Time</th>
                  <th class="px-4 py-3">Details</th>

                </tr>
              </thead>
              <tbody class="bg-white">

                {LoadedReports &&
                  LoadedReports.map((data) => (
                    <UserItem key={data.id} id={data.value} name={data.user.displayName} Pimage={data.user.imageUrl} value={data.id} date={data.date} time={data.time} address={data.address} />
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default DisplayReports;


