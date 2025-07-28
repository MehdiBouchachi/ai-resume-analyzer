import React from "react";

export default function Label({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="text-sm font-medium text-dark-200" {...rest}>
      {children}
    </label>
  );
}
