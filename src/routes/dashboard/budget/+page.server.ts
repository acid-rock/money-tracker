import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  set: async ({ request, locals: { session, supabase } }) => {
    const data = await request.formData();
    const amount = Number(data.get("amount"));
    const owner_id = session?.user.id;

    let { error } = await supabase.from("budgets").insert({ amount, owner_id });
    if (error) {
      console.error(error);
      return {
        error: error.message,
      };
    }

    return redirect(303, "/dashboard/budget");
  },

  edit: async ({ request, locals: {session, supabase}}) => {
    
  }
};
