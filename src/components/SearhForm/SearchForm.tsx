"use client";

import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useCustomerStore } from "@/store/useCustomerStore";
import { Input } from "@/ui/form";
import { Dropdown } from "@/ui/dropdown/Dropdown";
import searchIcon from "@/icons/search.svg?url";
import { Filters } from "@/ui/form/Filters";
import { useDebounce } from "@/hooks/useDebounce";

export const SearchForm: FC = () => {
  const [localSearchText, setLocalSearchText] = useState("");
  const setSearchText = useCustomerStore((state) => state.setSearchText);
  const debouncedSearchText = useDebounce(localSearchText, 1000);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLocalSearchText(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchText || debouncedSearchText === "") {
      setSearchText(debouncedSearchText);
    }
  }, [debouncedSearchText, setSearchText]);

  return (
    <form action="" className="flex flex-col md:flex-row gap-4">
      <Input
        type="search"
        placeholder="Search by ID, name, email or phone"
        additionalClasses="w-[312px] ps-10"
        style={{
          background: `url(${searchIcon.src}) no-repeat 14px 50% white`,
        }}
        value={localSearchText}
        onChange={handleSearchInputChange}
      />
      <Dropdown name="Pets">
        <Filters />
      </Dropdown>
    </form>
  );
};
