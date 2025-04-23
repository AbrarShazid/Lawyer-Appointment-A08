import toast from "react-hot-toast";

export const getLawyer = () => {
  const lawyer = localStorage.getItem("lawyer");
  if (lawyer) return JSON.parse(lawyer);
  return [];
};

export const addLawyer = (lawyer, name) => {
  const lawyerList = getLawyer();
  const isExist = lawyerList.includes(lawyer);
  if (isExist) {
    toast.error(`${name} appointment taken already for today.`);
    return false;
  }
  lawyerList.push(lawyer);
  toast.success(`${name} Appointment Successful!!`);
  localStorage.setItem("lawyer", JSON.stringify(lawyerList));
  return true;
};

export const removeLawyer = (license, name) => {
  const lawyerList = getLawyer();
  const remainingLawyer = lawyerList.filter((lawyer) => lawyer !== license);
  localStorage.setItem("lawyer", JSON.stringify(remainingLawyer));
  toast.error(`${name} Appointment Cancel Successfully!!`);
};
