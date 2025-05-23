import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BoardContainerProps {
  children?: ReactNode;
  className?: string;
}

const BoardContainer: React.FC<BoardContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div>
      <ScrollArea>
        <div className={cn("flex gap-2 bg-black", className)}>{children}</div>
        <ScrollBar orientation="horizontal"/>
      </ScrollArea>
    </div>
  );
};

export default BoardContainer;
