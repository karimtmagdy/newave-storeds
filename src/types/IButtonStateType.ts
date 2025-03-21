import { cva, type VariantProps } from "@/lib/utils";
export interface IButtonStateType
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLButtonElement>;
  shape?: VariantProps<typeof buttonVariants>["shape"];
  size?: VariantProps<typeof buttonVariants>["size"];
  border?: VariantProps<typeof buttonVariants>["border"];
  icon?: VariantProps<typeof buttonVariants>["icon"];
  // color?: VariantProps<typeof buttonVariants>["color"];
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaHidden?: boolean;
  ariaErrorMessage?: string;
}
const base = ["", "", "", "", "", "", ""];
export const buttonVariants = cva(base, {
  variants: {
    fullWidth: { true: "w-full" },
    shape: {
      default: "rounded-md",
      rounded: "rounded-xl",
      pill: "rounded-full",
    },
    icon: {
      1: "w-6 h-6",
      2: "w-7 h-7",
      3: "w-8 h-8",
      4: "w-9 h-9",
      5: "w-10 h-10",
    },
    size: {
      xs: ["px-2", "h-6", "py-0.5", "text-xs"],
      sm: ["px-4", "h-7", "py-1", "text-sm"],
      md: ["px-6", "h-8", "py-1.5", "text-base"],
      lg: ["px-8", "h-9", "py-2", "text-lg"],
    },
    border: {
      dashed: "border-dashed",
      solid: "border",
      none: "border-transparent",
    },
  },
  defaultVariants: { shape: "default" },
});
