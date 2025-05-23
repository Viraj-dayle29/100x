import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TitleProps {
  placeHolder: string;
  inputClass?: string;
  outputClass?: string;
  maxLength?: number;
  textCounter?: boolean;
  textValue: string;
  className?: string;
  onChange?: (value: string) => void;
}

const Title: React.FC<TitleProps> = ({
  placeHolder,
  inputClass,
  outputClass,
  maxLength,
  textCounter,
  textValue,
  className,
  onChange,
}) => {
  const [value, setValue] = useState<string>(textValue);
  const [isEditing, setEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      (e.target as HTMLInputElement).blur();
    }
  };

  const handleBlur = () => {
    setEditing(false);
    if (value === "") {
      setValue(textValue);
    }
    onChange?.(value || textValue);
  };

  // Auto-resize logic
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `auto`;
      textarea.style.height = `${textarea.scrollHeight}px`; // Set to scrollHeight
    }
  }, [value, isEditing]);

  return (
    <div className={cn(className)}>
      {isEditing ? (
        <div>
          <textarea
            ref={textareaRef}
            className={cn(
              inputClass,
              "resize-none whitespace-pre-wrap break-words h-auto w-full overflow-hidden p-2",
              value === "" && "outline-red-600"
            )}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={value === "" ? placeHolder : ""}
            maxLength={maxLength}
            autoFocus
          />
          <div className="flex justify-between">
            {textCounter && (
              <div className="text-sm text-muted-foreground text-right">
                {value.length} / {maxLength}
              </div>
            )}
            {value === "" && (
              <p className="text-sm text-red-600 italic">
                Field cannot be empty
              </p>
            )}
          </div>
        </div>
      ) : (
        <span
          className={cn(
            outputClass,
            "whitespace-pre-wrap break-all cursor-pointer block"
          )}
          onClick={() => setEditing(true)}
        >
          {value}
        </span>
      )}
    </div>
  );
};

export default Title;
