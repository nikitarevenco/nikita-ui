import type { Meta } from "@storybook/react";

import { Skeleton } from "@/components/skeleton";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      ...docs,
      controls: {
        exclude: /.*/gv,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export function Example() {
  return (
    <div className="flex flex-col space-y-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Skeleton className="size-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-2 w-[100px]" />
            <Skeleton className="h-2 w-[250px]" />
            <Skeleton className="h-2 w-[220px]" />
            <Skeleton className="h-2 w-[180px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
