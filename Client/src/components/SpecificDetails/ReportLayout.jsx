import React from "react";
import Map from "./map";
import MapComponent from "./map";


const ReportLayout = ({ data }) => {
  console.log(data.Report.latitude);
  console.log(data.Report.longitude);

  return (
    <div className="bg-gray-100">
      <div className="flex container mx-auto mt-8 py-6">
        <div className="flex-grow">
          <div className=" bg-white p-4 rounded-lg shadow-md  ">
            <div className="flex gap-12">
              <div className="w-1/2">
                <h1 className="text-xl  font-semibold mb-2 py-4">
                  Source Image:
                </h1>

                <img
                  src={data.Report.image}
                  alt="Product Image"
                  className="object-cover w-full h-1/2 rounded-lg"
                  style={{ height: "480px" }}
                />

              </div>
              <div className="flex-grow">
                <h1 className="text-xl  font-semibold mb-2 py-4">Information:</h1>

                <div className="flex gap-4">
                  <div>
                    <span className=" text-gray-700">Reported By:</span>
                  </div>
                  <div>
                    <h2 className="text-xl text-green-900 font-semibold mb-2">
                      {data.Report.displayName}
                    </h2>
                  </div>
                </div>

                <div className="flex gap-4 py-4">
                  <div>
                    <span className=" text-gray-700 ">Location:</span>
                  </div>
                  <div>
                    <p className="text-indigo mb-2  font-medium">
                      {" "}
                      {data.Report.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 py-4">
                  <div>
                    <span className=" text-gray-700 ">Date and Time:</span>
                  </div>
                  <div>
                    <p className="text-gray-900 mb-2 font-medium ">
                      {data.Report.date} {data.Report.time}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 py-4">
                  <div>
                    <span className=" text-gray-700 ">Description: </span>
                  </div>
                  <div>
                    <p className="text-black font-bold">{data.Report.text}</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex-col justify-center">
              <div>
                <h1 className="text-xl  font-semibold mb-2 py-4">
                  Coordinates:
                </h1>
              </div>
              <MapComponent lat={data.Report.latitude} long={data.Report.longitude} zoom={30} />
              <div>

              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
};

export default ReportLayout;
