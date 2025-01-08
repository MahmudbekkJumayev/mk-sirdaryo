import React, { useState } from "react";

const Form = () => {
  const [isLegalEntity, setIsLegalEntity] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [mahallas, setMahallas] = useState([]);

  const locations = {
    Guliston: ["Mahalla 1", "Mahalla 2", "Mahalla 3"],
    Shirin: ["Mahalla A", "Mahalla B"],
    Yangiyer: ["Mahalla X", "Mahalla Y", "Mahalla Z"],
    "Sayxunobod tumani": ["Mahalla 4", "Mahalla 5"],
    "Sardoba tumani": ["Mahalla 6", "Mahalla 7"],
    "Mirzaobod tumani": ["Mahalla 8", "Mahalla 9"],
    "Xovos tumani": ["Mahalla 10", "Mahalla 11"],
    "Oqoltin tumani": ["Mahalla 12"],
    "Boyovut tumani": ["Mahalla 13", "Mahalla 14"],
  };

  const handleLocationChange = (e) => {
    const selected = e.target.value;
    setSelectedLocation(selected);
    setMahallas(locations[selected] || []);
  };

  

  return (
    <div>
      <form>
        {/* F.I.O Field */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            F.I.O
          </label>
        </div>

        {/* Phone Number Field */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Telefon raqamingiz
          </label>
        </div>

        {/* Person Type Selection */}
        <div className="relative z-0 w-full mb-5 group">
          <select
            name="person_type"
            id="person_type"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            defaultValue="individual"
            onChange={(e) => setIsLegalEntity(e.target.value === "legal")}
            required
          >
            <option value="individual">Jismoniy shaxs</option>
            <option value="legal">Yuridik shaxs</option>
          </select>
          <label
            htmlFor="person_type"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tanlov
          </label>
        </div>

        {/* Organization Name Field (if Legal Entity) */}
        {isLegalEntity && (
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="organization_name"
              id="organization_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="organization_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tashkilot nomi
            </label>
          </div>
        )}

        {/* Shahar yoki Tuman Tanlash */}
        <div className="relative z-0 w-full mb-5 group">
          <select
            name="location"
            id="floating_location"
            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleLocationChange}
            required
          >
            {Object.keys(locations).map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <label
            htmlFor="floating_location"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Shaharni tanlang
          </label>
        </div>

        {/* Mahalla Tanlash */}
        {mahallas.length > 0 && (
          <div className="relative z-0 w-full mb-5 group">
            <select
              name="mahalla"
              id="floating_mahalla"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            >
              {mahallas.map((mahalla, index) => (
                <option key={index} value={mahalla}>
                  {mahalla}
                </option>
              ))}
            </select>
            <label
              htmlFor="floating_mahalla"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mahallani tanlang
            </label>
          </div>
        )}

        {/* First Name and Last Name Fields */}
        <div className=" md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Manzil
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
