"use client";

import { FC } from "react";
import { useCustomerStore } from "@/store/useCustomerStore";
import { useSearchCustomers } from "@/hooks/useSearchCustomers";

export const CustomerList: FC = () => {
  const { searchText, filters } = useCustomerStore();
  const { data, isPending, isError, error } = useSearchCustomers({
    searchText,
    filters,
  });
  const customers = data?.customers ?? [];

  if (!(searchText.length || filters.length)) {
    return (
      <div className="flex justify-center py-4">
        Type in search field or choose tags to start searching
      </div>
    );
  }

  return (
    <div>
      {isPending && <div className="flex justify-center py-4">Loading...</div>}

      {isError && (
        <div className="flex justify-center py-4 text-red-500">
          {error?.message || "An error occurred while fetching customers."}
        </div>
      )}

      {!(isPending || isError) && (
        <ul>
          {data && customers.length > 0 ? (
            customers.map((customer) => (
              <li
                key={customer.id}
                className="grid md:grid-cols-5 justify-between mb-1 bg-(--color-bg-primary) px-9 py-2 hover:bg-sky-100"
              >
                <span>{customer.id}</span>
                <span>{customer.name}</span>
                <span>{customer.email}</span>
                <span>{customer.phone}</span>
                <span>
                  {customer.pets.length > 0 ? (
                    customer.pets.map((pet) => (
                      <span key={pet.id} className="block">
                        {`${pet.name} (${pet.species})`}
                      </span>
                    ))
                  ) : (
                    <span>No pets</span>
                  )}
                </span>
              </li>
            ))
          ) : (
            <li className="bg-(--color-bg-primary) px-9 py-2">
              No customers found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};
