type RowObj = {
	name: string;
	status: string;
	date: string;
	progress: number;
};

const tableDataComplex: RowObj[] = [
  {
    name: "John Smith",
    status: "Approved",
    date: "12 Jan 2021",
    progress: 75.5,
  },
  {
    name: "Emily Johnson",
    status: "Disable",
    date: "21 Feb 2021",
    progress: 25.5,
  },
  {
    name: "Michael Brown",
    status: "Error",
    date: "13 Mar 2021",
    progress: 90,
  },
  {
    name: "Sarah Davis",
    status: "Approved",
    date: "24 Oct 2022",
    progress: 50.5,
  },
  {
    name: "John Smith",
    status: "Approved",
    date: "12 Jan 2021",
    progress: 75.5,
  },
  {
    name: "Emily Johnson",
    status: "Disable",
    date: "21 Feb 2021",
    progress: 25.5,
  },
  {
    name: "Michael Brown",
    status: "Error",
    date: "13 Mar 2021",
    progress: 90,
  },
  {
    name: "Sarah Davis",
    status: "Approved",
    date: "24 Oct 2022",
    progress: 50.5,
  },
];

export default tableDataComplex;
