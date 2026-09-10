"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Accessibility, Type, RefreshCcw } from "lucide-react";
import { motion, type MotionValue } from "framer-motion";

type IconColor<T extends string | number = string> = string | MotionValue<T>;

export function AccessibilityBar<T extends string | number = string>({
  iconColor,
}: {
  iconColor?: IconColor<T>;
}) {
  const changeFontSize = (delta: number) => {
    const root = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(root).fontSize);
    if ((delta > 0 && currentSize >= 20) || (delta < 0 && currentSize <= 12)) return;
    root.style.fontSize = `${currentSize + delta}px`;
  };

  const resetAccessibility = () => {
    document.documentElement.style.fontSize = "";
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          aria-label="Accessibility Settings"
          className="p-3 -m-3 group"
        >
          <motion.span style={{ color: iconColor }} className="group-hover:!text-adani-orange transition-colors flex">
            <Accessibility className="w-5 h-5 text-inherit" />
          </motion.span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed right-4 top-24 z-[70] w-72 rounded-xl bg-white p-6 shadow-2xl focus:outline-none border-t-4 border-adani-blue data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-right-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-right-1/2 data-[state=open]:slide-in-from-top-[48%] origin-top-right">
          <div className="flex justify-between items-center mb-6 border-b pb-2">
            <Dialog.Title className="text-lg font-bold font-heading text-adani-blue">
              Accessibility
            </Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label="Close" className="text-gray-400 hover:text-gray-800">
                <span className="sr-only">Close</span>
                &times;
              </button>
            </Dialog.Close>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-500 uppercase flex items-center gap-2">
                <Type className="w-4 h-4" /> Font Size
              </h4>
              <div className="flex gap-2 text-gray-700">
                <button
                  onClick={() => changeFontSize(-1)}
                  aria-label="Decrease font size"
                  className="flex-1 py-2 font-bold bg-gray-50 rounded border border-gray-200 hover:bg-gray-100 transition-colors text-sm"
                >
                  -A
                </button>
                <button
                  onClick={() => { document.documentElement.style.fontSize = ""; }}
                  aria-label="Reset font size"
                  className="flex-1 py-2 font-bold bg-gray-50 rounded border border-gray-200 hover:bg-gray-100 transition-colors text-base"
                >
                  A
                </button>
                <button
                  onClick={() => changeFontSize(1)}
                  aria-label="Increase font size"
                  className="flex-1 py-2 font-bold bg-gray-50 rounded border border-gray-200 hover:bg-gray-100 transition-colors text-lg"
                >
                  +A
                </button>
              </div>
            </div>

            <button
              onClick={resetAccessibility}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded transition-colors text-sm mt-4"
            >
              <RefreshCcw className="w-4 h-4" /> Reset Settings
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}