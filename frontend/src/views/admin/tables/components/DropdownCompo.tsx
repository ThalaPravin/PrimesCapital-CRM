import Dropdown from "components/formDrop";
 
export default function DropDownCompo() {
  return (
    <Dropdown
      button={
        <button className="my-3 rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Select State
        </button>
      }
      children={
        <div className="flex h-max w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat pb-4 shadow-[0_20px_25px_-5px] shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
          <div className="ml-4 mt-3">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                👋 Hey,
              </p>{" "}
            </div>
          </div>
          <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

          <div className="ml-4 mt-3 flex flex-col gap-2">
            <p className="cursor-pointer p-2 text-sm text-gray-800 hover:text-blueSecondary dark:text-white hover:dark:text-blue-300 ">
              Processing
            </p>
            <p className="cursor-pointer p-2 text-sm text-gray-800 hover:text-blueSecondary dark:text-white hover:dark:text-blue-300 ">
              Trade Loss
            </p>
            <p className="cursor-pointer p-2 text-sm text-gray-800 hover:text-blueSecondary dark:text-white hover:dark:text-blue-300 ">
              Trade Done
            </p>
          </div>
        </div>
      }
      classNames={"py-2 bottom-[-30px] -left-[180px] w-max"}
    />
  );
}