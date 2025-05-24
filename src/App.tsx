import { Task } from "./components/Tools/kanban/components/Card/TaskCard";
import { Mode } from "./components/Tools/kanban/components/Card/Category";
import KanbanBoard from "./components/Tools/kanban/components/DragKanban/Kanban";

function App() {
  const categeory = [
    {
      name: "Fruits",
      mode: Mode.MULTIPLE,
      value: [
        { color: "oklch(94.5% 0.129 101.54)", valueName: "Apple" },
        { color: "yellow", valueName: "Banana" },
        { color: "green", valueName: "Kiwi" },
        { color: "blue", valueName: "Blueerry" },
        { color: "red", valueName: "strawberry" },
        { color: "pink", valueName: "Guava" },
      ],
    },
    {
      name: "Proirity",
      mode: Mode.SINGLE,
      value: [
        { color: "red", valueName: "High" },
        { color: "yellow", valueName: "Low" },
        { color: "green", valueName: "Medium" },
      ],
    },
  ];

  const sampleColumn = [
    { id: "column-1", title: "To Do", cpos: 4 },
    { id: "column-2", title: "In Progress", cpos: 1 },
    { id: "column-3", title: "Review", cpos: 2 },
    { id: "column-4", title: "Done", cpos: 3 },
  ];

  const sampleTasks: Task[] = [
    {
      id: "task-1",
      columnId: sampleColumn[0].id,
      textValue: "Design homepage",
      star: true,
      date: "29-feb-2024",
      categeories: categeory,
      tpos: 1,
    },
    {
      id: "task-2",
      columnId: sampleColumn[0].id,
      textValue: "Setup database schema",
      star: false,
      date: "01-mar-2024",
      categeories: categeory,
      tpos: 2,
    },
    {
      id: "task-3",
      columnId: sampleColumn[0].id,
      textValue: "Create auth module",
      star: false,
      date: "02-mar-2024",
      categeories: categeory,
      tpos: 3,
    },
    {
      id: "task-4",
      columnId: sampleColumn[1].id,
      textValue: "Responsive fixes",
      star: true,
      date: "02-mar-2024",
      categeories: categeory,
      tpos: 1,
    },
    {
      id: "task-5",
      columnId: sampleColumn[1].id,
      textValue: "Refactor API layer",
      star: false,
      date: "03-mar-2024",
      categeories: categeory,
      tpos: 2,
    },
    {
      id: "task-6",
      columnId: sampleColumn[1].id,
      textValue: "Setup CI/CD",
      star: true,
      date: "03-mar-2024",
      categeories: categeory,
      tpos: 3,
    },

    {
      id: "task-8",
      columnId: sampleColumn[2].id,
      textValue: "QA testing",
      star: true,
      date: "04-mar-2024",
      categeories: categeory,
      tpos: 1,
    },
    {
      id: "task-7",
      columnId: sampleColumn[1].id,
      textValue: "Lint and format code",
      star: false,
      date: "04-mar-2024",
      categeories: categeory,
      tpos: 4,
    },
    {
      id: "task-9",
      columnId: sampleColumn[2].id,
      textValue: "Browser compatibility check",
      star: false,
      date: "05-mar-2024",
      categeories: categeory,
      tpos: 2,
    },
    {
      id: "task-10",
      columnId: sampleColumn[2].id,
      textValue: "Fix critical bugs",
      star: true,
      date: "06-mar-2024",
      categeories: categeory,
      tpos: 3,
    },
    {
      id: "task-11",
      columnId: sampleColumn[3].id,
      textValue: "Deploy to production",
      star: true,
      date: "07-mar-2024",
      categeories: categeory,
      tpos: 1,
    },
    {
      id: "task-12",
      columnId: sampleColumn[3].id,
      textValue: "Prepare documentation",
      star: false,
      date: "08-mar-2024",
      categeories: categeory,
      tpos: 3,
    },
    {
      id: "task-13",
      columnId: sampleColumn[3].id,
      textValue: "Team review & handoff",
      star: true,
      date: "09-mar-2024",
      categeories: categeory,
      tpos: 2,
    },
  ];
  return (
    <>
      <div className="flex gap-2 bg-[#212529]">
        <KanbanBoard initialColumns={sampleColumn} initialTasks={sampleTasks} />
      </div>
      {/* <Home/> */}
    </>
  );
}

export default App;
