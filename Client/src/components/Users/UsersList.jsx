// import Navbar from "../navbar/navbar"
// import LoginPage from "../loginPage/loginPage"
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import React, { useState, useEffect } from 'react'
import bodyParser from "body-parser";


// const HomePage = () => {
//   const [data, setData] = useState()
//   const readData = async () => {
//     await getDocs(collection(db, "Users"))
//       .then((querySnapshot) => {
//         // console.log(querySnapshot);
//         const newData = querySnapshot.docs
//           .map((doc) => ({ ...doc.data(), id: doc.id }));
//         // setTodos(newData);
//         return newData
//       })
//       .then((newData) => {
//         console.log(newData);
//         // setData(newData)
//       })

//   }
// useEffect(() => {
//   getDocs(collection(db, "Users"))
//     .then((querySnapshot) => {
//       // console.log(querySnapshot);
//       const newData = querySnapshot.docs
//         .map((doc) => ({ ...doc.data(), id: doc.id }));
//       // setTodos(newData);
//       return newData
//     })
//     .then((newData) => {
//       console.log(newData);
//       setData(newData)
//     })
// }, [])
// // readData();
const HomePage = () => {
  const readData = async () => {

    await getDocs(collection(db, "Users"))
      .then((querySnapshot) => {
        // console.log(querySnapshot);
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        // setTodos(newData);
        return newData
      })
      .then((newData) => {
        console.log(newData);
      })

  }
  readData();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from Firestore
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "DisplayReport"));
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        // Sort newData based on the 'value' property in ascending order
        newData.sort((a, b) => a.value - b.value);

        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);


  return (
    <>

    

<tbody style={{border: '1px solid black'}}> 
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.value}</td>
                        <td>{item.date_time}</td>
                        <td>{item.name}</td>
                        {/* <td className='description'>{item.description}</td> */}
                        <td>{item.location}</td>
                        {/* <td><img src={item.attachment} alt="" /></td> */}
                    </tr>
                ))}
            </tbody>
    </>
  )
}

export default HomePage



