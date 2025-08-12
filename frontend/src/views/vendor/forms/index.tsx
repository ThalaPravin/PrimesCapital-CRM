import React from "react";
import InputField from "../../../components/fields/InputField";
import CustomDropdown from "../../../components/dropdowncompov"; // Adjust the path according to your project structure

function Form() {
  // Array for Product Category options
  const productCategoryOptions = ["Franchise", "Free Demat Account", "TPP"];

  // Array for Product Selection options
  const productSelectionOptions = [
    "Zerodha",
    "Upstox",
    "Angel Broking",
    "ICICI Direct",
    "HDFC Securities",
    "Sharekhan",
    "Kotak Securities",
    "5paisa",
    "Axis Direct",
    "Motilal Oswal",
    "IIFL Securities",
    "Groww",
    "Paytm Money",
    "Edelweiss",
    "SBICap Securities",
    "Indiabulls Ventures",
    "Reliance Securities",
    "Karvy Stock Broking",
    "Ventura Securities",
    "TradeSmart"
];


  return (
    <>
      <form>
        <div className="mt-5 w-full h-full px-6 pb-6 sm:overflow-x-auto items-center justify-center pt-4 flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none ${extra}">
          <div className="mb-3">
            <InputField
              id="first-name"
              label="First Name"
              extra=""
              placeholder="Enter your first name"
              variant="auth"
              type="text"
            />
          </div>
          <div className="mb-3">
            <InputField
              id="last-name"
              label="Last Name"
              extra=""
              placeholder="Enter your last name"
              variant="auth"
              type="text"
            />
          </div>
          <div className="mb-3">
            <InputField
              id="email"
              label="Email"
              extra=""
              placeholder="Enter your email"
              variant="auth"
              type="email"
            />
          </div>
          <div className="mb-3">
            <InputField
              id="mobile"
              label="Mobile"
              extra=""
              placeholder="Enter your mobile number"
              variant="auth"
              type="tel"
            />
          </div>
          <div className="mb-3">
            <CustomDropdown
              options={productCategoryOptions}
              label="Select Product  Category"
             
            />
          </div>
          <div className="mb-3">
            <CustomDropdown
              options={productSelectionOptions}
              label="Select Product "
           
             
     
          
    
        
            />
          </div>
          <div className="mb-3">
            <InputField
              id="lead-status"
              label="Lead Status"
              extra=""
              placeholder="Enter lead status"
              variant="auth"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="address"
              className="form-label text-sm text-navy-700 dark:text-white font-bold"
            >
              Address
            </label>
            <textarea
              id="address"
              placeholder="Enter your address"
              className="form-control mt-2 flex h-32 w-full rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
