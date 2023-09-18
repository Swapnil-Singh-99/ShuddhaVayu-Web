import React, { useContext, useState, useEffect, useCallback } from "react";
import UserContext from "../../ContextApi/User";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import ReportLayout from "./ReportLayout";

const Report = () => {
  const UserCtx = useContext(UserContext);
  const id = UserCtx.value;

  console.log(id);

  const [Report, SetReport] = useState({});

  
;

useEffect(() => {
  const FetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "UserReports"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      newData.sort((a, b) => a.value - b.value);
      console.log(newData)
      newData.map((report) => {
        if (report.id == id) {
          SetReport(report);
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  FetchData();
},[]);

console.log()

return (
  <>

   <ReportLayout 
    name={Report && Report.user.displayName}
    text={Report && Report.text}
     address={Report && Report.address}
     date_time={Report && Report.date_time}
     image={Report && Report.image}
     ReportId={Report && Report.value}
     lat={Report && Report.latitude}
     long={Report && Report.longitude}
     />
  </>
);
}

export default Report;
