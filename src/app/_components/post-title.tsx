import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="mb-8 max-w-4xl text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
      {children}
    </h1>
  );
}
