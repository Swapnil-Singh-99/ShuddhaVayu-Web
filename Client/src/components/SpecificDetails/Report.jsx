import React , {useContext,useState , useEffect ,useCallback} from "react"
import UserContext from "../../ContextApi/User"

const Report = ()=>{

  const UserCtx = useContext(UserContext);
   const id =    UserCtx.value;
    
   const [Report, SetReport] = useState({});
    

  // useEffect(() => {
  //   main();
  // }, []);

  // async function fetchData() {
    
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(async() => {
  //       try {
  //         const response = await fetch("https://shuddhavayu-default-rtdb.firebaseio.com/UserReports/"+id+".json");
  //         const data = await response.json();
  //         resolve(data);
  //       } catch (error) {
  //         reject(error)
  //         console.error("Error fetching data:", error);
  //       }
  //     }, 1000);
  //   })
   
  // }

  

  // const main = async () => {
  //   const dataArray = await fetchData();
  //   SetReport(dataArray);
  // }

   
  const FetchData = async ()=>{
    const response = await fetch('https://shuddhavayu-default-rtdb.firebaseio.com/UserReports/'+id+'.json')
      SetReport(await response.json()) 

  }
  
  useEffect(()=>{
    FetchData();
  })
  









    return(
        <>
       <div class="flex p-4">
  <div class="w-1/2 p-4">
    <h2 class="text-2xl font-semibold mb-2">{Report && Report.name}</h2>
    <p class="text-gray-600">{Report && Report.text}</p>
    <p class="text-gray-800 mt-4">{Report && Report.location}</p>
    <p class="text-gray-800">{Report && Report.date_time}</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
  </div>

  <div class="w-1/2">
    <img src={Report && Report.image} alt="Product Image" class="object-cover w-full h-full rounded-lg" />
  </div>
</div>

        

        </>
        
    )
}

export default Report