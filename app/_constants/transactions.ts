import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
  [TransactionPaymentMethod.OTHER]: "other.svg",
};

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};
export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};
export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];
export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label: "Transferência Bancária",
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: "Boleto Bancário",
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: "Dinheiro",
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: "Cartão de Crédito",
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: "Cartão de Débito",
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: "Outros",
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: "Pix",
  },
];
export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: "Educação",
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: "Entretenimento",
  },
  {
    value: TransactionCategory.FOOD,
    label: "Alimentação",
  },
  {
    value: TransactionCategory.HEALTH,
    label: "Saúde",
  },
  {
    value: TransactionCategory.HOUSING,
    label: "Moradia",
  },
  {
    value: TransactionCategory.OTHER,
    label: "Outros",
  },
  {
    value: TransactionCategory.SALARY,
    label: "Salário",
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: "Transporte",
  },
  {
    value: TransactionCategory.UTILITY,
    label: "Utilidades",
  },
];
