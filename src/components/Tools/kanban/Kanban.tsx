import { useMemo, useState, useCallback } from "react";

import BoardColumn, { Column } from "./components/Column/Column";

import { type Task } from "./components/Card/TaskCard";

import {
  DragDropContext,
  Droppable,
  DropResult,
  DroppableProvided,
} from "@hello-pangea/dnd";

interface KanbanBoardProps {
  initialColumns?: Column[];
  initialTasks?: Task[];
  settings?: {
    disableAddingColumns?: boolean;
    disableAddingTasks?: boolean;
    maxColumns?: number;
  };
  onColumnsChange?: (columns: Column[]) => void;
  onTasksChange?: (tasks: Task[]) => void;
}

const KanbanBoard = ({
  initialColumns = [],
  initialTasks = [],
}: KanbanBoardProps) => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleTaskChange = useCallback((updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }, []);

  const handleColumnChange = useCallback((updatedColumn: Column) => {
    setColumns((prev) =>
      prev.map((col) => (col.id === updatedColumn.id ? updatedColumn : col))
    );
  }, []);

  const tasksByColumnId = useMemo(() => {
    const groupedTasks = columns.reduce((acc, col) => {
      acc[col.id] = tasks
        .filter((task) => task.columnId === col.id)
        .sort((a, b) => a.tpos - b.tpos);
      return acc;
    }, {} as Record<string, Task[]>);
    return groupedTasks;
  }, [columns, tasks]);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination, type } = result;

      if (!destination) return;

      // Reorder columns
      if (type === "COLUMN") {
        const reorderedColumns = Array.from(columns);
        const [moved] = reorderedColumns.splice(source.index, 1);
        reorderedColumns.splice(destination.index, 0, moved);

        const updatedColumns = reorderedColumns.map((col, index) => ({
          ...col,
          cpos: index,
        }));

        setColumns(updatedColumns.sort((a, b) => a.cpos - b.cpos));
        return;
      }

      // Reorder tasks
      const startColId = source.droppableId;
      const endColId = destination.droppableId;

      const startTasks = tasks
        .filter((task) => task.columnId === startColId)
        .sort((a, b) => a.tpos - b.tpos);
      const endTasks =
        startColId === endColId
          ? startTasks
          : tasks
              .filter((task) => task.columnId === endColId)
              .sort((a, b) => a.tpos - b.tpos);

      const [movedTask] = startTasks.splice(source.index, 1);

      // Update columnId if moved across columns
      if (startColId !== endColId) {
        movedTask.columnId = endColId;
      }

      endTasks.splice(destination.index, 0, movedTask);

      // Reassign tpos
      const updatedTasks = tasks.map((task) => {
        if (task.columnId !== startColId && task.columnId !== endColId) {
          return task;
        }

        const updatedList =
          task.columnId === startColId ? startTasks : endTasks;
        const updated = updatedList.find((t) => t.id === task.id);
        if (updated) {
          return {
            ...updated,
            tpos: updatedList.indexOf(updated),
          };
        }
        return task;
      });
      setTasks(updatedTasks);
    },
    [tasks, columns]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {/* Columns droppable for column reordering */}
      <Droppable droppableId="board" direction="horizontal" type="COLUMN">
        {(provided: DroppableProvided) => (
          <div
            className="flex gap-4"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {columns.map((col, index) => (
              <BoardColumn
                column={col}
                tasks={tasksByColumnId[col.id] ?? []}
                onColumnChange={handleColumnChange}
                onTaskChange={handleTaskChange}
                index={index}
              />
            ))}
            {provided.placeholder}
            {<button>ADD TASK</button>}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
