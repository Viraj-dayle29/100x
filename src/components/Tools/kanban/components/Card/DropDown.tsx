import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Ellipsis } from "lucide-react";

export const ACTIONS = {
  DELETE: "delete",
  EDIT: "edit",
  STAR: "star",
} as const;

export type ActionType = (typeof ACTIONS)[keyof typeof ACTIONS];

interface DropdowMenuInterface {
  onSelect: (action: ActionType) => void;
  className?: string;
}

export function DropdownMenuDemo({ onSelect, className }: DropdowMenuInterface) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={cn(className, "focus:outline-none")}
      >
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50 bg-[#282e33] text-white font-light">
        <DropdownMenuLabel>Setting</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => onSelect(ACTIONS.DELETE)}>
            Delete
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelect(ACTIONS.EDIT)}>
            Edit
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelect(ACTIONS.STAR)}>
            Star
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>
            Send card
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
