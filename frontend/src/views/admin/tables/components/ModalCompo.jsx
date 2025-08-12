import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { useEffect, useState } from "react";
import DropDownCompo from "./DropdownCompo";

const ModalCompo = ({onOpen, isOpen, onClose, data, id}) => {

  const [currentUserData, setCurrentUserData] = useState({});
  useEffect(() => {
    const user = data.find((user) => user.action === id);
    if (user) {
      setCurrentUserData(user);
    }
  }, [id, data]);
  return (
    <>
      {/* <div onClick={onOpen}>
        <button className="linear rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Default
        </button>
      </div> */}
      <Modal isOpen={isOpen} onClose={onClose} className="!z-[1010]">
        <ModalOverlay className="bg-[#000] !opacity-30" />
        <ModalContent className="!z-[1002] !m-auto !w-max min-w-[350px] !max-w-[85%] md:top-[12vh] ">
          <ModalBody>
            <div className="!z-[1004] mt-[150px] flex max-w-[450px] flex-col rounded bg-white dark:bg-navy-400 px-[30px] pb-[40px] pt-[35px]">
              <h1 className="mb-[20px] text-2xl font-bold dark:text-white">
                {currentUserData?.name}
              </h1>
              <p className="mb-[20px]">
                Current Status: <span>{currentUserData?.status}</span>
              </p>
              <div>
                <DropDownCompo />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="linear rounded-xl border-2 border-red-500 px-5 py-3 text-base font-medium text-red-500 transition duration-200 hover:bg-red-600/5 active:bg-red-700/5 dark:border-red-400 dark:bg-red-400/10 dark:text-white dark:hover:bg-red-300/10 dark:active:bg-red-200/10"
                >
                  Close
                </button>
                <button className="rounded-xl bg-gradient-to-br from-brandLinear to-blueSecondary px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50">
                  Save
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalCompo;
