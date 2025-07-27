import React from "react";

const style = {
  primary: "auth-button",
  secondary: "auth-button animate-pulse",
};

export default function Button({
  buttonType = "primary",
  children,
  ...rest
}: {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={style[buttonType]} {...rest}>
      {children}
    </button>
  );
}
