import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import * as React from "react";

const Input02 = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-02">
        Required input <span className="text-destructive">*</span>
      </Label>
      <Input id="input-02" type={type} required ref={ref} {...props} />
    </div>
  );
});
Input02.displayName = "Input";

export { Input02 };
