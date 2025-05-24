import { Mode } from "./components/Card/Category";

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

const categoryData = {
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

const sampleColumn = {
  column1: {
    title: "To Do",
    cpos: 4,
    tasksWithPosition: [{ taskId: "task1", tpos: 1 }],
  },
  column2: { title: "In Progress", cpos: 1 },
  column3: { title: "Review", cpos: 2 },
  column4: { title: "Done", cpos: 3 },
};

const sampleTasks = {
  task1: {
    columnId: "column1",
    textValue: "Design homepage",
    star: true,
    date: "29-feb-2024",
    tpos: 1,
    selectedTags: {
      cat1: ["id1", "id2"], // Apple, Banana
      cat2: "id7", // High
    },
  },
  task2: {
    columnId: "column1",
    textValue: "Setup database schema",
    star: false,
    date: "01-mar-2024",
    tpos: 2,
    selectedTags: {
      cat1: ["id3"], // Kiwi
      cat2: "id9", // Medium
    },
  },
  task3: {
    columnId: "column1",
    textValue: "Create auth module",
    star: false,
    date: "02-mar-2024",
    tpos: 3,
    selectedTags: {
      cat1: ["id4"], // Blueberry
      cat2: "id8", // Low
    },
  },
  task4: {
    columnId: "column2",
    textValue: "Responsive fixes",
    star: true,
    date: "02-mar-2024",
    tpos: 1,
    selectedTags: {
      cat1: ["id5", "id6"], // Strawberry, Guava
      cat2: "id7", // High
    },
  },
  task5: {
    columnId: "column2",
    textValue: "Refactor API layer",
    star: false,
    date: "03-mar-2024",
    tpos: 2,
    selectedTags: {
      cat1: ["id1"],
      cat2: "id8",
    },
  },
  task6: {
    columnId: "column2",
    textValue: "Setup CI/CD",
    star: true,
    date: "03-mar-2024",
    tpos: 3,
    selectedTags: {
      cat1: ["id2", "id6"],
      cat2: "id9",
    },
  },
  task7: {
    columnId: "column3",
    textValue: "Lint and format code",
    star: false,
    date: "04-mar-2024",
    tpos: 4,
    selectedTags: {
      cat1: ["id3"],
      cat2: "id9",
    },
  },
  task8: {
    columnId: "column3",
    textValue: "QA testing",
    star: true,
    date: "04-mar-2024",
    tpos: 1,
    selectedTags: {
      cat1: ["id4"],
      cat2: "id7",
    },
  },
  task9: {
    columnId: "column3",
    textValue: "Browser compatibility check",
    star: false,
    date: "05-mar-2024",
    tpos: 2,
    selectedTags: {
      cat1: ["id5"],
      cat2: "id8",
    },
  },
  task10: {
    columnId: "column3",
    textValue: "Fix critical bugs",
    star: true,
    date: "06-mar-2024",
    tpos: 3,
    selectedTags: {
      cat1: ["id6"],
      cat2: "id7",
    },
  },
  task11: {
    columnId: "column4",
    textValue: "Deploy to production",
    star: true,
    date: "07-mar-2024",
    tpos: 1,
    selectedTags: {
      cat1: ["id1", "id2"],
      cat2: "id9",
    },
  },
  task12: {
    columnId: "column4",
    textValue: "Prepare documentation",
    star: false,
    date: "08-mar-2024",
    tpos: 3,
    selectedTags: {
      cat1: ["id3"],
      cat2: "id8",
    },
  },
  task13: {
    columnId: "column4",
    textValue: "Team review & handoff",
    star: true,
    date: "09-mar-2024",
    tpos: 2,
    selectedTags: {
      cat1: ["id4", "id5"],
      cat2: "id7",
    },
  },
};
