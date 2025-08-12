import CardMenu from "components/card/CardMenu";
import Checkbox from "components/checkbox";
import { MdDragIndicator, MdCheckCircle } from "react-icons/md";
import Card from "components/card";

// Sample tasks data in JSON format
interface Task {
  id: number;
  text: string;
}


const tasksData: Task[] = [
  { id: 1, text: "Negotiate vendor contracts" },
  { id: 2, text: "Evaluate vendor proposals" },
  { id: 3, text: "Manage vendor relationships" },
  { id: 4, text: "Ensure timely delivery of vendor goods/services" },
  { id: 5, text: "Resolve vendor disputes" },
];

// TaskRow component
const TaskRow: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="mt-2 flex items-center justify-between p-2">
      <div className="flex items-center justify-center gap-2">
        <Checkbox />
        <p className="text-base font-bold text-navy-700 dark:text-white">
          {text}
        </p>
      </div>
      <div>
        <MdDragIndicator className="h-6 w-6 text-navy-700 dark:text-white" />
      </div>
    </div>
  );
};

const TaskCard: React.FC = () => {
  return (
    <Card extra="pb-7 p-[20px]">
      {/* task header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
            <MdCheckCircle className="h-6 w-6 text-brand-500 dark:text-white" />
          </div>
          <h4 className="ml-4 text-xl font-bold text-navy-700 dark:text-white">
            Tasks
          </h4>
        </div>
        <CardMenu />
      </div>

      {/* task content */}
      <div className="h-full w-full">
        {tasksData.map((task) => (
          <TaskRow key={task.id} text={task.text} />
        ))}
      </div>
    </Card>
  );
};

export default TaskCard;
