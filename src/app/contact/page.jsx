import Image from "next/image";
import contact from "../../../public/assets/contact.png"

export default function ContactSection() {
  return (
    <section className="md:py-12 py-8 md:px-6 px-2">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl font-semibold text-gray-700 md:mb-16 mb-8">
          CONTACT <span className="font-bold">US</span>
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <Image src={contact} alt=""/>

          {/* Right Content */}
          <div className="space-y-12">
            {/* Office Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-6 uppercase">
                Our Office
              </h3>

              <div className="space-y-3 text-gray-600 text-base leading-relaxed">
                <p>54709 Willms Station</p>
                <p>Suite 350, Washington, USA</p>

                <div className="pt-4">
                  <p>Tel: (415) 555-0132</p>
                  <p>Email: greatstackdev@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Careers */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4 uppercase">
                Careers at Prescripto
              </h3>

              <p className="text-gray-600 mb-8">
                Learn more about our teams and job openings.
              </p>

              <button className="border border-gray-500 px-8 py-3 text-gray-700 hover:bg-[#5F6FFF] hover:text-white transition duration-300">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}