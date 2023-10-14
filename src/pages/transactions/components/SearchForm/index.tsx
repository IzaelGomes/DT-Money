import { MagnifyingGlass } from "phosphor-react";
import { SerchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SerchFormContainer>
            <input type="text" placeholder="Busque por transações" />
            <button type="submit"> <MagnifyingGlass size={20}/> Buscar</button>
        </SerchFormContainer>
    )
}