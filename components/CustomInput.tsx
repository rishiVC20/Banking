import React from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "react-hook-form";
// const form = useForm();
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface Custom {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }) => {
  //   const newform = useForm<z.infer<typeof formSchema>>({
  //     resolver: zodResolver(formSchema),
  //     defaultValues: {
  //       name: "",
  //     },
  //   });
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={label}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
