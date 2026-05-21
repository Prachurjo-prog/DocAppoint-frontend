

import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoctorPage = async () => {
  const res = await fetch("http://localhost:4321/admin-panel");
  const doctorData = await res.json();
  console.log(doctorData);

  return (
    <div className="p-4 container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  py-10 ">
        {doctorData.map((doctor) => (
          <Link href={`/all-doctors/${doctor.id}`} key={doctor._id}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              {/* Image Container */}
              <div className="relative h-80 bg-linear-to-br from-purple-50 to-blue-50 flex items-center justify-center overflow-hidden">
                <Image
                  width={200}
                  height={100}
                  src={doctor.image}
                  alt="sfg"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Availability Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700">Available</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-xl text-gray-900 mb-1">
                  {doctor.doctor}
                </h3>
                <p className="text-gray-600 text-[15px]">{doctor.speciality}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DoctorPage;
