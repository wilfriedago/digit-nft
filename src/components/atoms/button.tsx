import { tv, type VariantProps } from "tailwind-variants"

import { tw, type TWComponentProps } from "@/utils/cx"

const buttonVariants = tv({
  base: "flex items-center justify-center gap-5 font-semibold transition active:transition-none disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      unstyled: "text-neutral-800 active:text-neutral-800/80 hocus:bg-neutral-50/90",
      primary: "bg-neutral-800 text-white active:text-white/80 hocus:bg-neutral-800/90",
      secondary: "bg-neutral-50 text-neutral-800 active:text-neutral-800/80 hocus:bg-neutral-50/90",
      outline: "border border-neutral-800 bg-transparent text-neutral-800 active:text-neutral-800/80"
    },
    size: {
      sm: "rounded-lg p-2 text-xs",
      md: "rounded-xl px-6.5 py-2.5 text-sm"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})

export type ButtonProps = TWComponentProps<"button"> & VariantProps<typeof buttonVariants>

export const Button = tw.button<ButtonProps>((props) => buttonVariants(props))
