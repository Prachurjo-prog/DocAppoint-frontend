"use client";

export default function DoctorForm() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const doctorFormData = Object.fromEntries(formData.entries());
    console.log(doctorFormData);

    const res = await fetch("http://localhost:4321/admin-panel", {
      method: "POST",
      headers:{
        'content-type' : 'application/json' 
      },
      body: JSON.stringify(doctorFormData)
    })
    const data = await res.json()
    console.log(data)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#5F6FFF] text-white px-6 py-5">
          <h1 className="text-2xl md:text-3xl font-bold">
            Doctor Information Form
          </h1>
          <p className="text-sm md:text-base mt-1 opacity-90">
            Add doctor details below
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
          name=""
        >
          {/* Doctor Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Doctor Name
            </label>

            <input
              type="text"
              name="doctor"
              placeholder="Enter doctor name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Specialty */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Specialty
            </label>

            <input
              type="text"
              name="speciality"
              placeholder="Enter specialty"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Experience
            </label>

            <input
              type="text"
              name="experience"
              placeholder="e.g. 10 years"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Fee */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Consultation Fee (৳)
            </label>

            <input
              type="number"
              name="fee"
              placeholder="Enter consultation fee"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Hospital */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Hospital Name
            </label>

            <input
              type="text"
              name="hospital"
              placeholder="Enter hospital name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Image Link */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700">
              Doctor Image Link
            </label>

            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Availability */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700">
              Availability
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="time"
                placeholder="09:00 AM - 12:00 PM"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
              />

              <input
                type="text"
                name="time"
                placeholder="04:00 PM - 07:00 PM"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700">
              Description
            </label>

            <textarea
              rows="5"
              placeholder="Write doctor description..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-auto bg-[#5F6FFF] hover:bg-[#5060f5] text-white font-semibold px-8 py-3 rounded-xl transition duration-300"
            >
              Save Doctor Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
