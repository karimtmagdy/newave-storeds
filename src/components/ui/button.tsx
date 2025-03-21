import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants, IButtonStateType } from "@/types/IButtonStateType";

const Button = React.memo(
  React.forwardRef<HTMLButtonElement, IButtonStateType>(
    ({ className, fullWidth, shape, icon, size, border, ...props }, ref) => {
      return (
        <button
          ref={ref}
          {...props}
          className={cn(
            buttonVariants({ fullWidth, shape, icon, size, border }),
            className,
          )}
        />
      );
    },
  ),
);

export default Button;
