
const ReportLayout = (props)=>{

  




    return(
        <div class="flex p-4">
        <div class="w-1/2 p-4">
          <h2 class="text-2xl font-semibold mb-2">{props.name}</h2>
          <p class="text-gray-600">{props.text}</p>
          <p class="text-gray-800 mt-4">{props.location}</p>
          <p class="text-gray-800">{props.date_time}</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Add to Cart
          </button>
        </div>
  
        <div class="w-1/2">
          <img
            src={props.image}
            alt="Product Image"
            class="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>

    )
}

export default ReportLayout


