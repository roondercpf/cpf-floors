"use client"
// React and Next.js
import { Ref, forwardRef, useState, ReactNode } from "react"
// Types
import { UseFormReturn } from "react-hook-form";
// Dropdown Elements
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface GeneralDropdownProps {
    items: any[];
    formSetValue: UseFormReturn<any>["setValue"];
    field: string;
    formValue: string | undefined;
    resetFlag?: boolean;
    title: string;
    placeholder: string;
    align?: "start" | "center" | "end";
    className?: string;
    props?: ReactNode;
}

export const GeneralDropwdown = forwardRef(({
    items,
    formSetValue,
    field,
    formValue,
    resetFlag,
    title,
    placeholder,
    align = "center",
    className,
    ...props
}: GeneralDropdownProps, ref: Ref<HTMLDivElement>) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div ref={ref} className={`flex flex-col gap-2 ${className}`}>
            <Select value={formValue} onValueChange={(currentValue) => {
                formSetValue(field, currentValue)
            }}>
                <div className="w-full">
                    <label className="text-xs text-neutral-400">{title}</label>
                    <SelectTrigger className="w-[240px] h-[60px] text-neutral-700">
                        <SelectValue aria-label={formValue} placeholder={placeholder}>
                            {formValue ? items.find(item => item === formValue) : placeholder}
                        </SelectValue>
                    </SelectTrigger>
                </div>
                <SelectContent className="w-[95%]" align={align}>
                    <SelectGroup>
                        {items.map((item, index) => (
                            <SelectItem
                                value={item as string}
                                key={Math.random() * index * 10}
                                className="text-ellipsis truncate pr-2"
                            >
                                {`${item}`}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
});

GeneralDropwdown.displayName = "GeneralDropdown"