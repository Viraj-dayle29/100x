import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tags } from 'lucide-react';
import { Mode, valueItem } from "./Category";
import { cn } from "@/lib/utils";

interface CategoryPopoverProps {
  values: valueItem[];
  onValueClick: (item: valueItem) => void;
  selectedValues: valueItem[];
  mode: Mode;
}

const CategeoryPopover: React.FC<CategoryPopoverProps> = ({
  values,
  onValueClick,
  selectedValues,
}) => {
  const isSelected = (item: valueItem) =>
    selectedValues.some((val) => val.valueName === item.valueName);
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Tags className="h-3 w-3 cursor-default" />
        </PopoverTrigger>
        <PopoverContent className="max-w-[240px] p-1 cursor-default">
          <div className="flex gap-2 flex-wrap justify-center">
            {values.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "px-2 py-1 text-xs text-black font-medium rounded-md cursor-pointer",
                  isSelected(item) ? "ring-2 ring-black" : ""
                )}
                onClick={() => onValueClick(item)}
                style={{ backgroundColor: item.color }}
              >
                {item.valueName}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CategeoryPopover;
