import { useState } from "react";
import { ACTIONS, ActionType, DropdownMenuDemo } from "./DropDown";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Title from "../Title";
import Category, { CategeoryProps, valueItem } from "./Category";
import { cn } from "@/lib/utils";
import { Draggable } from "@hello-pangea/dnd";
import React from "react";
import { useTaskById } from "../../context/TaskContext";
import { useUpdateTask } from "../../tanStack/Task.Tanstack";

// export interface Task {
//   id: string;
//   columnId: string;
//   textValue?: string;
//   star?: boolean;
//   date: string;
//   categeories?: CategeoryProps[];
//   tpos: number;
// }

type TaskId = string;

export type TaskType = "Task";

interface TaskCardProps {
  index: number;
  taskId: TaskId;
  disable?: boolean;
}

export interface TaskDragData {
  type: TaskType;
  taskId: TaskId;
}

const StarIndicator = ({ isStar }: { isStar: boolean }) =>
  isStar ? (
    <span className={cn("ml-2 text-yellow-400", "cursor-default")}>⭐</span>
  ) : null;

const TaskCard: React.FC<TaskCardProps> = ({ taskId, index, disable }) => {
  const task = useTaskById(taskId);
  const { mutate } = useUpdateTask();
  if (!task) return <div>Task not found</div>;

  const [isHover, setHoverState] = useState<boolean>(false);

  const handleDropDownMenu = (value: ActionType) => {
    if (value === ACTIONS.STAR) {
      mutate({
        taskId,
        updates: { star: !task.star },
      });
    }
  };

  const handleTitle = (value: string) => {
    mutate({
      taskId,
      updates: { textValue: value },
    });
  };

  // const handleSelectedCategeory = (
  //   categoryName: string,
  //   value: valueItem[]
  // ) => {
  //   const updatedCategories = task.categeories?.map((cat) =>
  //     cat.name === categoryName ? { ...cat, preSelected: value } : cat
  //   );

  //   onChange?.({
  //     ...task,
  //     categeories: updatedCategories,
  //   });

  //   // update task
  // };

  return (
    <Draggable
      draggableId={taskId.toString()}
      index={index}
      isDragDisabled={disable}
    >
      {(provided, snapshot) => {
        const isDragging = snapshot.isDragging;
        const style = {
          ...provided.draggableProps.style,
          opacity: isDragging ? 0.5 : 1,
        };

        return (
          <Card
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={style}
            className={cn(
              "w-[275px] rounded-sm bg-black text-white gap-0 h-auto py-2 border-transparent",
              isHover && !isDragging && "bg-black/85 border border-gray-custom",
              snapshot.isDragging && "ring-2 ring-primary z-50",
              disable && "opacity-60 cursor-not-allowed"
            )}
            onMouseEnter={() => !disable && setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
            aria-disabled={disable}
          >
            <CardHeader className={cn("px-3 pt-0")}>
              <div className="flex justify-between">
                <div className="flex justify-center items-center">
                  <p className="uppercase text-white text-md">{task.date}</p>
                  <StarIndicator isStar={task.star} />
                </div>
                <div>
                  <DropdownMenuDemo
                    onSelect={handleDropDownMenu}
                    className={isHover ? "bg-[#1B1B1B] h-6 w-6" : ""}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-3">
              <Title
                placeHolder="Enter your details"
                inputClass="text-white outline-2"
                outputClass={cn("text-white", isHover && "underline")}
                maxLength={150}
                textCounter
                textValue={task.textValue ?? "Title"}
                className="mb-2"
                onChange={handleTitle}
              />
              <div className="flex flex-col gap-1">
                {/* {task.categeories?.length
                  ? task.categeories.map((item) => (
                      <Category
                        key={`category-${item.name}-${task.id}`}
                        name={item.name}
                        mode={item.mode}
                        value={item.value}
                        isHover={isHover}
                        preSelected={item.preSelected}
                        onChange={(selected) =>
                          handleSelectedCategeory(item.name, selected)
                        }
                      />
                    ))
                  : null} */}
              </div>
            </CardContent>
          </Card>
        );
      }}
    </Draggable>
  );
};

export default React.memo(TaskCard);
