import { SectionTitle } from "@/ui/typography/typography";
import { SearchForm } from "@/components/SearhForm/SearchForm";
import { CustomerList } from "@/components/CustomerList/CustomerList";

export default function Pets() {
  return (
    <>
      <section className="container m-13.5 mx-auto">
        <article className="bg-(--color-bg-primary) px-9 py-8 mb-3">
          <SectionTitle name="Customers and Pets" additionalClasses="mb-4" />
          <SearchForm />
        </article>

        <article>
          <CustomerList />
        </article>
      </section>
    </>
  );
}
