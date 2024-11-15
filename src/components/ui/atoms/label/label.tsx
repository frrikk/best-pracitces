import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ children, ...props }: LabelProps) => {
  return <label {...props}>{children}</label>;
};

Label.displayName = "Label";

export { Label };
