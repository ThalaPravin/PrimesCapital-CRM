import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/vendor/default/components/WeeklyRevenue";
import TotalSpent from "views/vendor/default/components/TotalSpent";
import PieChartCard from "views/vendor/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "components/widget/Widget";
import CheckTable from "views/vendor/default/components/CheckTable";
import ComplexTable from "views/vendor/default/components/ComplexTable";
import DailyTraffic from "views/vendor/default/components/DailyTraffic";
import TaskCard from "views/vendor/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
      
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total Leads"}
          subtitle={"3400"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Total Deals"}
          subtitle={"3100"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Today's Leads"}
          subtitle={"300"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Today's Deals"}
          subtitle={"150"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Revenue Generated"}
          subtitle={"₹14,5000"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Lost Deals"}
          subtitle={"0"}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable tableData={tableDataCheck} />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable tableData={tableDataComplex} />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
