import Navbar from "../navbar/navbar"
import LoginPage from "../loginPage/loginPage"

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
    return (
        <>
           <HomePage/>
        </>
    )
}

export default HomePage