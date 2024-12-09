
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { CircleChevronDown , ChevronDown } from "lucide-react"


const Dropdown = () => {
    return (
        <>
            <DropdownMenu>
  <DropdownMenuTrigger>
    <div className="flex gap-1 items-center">
        <h1>English</h1>
        <span><ChevronDown size={20}/></span>
    </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel className="cursor-pointer">Arabic</DropdownMenuLabel>
    <DropdownMenuLabel className="cursor-pointer">Deutsch</DropdownMenuLabel>
  </DropdownMenuContent>
</DropdownMenu>

        </>
    )
}

export default Dropdown