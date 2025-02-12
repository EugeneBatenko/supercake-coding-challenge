import { useQuery } from "@tanstack/react-query";
import { CustomerProps } from "@/types";

type ApiResponse = {
  customers: CustomerProps[];
};

export const useSearchCustomers = ({
  searchText,
  filters,
}: {
  searchText: string;
  filters: string[];
}) => {
  return useQuery({
    queryKey: ["customers", searchText, filters],
    queryFn: async () => {
      const filtersQuery = `species=${filters.map((filter) => encodeURIComponent(filter)).join(",")}`;
      const response = await fetch(
        `/api/customers?searchText=${searchText}&${filtersQuery}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }
      return (await response.json()) as ApiResponse;
    },
  });
};
