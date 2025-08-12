type RowObj = {
	name: [string, boolean];
	progress: string;
	amount: number;
	date: string; 
};

const tableDataCheck: RowObj[] = [
  {
    name: ["John Smith", true],
    amount: 2458,
    progress: "17.5%",
    date: "12 Jan 2021",
  },
  {
    name: ["Emily Johnson", true],
    amount: 1485,
    progress: "10.8%",
    date: "21 Feb 2021",
  },
  {
    name: ["Michael Brown", true],
    amount: 1024,
    progress: "21.3%",
    date: "13 Mar 2021",
  },
  {
    name: ["Sarah Davis", true],
    amount: 858,
    progress: "31.5%",
    date: "24 Jan 2021",
  },
  {
    name: ["David Wilson", true],
    amount: 258,
    progress: "12.2%",
    date: "24 Oct 2022",
  },
  {
    name: ["John Smith", true],
    amount: 2458,
    progress: "17.5%",
    date: "12 Jan 2021",
  },
  {
    name: ["Emily Johnson", true],
    amount: 1485,
    progress: "10.8%",
    date: "21 Feb 2021",
  },
  {
    name: ["Michael Ji", true],
    amount: 1024,
    progress: "21.3%",
    date: "13 Mar 2021",
  },
  {
    name: ["Sarah Davis", true],
    amount: 858,
    progress: "31.5%",
    date: "24 Jan 2021",
  },
  {
    name: ["David Wilson", true],
    amount: 258,
    progress: "12.2%",
    date: "24 Oct 2022",
  },
];


export default tableDataCheck;
