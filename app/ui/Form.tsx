import React from "react";

export default function Form({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className="flex flex-col gap-4 mt-8" {...rest}>
      {children}
    </form>
  );
}
