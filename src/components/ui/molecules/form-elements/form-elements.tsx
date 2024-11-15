import { RadioGroup, RadioGroupItem } from "@/components/ui/atoms/radio-group";
import { Label } from "@/components/ui/atoms/label";
import { cn } from "@/utils/cn";
import { Input } from "@/components/ui/atoms/input";
import { createContext, ReactNode, useContext } from "react";
import { Button } from "@/components/ui/atoms/button";

const RadioGroupContext = createContext<boolean | null>(null);

type RadioGroupMoleculeProps = {
  children: ReactNode[];
};

export function RadioGroupMolecule({ children }: RadioGroupMoleculeProps) {
  return (
    <RadioGroupContext.Provider value={true}>
      <RadioGroup>{children}</RadioGroup>
    </RadioGroupContext.Provider>
  );
}

type RadioMoleculeProps = {
  options: {
    value: string;
    label: string;
  };
};

export function RadioMolecule({ options }: RadioMoleculeProps) {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error(
      "FormElement.Radio must be used together with FormElement.RadioGroup",
    );
  }

  return (
    <div>
      <Label className={cn("flex gap-2 items-center")}>
        <RadioGroupItem {...options} />
        {options.label}
      </Label>
    </div>
  );
}

type InputMoleculeProps = {
  options: {
    label: string;
    name: string;
    placeholder?: string;
  };
};

export function InputMolecule({ options }: InputMoleculeProps) {
  return (
    <Label>
      {options.label}
      <Input {...options} />
    </Label>
  );
}

type FormSubmitButtonMoleculeProps = {
  text: string;
};

export function FormSubmitButton({ text }: FormSubmitButtonMoleculeProps) {
  return <Button>{text}</Button>;
}
