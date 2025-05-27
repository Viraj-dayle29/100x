import { Mode } from "./components/Card/Category";
import { Task, TasksMap } from "./context/TaskContext";

export type Column = {
  title: string;
  cpos: number;
  tasksWithPosition: { taskId: string; tpos: number }[];
};

export type ColumnMap = Record<string, Column>;

let categoryData = {
  category: {
    "cat-1": {
      name: "Fruits",
      mode: Mode.MULTIPLE,
      tagIds: ["id1", "id2", "id3", "id4", "id5", "id6"],
    },
    "cat-2": {
      name: "Priority",
      mode: Mode.SINGLE,
      tagIds: ["id7", "id8", "id9"],
    },
  },

  tags: {
    id1: { color: "oklch(94.5% 0.129 101.54)", label: "Apple" },
    id2: { color: "yellow", label: "Banana" },
    id3: { color: "green", label: "Kiwi" },
    id4: { color: "blue", label: "Blueberry" },
    id5: { color: "red", label: "Strawberry" },
    id6: { color: "pink", label: "Guava" },
    id7: { color: "red", label: "High" },
    id8: { color: "yellow", label: "Low" },
    id9: { color: "green", label: "Medium" },
  },
};

const sampleColumn: ColumnMap = {
  column1: {
    title: "To Do",
    cpos: 4,
    tasksWithPosition: [
      { taskId: "task1", tpos: 1 },
      { taskId: "task2", tpos: 2 },
      { taskId: "task3", tpos: 3 },
    ],
  },
  column2: {
    title: "In Progress",
    cpos: 1,
    tasksWithPosition: [
      { taskId: "task4", tpos: 1 },
      { taskId: "task5", tpos: 2 },
      { taskId: "task6", tpos: 3 },
    ],
  },
  column3: {
    title: "Review",
    cpos: 2,
    tasksWithPosition: [
      { taskId: "task7", tpos: 1 },
      { taskId: "task8", tpos: 2 },
      { taskId: "task9", tpos: 3 },
    ],
  },
  column4: {
    title: "Done",
    cpos: 3,
    tasksWithPosition: [
      { taskId: "task10", tpos: 1 },
      { taskId: "task11", tpos: 2 },
      { taskId: "task12", tpos: 3 },
      { taskId: "task13", tpos: 4 },
    ],
  },
};

let sampleTasks: TasksMap = {
  task1: {
    textValue: "Design homepage",
    star: true,
    date: "29-feb-2024",
    selectedTags: {
      cat1: ["id1", "id2"],
      cat2: "id7",
    },
  },
  task2: {
    textValue: "Setup database schema",
    star: false,
    date: "01-mar-2024",
    selectedTags: {
      cat1: ["id3"],
      cat2: "id9",
    },
  },
  task3: {
    textValue: "Create auth module",
    star: false,
    date: "02-mar-2024",
    selectedTags: {
      cat1: ["id4"],
      cat2: "id8",
    },
  },
  task4: {
    textValue: "Responsive fixes",
    star: true,
    date: "02-mar-2024",
    selectedTags: {
      cat1: ["id5", "id6"],
      cat2: "id7",
    },
  },
  task5: {
    textValue: "Refactor API layer",
    star: false,
    date: "03-mar-2024",
    selectedTags: {
      cat1: ["id1"],
      cat2: "id8",
    },
  },
  task6: {
    textValue: "Setup CI/CD",
    star: true,
    date: "03-mar-2024",
    selectedTags: {
      cat1: ["id2", "id6"],
      cat2: "id9",
    },
  },
  task7: {
    textValue: "Lint and format code",
    star: false,
    date: "04-mar-2024",
    selectedTags: {
      cat1: ["id3"],
      cat2: "id9",
    },
  },
  task8: {
    textValue: "QA testing",
    star: true,
    date: "04-mar-2024",
    selectedTags: {
      cat1: ["id4"],
      cat2: "id7",
    },
  },
  task9: {
    textValue: "Browser compatibility check",
    star: false,
    date: "05-mar-2024",
    selectedTags: {
      cat1: ["id5"],
      cat2: "id8",
    },
  },
  task10: {
    textValue: "Fix critical bugs",
    star: true,
    date: "06-mar-2024",
    selectedTags: {
      cat1: ["id6"],
      cat2: "id7",
    },
  },
  task11: {
    textValue: "Deploy to production",
    star: true,
    date: "07-mar-2024",
    selectedTags: {
      cat1: ["id1", "id2"],
      cat2: "id9",
    },
  },
  task12: {
    textValue: "Prepare documentation",
    star: false,
    date: "08-mar-2024",
    selectedTags: {
      cat1: ["id3"],
      cat2: "id8",
    },
  },
  task13: {
    textValue: "Team review & handoff",
    star: true,
    date: "09-mar-2024",
    selectedTags: {
      cat1: ["id4", "id5"],
      cat2: "id7",
    },
  },
};

export const getTasks = (): Promise<TasksMap> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...sampleTasks });
    }, 3000);
  });
};

export const updateTask = (
  taskId: string,
  updates: Partial<Task>
): Promise<Task> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!sampleTasks[taskId]) {
        reject(new Error("Task not found"));
        return;
      }

      const updatedTask = {
        ...sampleTasks[taskId],
        ...updates,
        selectedTags: {
          ...sampleTasks[taskId].selectedTags,
          ...updates.selectedTags,
        },
      };

      sampleTasks[taskId] = updatedTask;
      resolve(updatedTask);
    }, 1000);
  });
};

export const getColumns = (): Promise<ColumnMap> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...sampleColumn });
    }, 3000);
  });
};

export const updateColumn = (
  columnId: string,
  updates: Partial<Column>
): Promise<{ [key: string]: Column }> => {
  return new Promise((resolve, reject) => {
    if (!sampleColumn[columnId]) {
      return reject(new Error("Column ID not found"));
    }

    sampleColumn[columnId] = {
      ...sampleColumn[columnId],
      ...updates,
    };

    resolve({ [columnId]: sampleColumn[columnId] });
  });
};
