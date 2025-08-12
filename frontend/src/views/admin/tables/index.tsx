import tableDataDevelopment from "./variables/tableDataDevelopment";
import tableDataCheck from "./variables/tableDataCheck";
import CheckTable from "./components/CheckTable";
import tableDataColumns from "./variables/tableDataColumns";
import tableDataLead from "./variables/tableDataLeads";
import tableDataVendors from "./variables/tableDataVendors";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import LeadsTable from "./components/LeadsTable";
import VendorsTable from "./components/VendorsTable";

const Tables = () => {
  return (
    <div className="mt-5 ">
      {/* <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable tableData={tableDataDevelopment} />
        <CheckTable tableData={tableDataCheck} />
      </div> */}

      {/* <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable tableData={tableDataColumns} />

        <ComplexTable tableData={tableDataComplex} />
      </div> */}

      <VendorsTable tableData={tableDataVendors} />
      <LeadsTable tableData={tableDataLead} />
    </div>
  );
};

export default Tables;
