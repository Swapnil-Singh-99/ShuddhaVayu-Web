import React from "react";

const ReportLayout = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-gray-100">
      <div className="flex container mx-auto mt-8">
        <div className="flex-grow">
          <div className="flex bg-white p-4 rounded-lg shadow-md gap-12">
            <div className="w-1/2">
              <img
                src={data.Report.image}
                alt="Product Image"
                className="object-cover w-full h-1/2 rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-semibold mb-2">{data.Report.displayName}</h2>
              <p className="text-gray-600 mb-2">{data.Report.address}</p>
              <p className="text-gray-600 mb-2">Date & Time: 2023-09-22 08:40:00</p>
              <p className="text-gray-700">{data.Report.text}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportLayout



