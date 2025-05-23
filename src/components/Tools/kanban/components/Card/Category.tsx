import React, { useState } from "react";
import CategeoryPopover from "./CategeoryPopover";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export enum Mode {
  SINGLE = "single",
  MULTIPLE = "multiple",
}

export interface valueItem {
  color: string;
  valueName: string;
}

export interface CategeoryProps {
  name: string;
  mode: Mode;
  value: valueItem[];
  preSelected?: valueItem[];
  isHover?: boolean;
  onChange?: (selected: valueItem[]) => void;
}

const Category: React.FC<CategeoryProps> = ({
  name,
  mode,
  value,
  isHover,
  preSelected = [],
  onChange,
}) => {
  const [selectedValues, setSelectedValues] = useState<valueItem[]>([
    ...preSelected,
  ]);

  const handleValueClick = (item: valueItem) => {
    let newSelected: valueItem[];

    if (mode === Mode.SINGLE) {
      newSelected = [item];
    } else {
      const exists = selectedValues.some(
        (val) => val.valueName === item.valueName
      );
      newSelected = exists
        ? selectedValues.filter((val) => val.valueName !== item.valueName)
        : [...selectedValues, item];
    }

    setSelectedValues(newSelected);
    onChange?.(newSelected);
  };

  const removeItem = (item: valueItem) => {
    const newSelected = selectedValues.filter(
      (val) => val.valueName !== item.valueName
    );
    setSelectedValues(newSelected);
    onChange?.(newSelected);
  };

  return (
    <div className="w-auto h-auto">
      <div className="flex items-center gap-1">
        <p
          className={cn(
            "text-sm text-gray-300 cursor-default",
            isHover && "underline"
          )}
        >
          {name}
        </p>
        {isHover && (
          <CategeoryPopover
            values={value}
            onValueClick={handleValueClick}
            selectedValues={selectedValues}
            mode={mode}
          />
        )}
      </div>
      <div className="flex gap-1 flex-wrap">
        {selectedValues.map((item, index) => (
          <div
            key={index}
            className="px-2 py-1 text-xs text-black rounded-sm font-medium flex items-center gap-1"
            style={{ backgroundColor: item.color }}
          >
            {item.valueName}{" "}
            <button className="cursor-default" onClick={() => removeItem(item)}>
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
