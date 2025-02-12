import React, { FC, useState } from "react";
import { Button } from "@/ui/buttons/buttons";
import { Tag } from "@/ui/tags/Tag";
import { useDropdownStore } from "@/store/useDropdownStore";
import { useCustomerStore } from "@/store/useCustomerStore";

const initialTags = [
  { name: "Any Animal", tag: "", defaultValue: true, isActive: true },
  { name: "Dogs", tag: "dog", isActive: false },
  { name: "Cats", tag: "cat", isActive: false },
  { name: "Birds", tag: "bird", isActive: false },
  { name: "Hamsters", tag: "hamster", isActive: false },
  { name: "Rats", tag: "rat", isActive: false },
];

export const Filters: FC = () => {
  const [tags, setTags] = useState(initialTags);
  const { closeDropdown } = useDropdownStore();
  const { setFilters } = useCustomerStore();

  const toggleActiveTag = (selectedName: string) => {
    setTags((prevTags) => {
      const updatedTags = prevTags.map((tag) => {
        // If "Any Animal" is chosen, deactivate all other tags
        if (selectedName === "Any Animal") {
          return { ...tag, isActive: tag.name === "Any Animal" };
        }

        // For all other tags, toggle the selected one
        if (tag.name === selectedName) {
          return { ...tag, isActive: !tag.isActive };
        }

        // Explicitly deactivate "Any Animal" if another tag is interacted with
        if (tag.name === "Any Animal") {
          return { ...tag, isActive: false };
        }

        // Leave all other tags unchanged
        return tag;
      });

      // Check if any tag (other than "Any Animal") is active
      const isAnyTagActive = updatedTags.some(
        (tag) => tag.name !== "Any Animal" && tag.isActive,
      );

      // If no tag is active, activate "Any Animal"
      if (!isAnyTagActive) {
        return updatedTags.map((tag) =>
          tag.name === "Any Animal" ? { ...tag, isActive: true } : tag,
        );
      }

      return updatedTags;
    });
  };

  const resetFilters = () => {
    setTags(initialTags);
    setFilters([]);
  };

  const applyFilters = () => {
    const activeTags = tags.filter((tag) => tag.isActive).map((tag) => tag.tag);
    setFilters(activeTags);
    closeDropdown();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white border border-[var(--color-border)] rounded-xl absolute"
    >
      <div className="mx-4 mt-5 flex flex-wrap gap-2 w-max max-w-77">
        {tags.map((tag) => (
          <Tag
            key={tag.name}
            name={tag.name}
            className={tag.isActive ? "active" : ""}
            onClick={() => toggleActiveTag(tag.name)}
            defaultValue={tag.defaultValue}
          />
        ))}
      </div>

      <hr className="my-4 w-full flex" />

      <div className="flex justify-between mx-4 mb-4">
        <Button type="button" color="secondary" onClick={resetFilters}>
          Reset
        </Button>
        <Button type="button" color="primary" onClick={applyFilters}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};
