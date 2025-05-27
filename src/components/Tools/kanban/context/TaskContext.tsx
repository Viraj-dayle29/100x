import { ReactNode, useMemo } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { useTasks } from "../tanStack/Task.Tanstack";

export type Task = {
  textValue: string;
  star: boolean;
  date: string;
  selectedTags: {
    [categoryId: string]: string | string[];
  };
};

export type TasksMap = Record<string, Task>;

const TasksContext = createContext<TasksMap | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const { data = {} } = useTasks();

  const value = useMemo(() => data, [data]);

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export const useTaskById = (taskId: string): Task | undefined =>
  useContextSelector(TasksContext, (ctx) => ctx?.[taskId]);
