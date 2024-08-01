import { type ClassValue, clsx } from "clsx"
import { createTwc, type TwcComponentProps } from "react-twc"
import { twMerge } from "tailwind-merge"

export const cx = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const tw = createTwc({ compose: cx })

export type TWComponentProps<T extends React.ElementType> = Omit<TwcComponentProps<T>, "className"> & {
  className?: string
}
