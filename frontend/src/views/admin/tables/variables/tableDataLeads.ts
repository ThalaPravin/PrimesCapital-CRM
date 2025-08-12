type RowObj = {
  action: number;
  name: string;
  status: string;
  date: string;
  call: string;
  progress: number;
  vendorId: number;
  email: string;
  address: string;
  productCategory: string;
};

const tableDataComplex: RowObj[] = [
  {
    name: "John Smith",
    status: "Trade Done",
    date: "12 Jan 2021",
    call: "9833422345",
    progress: 75.5,
    action: 1,
    vendorId: 1,
    email: "john@gmail.com",
    address: "Kopargaon",
    productCategory: "Free demat account",
  },
  {
    name: "Emily Johnson",
    status: "In Progress",
    date: "21 Feb 2021",
    call: "9833422345",
    progress: 25.5,
    action: 2,
    vendorId: 2,
    email: "john@gmail.com",
    address: "Kopargaon",
    productCategory: "Free demat account",
  },
];

export default tableDataComplex;
