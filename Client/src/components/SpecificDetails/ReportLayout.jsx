
const ReportLayout = (props)=>{

  
  console.log(props.image)



    return(
<div className="bg-gray-100">
    <div className="flex container mx-auto mt-8">        
        <div className="flex-grow">
            <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-1/2">
          <img
            src={props.image}
            alt="Product Image"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
                <p className="text-gray-600 mb-2">{props.address}</p>
                <p className="text-gray-600 mb-2">Date & Time: 2023-09-22 08:40:00</p>
                <p className="text-gray-700">{props.text}</p>
        </div>
              
            </div>
    </div>
</div>
</div>

    )
}

export default ReportLayout



  