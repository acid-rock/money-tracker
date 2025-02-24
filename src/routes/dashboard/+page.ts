import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  const supabase = (await parent()).supabase;
  let expense = 0;
  let income = 0;

  let { data: transactions, error } = await supabase
    .from("transactions")
    .select("*");

  if (!transactions) {
    transactions = [];
  }

  if (error) {
    return { error: error.message };
  }

  transactions.forEach(({ amount, type }) => {
    if (type === "income") {
      income += amount;
    } else if (type === "expense") {
      expense += amount;
    }
  });

  let total = income - expense;

  return { transactions, income, expense, total };
};
