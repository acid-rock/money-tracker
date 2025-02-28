import type { Account } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  const supabase = (await parent()).supabase;

  let account: Account = {
    income: 0,
    expense: 0,
    total: 0,
    budget: 0,
  };

  let { data: transactions, error } = await supabase
    .from("transactions")
    .select("*")
    .order("created_at", { ascending: false });

  if (!transactions) {
    transactions = [];
  }

  if (error) {
    return { error: error.message };
  }

  transactions.forEach(({ amount, type }) => {
    if (type === "income") {
      account.income += amount;
    } else if (type === "expense") {
      account.expense += amount;
    }
  });

  account.total = account.income - account.expense;

  return { transactions, account };
};
