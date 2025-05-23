import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import Title from "../Title";
import { cn } from "@/lib/utils";
import TaskCard, { Task } from "../Card/TaskCard";
import { Draggable, DraggableProvided, Droppable } from "@hello-pangea/dnd";

export interface Column {
  id: string;
  title: string;
  cpos: number;
}

export interface ColumnDragData {
  type: ColumnType;
  column: Column;
}

export type ColumnType = "Column";

interface ColumnProps {
  tasks: Task[];
  className?: string;
  isOverlay?: boolean;
  column: Column;
  index: number;
  onTaskChange: (task: Task) => void;
  onColumnChange: (column: Column) => void;
}

const BoardColumn: React.FC<ColumnProps> = ({
  isOverlay,
  column,
  className,
  tasks,
  index,
  onColumnChange,
  onTaskChange,
}) => {
  const handleTitle = (value: string) => {
    onColumnChange({ ...column, title: value });
  };

  return (
    <Draggable draggableId={column.id} index={index} key={column.id}>
      {(provided: DraggableProvided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="min-w-[280px] max-w-[320px]"
        >
          <Droppable droppableId={column.id} type="TASK">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-[#212529] rounded border border-gray-custom flex flex-col"
              >
                <Card
                  className={cn(
                    "bg-[#212529] w-full rounded-none border-gray-custom py-0 pt-2 gap-0",
                    isOverlay && "ring-2 ring-primary",
                    className
                  )}
                >
                  <CardHeader className="px-3 mt-0">
                    <Title
                      inputClass="text-white uppercase outline-1 text-md"
                      outputClass="text-white uppercase text-md"
                      placeHolder="Enter a heading"
                      maxLength={55}
                      textValue={column.title ?? "Title"}
                      textCounter
                      onChange={handleTitle}
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col px-1 gap-1 h-[calc(100vh-200px)]">
                    {tasks.length > 0 ? (
                      tasks.map((task, index) => (
                        <TaskCard
                          task={task}
                          key={task.id}
                          onChange={onTaskChange}
                          index={index}
                        />
                      ))
                    ) : (
                      <div className="text-center text-gray-400 py-4">
                        No tasks in this column
                      </div>
                    )}
                  </CardContent>
                </Card>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default React.memo(BoardColumn);
