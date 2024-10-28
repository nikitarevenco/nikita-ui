import { type TextProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Heading, type HeadingProps } from "./heading";
import { Text } from "./text";

export function EmptyState({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      className={twMerge(
        "flex h-full w-full flex-col items-center justify-center gap-1 p-4 text-center @container",
        className,
      )}
    />
  );
}

export function EmptyStateIcon({
  className,
  children,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      className={twMerge(
        "mb-2 flex max-w-32 items-center justify-center @md:max-w-40",
        "[&>svg:not([class*=text-])]:text-muted [&>svg]:h-auto [&>svg]:min-w-12 [&>svg]:max-w-full",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function EmptyStateHeading({
  className,
  level = 2,
  ...props
}: HeadingProps) {
  return (
    <Heading
      {...props}
      level={level}
      className={twMerge("text-balance", className)}
    />
  );
}

export function EmptyStateDescription({ className, ...props }: TextProps) {
  return (
    <Text
      {...props}
      className={twMerge("max-w-prose text-balance", className)}
    />
  );
}

export function EmptyStateActions({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      className={twMerge(
        "mt-3 flex flex-col items-center justify-center gap-4 p-2",
        className,
      )}
    />
  );
}
