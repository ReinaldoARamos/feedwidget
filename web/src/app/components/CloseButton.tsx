import { Popover } from "@headlessui/react";
import { X } from "lucide-react";

export function CloseButton() {
return (
    <Popover.Button
    className="absolute right-5 top-5 text-zinc-400  transition duration-300 hover:text-zinc-100"
    title="Fechar formulário de feedback"
  >
    <X className="w-4 h-4 " />
  </Popover.Button>
)

}
