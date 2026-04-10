"use client";;
import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset";
import { cn } from "@/lib/utils";

export function Fieldset(
  {
    className,
    ...props
  }
) {
  return (
    <FieldsetPrimitive.Root
      className={cn("flex w-full max-w-64 flex-col gap-6", className)}
      data-slot="fieldset"
      {...props} />
  );
}
export function FieldsetLegend(
  {
    className,
    ...props
  }
) {
  return (
    <FieldsetPrimitive.Legend
      className={cn("font-semibold text-foreground", className)}
      data-slot="fieldset-legend"
      {...props} />
  );
}

export { FieldsetPrimitive };
