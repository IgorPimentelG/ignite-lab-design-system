import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
    children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
    return(
        <div className={clsx(
            "flex items-center h-12 py-4 px-3 rounded bg-gray-800 w-full gap-3 focus-within:ring-2 border-cyan-300"
        )}>
            {children}
        </div>
    );
}

const TextInputDefault = (props: TextInputProps) => {
    return(
        <input className={clsx(
            "bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
        )}
            {...props}
        />
    );
}

const TextInputIcon = ({children}: TextInputRootProps) => {
    return(
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    );
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputDefault,
    Icon: TextInputIcon,
}