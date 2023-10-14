import { Header } from "../../components/header";
import { SearchForm } from "./components/SearchForm";
import { Summary } from "./components/Summary";
import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

     
      <TransactionsContainer>
      <SearchForm/>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td> 13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td><PriceHighlight variant='outcome'> - R$ 12.000,00 </PriceHighlight></td>
              <td>Venda</td>
              <td> 13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant='income'>R$ 12.000,00</PriceHighlight></td>
              <td>Venda</td>
              <td> 13/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  );
}
