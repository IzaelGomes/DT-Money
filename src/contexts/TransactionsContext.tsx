import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome"
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchLoadTransactions: (query: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode; 
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction({category, description, price, type}: CreateTransactionInput) {
    const response = await api.post("/transactions", {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    });

    setTransactions(previousStateData => [...previousStateData, response.data])
  }

  async function fetchLoadTransactions(query?: string) {
    const { data } = await api.get("/transactions", {
      params: {
        q: query,
      },
    });

    setTransactions(data);
  }

  useEffect(() => {
    fetchLoadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchLoadTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
