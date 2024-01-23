"use client";
import { ChatTeardropDots } from "@phosphor-icons/react/dist/ssr";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";
export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="group flex h-12 items-center rounded-full bg-brand-500 px-3 text-gray-50">
        <ChatTeardropDots size={12} className="h-6 w-6 " />
        <span className="max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs ">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
