type RowObj = {
	name: [string, boolean];
	progress: string;
	quantity: number;
	date: string; 
};

const tableDataCheck: RowObj[] = [
	{
		name: [ 'Surya Yadav', true ],
		quantity: 2458,
		progress: '90.5%',
		date: '12 Jan 2024',
	},
	{
		name: [ 'Surya Yadav', true ],
		quantity: 1485,
		progress: '80.8%',
		date: '21 Feb 2024',
	},
	{
		name: [ 'Saptahik Update', true ],
		quantity: 1024,
		progress: '61.3%',
		date: '13 Mar 2024',
	},
	{
		name: [ 'Shukra Singh', true ],
		quantity: 858,
		progress: '71.5%',
		date: '24 Jan 2024',
	},
	{
		name: [ 'Vyapar Mandali', true ],
		quantity: 258,
		progress: '86.2%',
		date: '24 Oct 2024',
	}
];




export default tableDataCheck;
