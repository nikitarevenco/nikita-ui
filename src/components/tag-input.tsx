import React from "react";
import {
  type Key,
  LabelContext,
  type TextFieldProps,
} from "react-aria-components";
import { type ListData } from "react-stately";
import { twMerge } from "tailwind-merge";

import { Input, TextField } from "./field";
import { Tag, TagGroup, TagList } from "./tag-group";

type TagItem = {
  id: number;
  name: string;
};

type ContextType = {
  list: ListData<TagItem>;
  onTagAdd?: (tag: TagItem) => void;
  onTagRemove?: (tag: TagItem) => void;
};

const TagInputContext = React.createContext<ContextType | null>(null);

function useTagInputContext() {
  const context = React.useContext(TagInputContext);

  if (!context) {
    throw new Error("<TagInputContext.Provider> is required");
  }

  return context;
}

export type TagInputProps = {
  children: React.ReactNode;
  className?: string;
} & Omit<ContextType, "tagGroupId"> &
  TextFieldProps;

export function TagsInputField({
  list,
  name,
  onTagRemove,
  onTagAdd,
  ...props
}: TagInputProps) {
  return (
    <TagInputContext.Provider value={{ list, onTagAdd, onTagRemove }}>
      <TextField {...props} />
      {name && (
        <input
          name={name}
          hidden
          readOnly
          value={list.items.map(({ name: listName }) => listName).join(",")}
        />
      )}
    </TagInputContext.Provider>
  );
}

export function TagsInput({ className }: { className?: string }) {
  const [inputValue, setInputValue] = React.useState("");
  const { list, onTagAdd, onTagRemove } = useTagInputContext();

  const deleteLast = React.useCallback(() => {
    if (list.items.length === 0) {
      return;
    }

    const lastKey = list.items.at(-1);

    if (lastKey) {
      list.remove(lastKey.id);
      onTagRemove?.(list.getItem(lastKey.id));
    }
  }, [list, onTagRemove]);

  function addTag() {
    const tagNames = inputValue.split(/[,;]/v);

    for (const tagName of tagNames) {
      const formattedName = tagName
        .trim()
        .replaceAll(/\s{2,}/gv, " ")
        .replaceAll(/[\t\n\r]|\\t|\\r|\\n/gv, "");

      if (formattedName === "") {
        continue;
      }

      const hasTagExists = list.items.find(
        ({ name }) =>
          name.toLocaleLowerCase() === formattedName.toLocaleLowerCase(),
      );

      if (!hasTagExists) {
        const tag = {
          id: (list.items.at(-1)?.id || 0) + 1,
          name: formattedName,
        };

        list.append(tag);
        onTagAdd?.(tag);
      }
    }

    setInputValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === "," || e.key === ";") {
      e.preventDefault();
      addTag();
    }

    if (e.key === "Backspace" && inputValue === "") {
      deleteLast();
    }
  }

  function handleRemove(keys: Set<Key>) {
    list.remove(...keys);
    onTagRemove?.(list.getItem([...keys].at(0)));
  }

  const { id: labelId } = (React.useContext(LabelContext) ?? {}) as {
    id?: string;
  };

  return (
    <TagGroup
      aria-labelledby={labelId}
      onRemove={handleRemove}
      className={twMerge(className, "w-full")}
      data-ui="control"
    >
      <div
        className={twMerge(
          "flex min-h-9 items-center rounded-md shadow-sm",
          "border has-[input[data-focused=true]]:border-blue-500",
          "has-[input[data-invalid=true][data-focused=true]]:border-blue-500 has-[input[data-invalid=true]]:border-destructive",
          "has-[input[data-focused=true]]:ring-1 has-[input[data-focused=true]]:ring-blue-500",
        )}
      >
        <div className="inline-flex flex-1 flex-wrap items-center gap-1 px-1.5 py-[5px]">
          <TagList items={list.items} className="contents">
            {(item) => <Tag>{item.name}</Tag>}
          </TagList>

          <div className="flex flex-1">
            <Input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              className="border-0 px-0.5 py-0 shadow-none focus:ring-0"
            />
          </div>
        </div>
      </div>
    </TagGroup>
  );
}
