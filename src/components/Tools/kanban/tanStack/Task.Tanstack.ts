import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Task, TasksMap } from "../context/TaskContext";
import { getTasks, updateTask } from "../sampleDb";

export const useTasks = () => {
  return useQuery<TasksMap>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      taskId,
      updates,
    }: {
      taskId: string;
      updates: Partial<Task>;
    }) => updateTask(taskId, updates),

    onMutate: async ({ taskId, updates }) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });

      const previousTasks = queryClient.getQueryData<TasksMap>(["tasks"]);

      queryClient.setQueryData<TasksMap>(["tasks"], (old = {}) => ({
        ...old,
        [taskId]: {
          ...old[taskId],
          ...updates,
          selectedTags: {
            ...old[taskId]?.selectedTags,
            ...updates.selectedTags,
          },
        },
      }));

      return { previousTasks };
    },

    onError: (_err, _vars, ctx) => {
      if (ctx?.previousTasks) {
        queryClient.setQueryData(["tasks"], ctx.previousTasks);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
