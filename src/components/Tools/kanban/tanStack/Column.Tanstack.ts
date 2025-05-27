import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { ColumnMap, getColumns, Column, updateColumn } from "../sampleDb";

export const useColumns = () => {
  return useQuery<ColumnMap>({
    queryKey: ["columns"],
    queryFn: getColumns,
  });
};

export const useColumnUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      columnId,
      updates,
    }: {
      columnId: string;
      updates: Partial<Column>;
    }) => updateColumn(columnId, updates),

    onMutate: async ({ columnId, updates }) => {
      await queryClient.cancelQueries({ queryKey: ["columns"] });

      const previousColumns = queryClient.getQueryData<ColumnMap>(["columns"]);

      queryClient.setQueryData<ColumnMap>(["columns"], (old = {}) => ({
        ...old,
        [columnId]: {
          ...old[columnId],
          ...updates,
          tasksWithPosition: updates.tasksWithPosition
            ? updates.tasksWithPosition
            : old[columnId]?.tasksWithPosition || [],
        },
      }));

      return { previousColumns };
    },

    onError: (_err, _vars, ctx) => {
      if (ctx?.previousColumns) {
        queryClient.setQueryData(["columns"], ctx.previousColumns);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["columns"] });
    },
  });
};
