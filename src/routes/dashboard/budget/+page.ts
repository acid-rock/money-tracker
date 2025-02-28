import type { Account } from "$lib/types";
import type { PageLoad } from "../$types";

export const load: PageLoad = async ({ parent }) => {
  const supabase = (await parent()).supabase;

  let account: Account = {
    income: 0,
    expense: 0,
    total: 0,
    budget: 0,
  };

  let { data, error } = await supabase.from("budgets").select("*");

  if (!data) return {};

  data.forEach((budget) => {
    account.budget += budget.amount;
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return { account };
};
