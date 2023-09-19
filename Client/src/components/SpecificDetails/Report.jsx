import React, { useContext, useState, useEffect, useCallback } from "react";
import UserContext from "../../ContextApi/User";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import ReportLayout from "./ReportLayout";

const Report = () => {
  const UserCtx = useContext(UserContext);
  const id = UserCtx.value;
  const [Report, SetReport] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "UserReports"));
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        newData.sort((a, b) => a.value - b.value);
        newData.map((report) => {
          if (report.id == id) {
            // console.log(report);
            let ReportData_ = {
              "displayName": report.user.displayName,
              "imageUrl": report.user.imageUrl,
              "text": report.text,
              "latitude": report.latitude,
              "longitude": report.longitude,
              "image": report.image,
              "address": report.address,
              "date": report.date,
              "time": report.time
            }
            // console.log(ReportData_);
            SetReport(ReportData_);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FetchData();
  }, []);
  return (
    <>
      <ReportLayout data={{Report}} />
    </>
  );
}

export default Report;
