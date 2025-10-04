import { create } from "zustand";

type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: "income" | "expense";
};

type BudgetStore = {
  transactions: Transaction[];
  addTransaction: (t: Transaction) => void;
  removeTransaction: (id: string) => void;
  total: () => number;
  totalIncome: () => number;
  totalExpense: () => number;
};

export const useBudgetStore = create<BudgetStore>((set, get) => ({
  transactions: [],
  addTransaction: (t) =>
    set((state) => ({ transactions: [...state.transactions, t] })),
  removeTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((t) => t.id !== id),
    })),
  total: () => get().transactions.reduce((sum, t) => sum + t.amount, 0),
  totalIncome: () =>
    get()
      .transactions.filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0),
  totalExpense: () =>
    get()
      .transactions.filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0),
}));
