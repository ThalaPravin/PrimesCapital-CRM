type RowObj = {
  action: number;
  name: string;
  call: string;
  email: string;
  address: string;
};

const tableDataComplex: RowObj[] = [
  {
    name: "John Smith",
    call: "9833422345",
    action: 1,
    email: "john@gmail.com",
    address: "Kopargaon",
  },
  {
    name: "Emily Johnson",
    call: "9833422345",
    action: 2,
    email: "emily@gmail.com",
    address: "Shirdi",
  },
];

export default tableDataComplex;
