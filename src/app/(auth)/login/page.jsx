export default function CreateAccount() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center ">
      <div className=" bg-white border border-gray-300 rounded-3xl md:p-8 p-5 shadow-sm">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-700 mb-3">
          Create Account
        </h1>

        <p className="text-gray-500 text-lg mb-8">
          Please sign up to book appointment
        </p>

        {/* Form */}
        <form className="space-y-3">
          {/* Full Name */}
          

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder=""
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder=""
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-600 mt-8 text-center">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-500 hover:underline font-medium"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
