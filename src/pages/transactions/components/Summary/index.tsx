import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

import { useSummary } from "../../../../hooks/useSummary";
import { formatNumberToCurrency } from "../../../../utils/formatCurrency";

export function Summary() {
    const {income, outcome, total} = useSummary()
 

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{formatNumberToCurrency(income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{formatNumberToCurrency(outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#00b37e" />
        </header>

        <strong>{formatNumberToCurrency(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
