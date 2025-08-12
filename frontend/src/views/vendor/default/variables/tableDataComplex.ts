type RowObj = {
	name: string;
	status: string;
	date: string;
	progress: number;
};
const tableDataComplex: RowObj[] = [
	{
		name: 'Aarav Patel',
		progress: 75.5,
		status: 'Approved',
		date: '12 Jan 2021'
	},
	{
		name: 'Advika Gupta',
		progress: 25.5,
		status: 'Disable',
		date: '21 Feb 2021'
	},
	{
		name: 'Aaradhya Sharma',
		progress: 90,
		status: 'Error',
		date: '13 Mar 2021'
	},
	{
		name: 'Aakash Singh',
		progress: 50.5,
		status: 'Approved',
		date: '24 Oct 2022'
	},
	{
		name: 'Amit Kumar',
		progress: 30,
		status: 'In Progress',
		date: '15 May 2024'
	},
	{
		name: 'Aruna Mehra',
		progress: 65,
		status: 'Approved',
		date: '28 June 2024'
	}
];
export default tableDataComplex;
