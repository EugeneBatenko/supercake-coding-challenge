export type PetProps = {
  id: string;
  name: string;
  species: string;
};

export type CustomerProps = {
  id: string;
  name: string;
  email: string;
  phone: string;
  pets: PetProps[];
};

export type CustomerStore = {
  searchText: string;
  setSearchText: (text: string) => void;

  filters: string[];
  setFilters: (filters: string[]) => void;
};
