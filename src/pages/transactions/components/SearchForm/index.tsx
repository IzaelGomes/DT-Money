import { MagnifyingGlass } from "phosphor-react";
import { SerchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const  fetchLoadTransactions  = useContextSelector(TransactionsContext, (context) => {
    return context.fetchLoadTransactions
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

    async function handleSearchTransaction({query}: SearchFormInputs) {
    await fetchLoadTransactions(query);
  }

  return (
    <SerchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        {" "}
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SerchFormContainer>
  );
}
