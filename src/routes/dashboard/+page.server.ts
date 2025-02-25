import { NUMBER_OF_PROCESSORS } from "$env/static/private";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  add: async ({ request, locals: { session, supabase } }) => {
    const data = await request.formData();
    const type = data.get("type") as string;
    const amount = Number(data.get("amount"));
    const description = data.get("description") as string;
    const owner_id = session?.user.id;

    let { error } = await supabase
      .from("transactions")
      .insert([{ type, amount, description, owner_id }]);

    if (error)
      return {
        error: error.message,
      };

    redirect(303, "/dashboard");
  },

  edit: async ({ request, locals: { supabase } }) => {
    const data = await request.formData();
    const type = data.get("type") as string;
    const description = data.get("description") as string;
    const amount = Number(data.get("amount"));
    const id = Number(data.get("id"));

    let { error } = await supabase
      .from("transactions")
      .update({ type, amount, description })
      .eq("id", id);

    if (error)
      return {
        error: error.message,
      };

    redirect(303, "/dashboard");
  },
};
