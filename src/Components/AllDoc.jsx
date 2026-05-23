'use client';
import React, { useState, useEffect } from 'react';
import { Filter, X, Search } from 'lucide-react';
import Image from 'next/image';

export default function AllDoc() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch doctors from backend
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:4321/admin-panel");
        
        if (!res.ok) throw new Error("Failed to fetch doctors");
        
        const data = await res.json();
        setDoctors(data);
        setFilteredDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        // Fallback data if API fails
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Real-time filtering
  useEffect(() => {
    let result = [...doctors];

    // Filter by search query
    if (searchQuery) {
      result = result.filter(doctor =>
        doctor.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by specialty
    if (selectedSpecialty !== "All") {
      result = result.filter(doctor => doctor.specialty === selectedSpecialty);
    }

    setFilteredDoctors(result);
  }, [searchQuery, selectedSpecialty, doctors]);

  const specialties = [
    ...new Set(doctors.map(doctor => doctor.specialty))
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
        Browse through the doctors specialist.
      </h2>

      {/* Search Bar */}
      <div className="relative mb-8 max-w-md">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search doctors by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#5F6FFF]"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-24 space-y-2" >
            <button
              onClick={() => setSelectedSpecialty("All")}
              className={`w-full text-left px-5 py-4 rounded-2xl text-[15px] font-medium transition-all
                ${selectedSpecialty === "All" ? 'bg-[#5F6FFF] text-white shadow-md' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              All Specialties
            </button>
            
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`w-full text-left px-5 py-4 rounded-2xl text-[15px] font-medium transition-all
                  ${selectedSpecialty === specialty ? 'bg-[#5F6FFF] text-white shadow-md' : 'hover:bg-gray-100 text-gray-700'}`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 bg-white border border-gray-300 px-5 py-3 rounded-2xl font-medium text-gray-700 hover:bg-gray-50 transition-all"
          >
            <Filter size={20} />
            Filter Specialty
            {selectedSpecialty !== "All" && (
              <span className="text-[#5F6FFF] text-sm ml-1">({selectedSpecialty})</span>
            )}
          </button>
        </div>

        {/* Doctors Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-500">Loading doctors...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id || doctor._id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={doctor.image || ""}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {doctor.available && (
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white px-3 py-1 rounded-full text-sm font-medium shadow">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-700">Available</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-xl text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{doctor.specialty}</p>
                    {doctor.experience && (
                      <p className="text-sm text-gray-500 mt-1">{doctor.experience}</p>
                    )}

                    <button
                      onClick={() => alert(`Opening profile for ${doctor.name}`)}
                      className="mt-5 w-full bg-[#5F6FFF] hover:bg-[#4e5de8] text-white py-3 rounded-2xl font-medium transition-all"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredDoctors.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No doctors found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showFilter && (
        <div className="lg:hidden fixed inset-0 bg-black/60 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl max-h-[85vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h3 className="font-semibold text-lg">Select Specialty</h3>
              <button onClick={() => setShowFilter(false)}>
                <X size={28} className="text-gray-500" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              <button
                onClick={() => { setSelectedSpecialty("All"); setShowFilter(false); }}
                className="w-full text-left px-5 py-4 rounded-2xl text-[16px] font-medium hover:bg-gray-100"
              >
                All Specialties
              </button>
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => {
                    setSelectedSpecialty(specialty);
                    setShowFilter(false);
                  }}
                  className={`w-full text-left px-5 py-4 rounded-2xl text-[16px] font-medium transition-all
                    ${selectedSpecialty === specialty ? 'bg-[#5F6FFF] text-white' : 'hover:bg-gray-100'}`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}