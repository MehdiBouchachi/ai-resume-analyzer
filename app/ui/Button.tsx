import React from "react";

const style = {
  primary: "primary-button",
  "auth-primary": "auth-button",
  "auth-secondary": "auth-button animate-pulse",
};

export default function Button({
  buttonType = "primary",
  children,
  ...rest
}: {
  buttonType?: "primary" | "auth-primary" | "auth-secondary";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={style[buttonType]} {...rest}>
      {children}
    </button>
  );
}
