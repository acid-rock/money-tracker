import { redirect, type Actions, type ServerLoad } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request, locals: { session, supabase } }) => {
    const data = await request.formData();
    const type = data.get("type") as string;
    const amount = Number(data.get("amount"));
    const description = data.get("description") as string;
    const owner_id = session?.user.id;

    let { error } = await supabase
      .from("transactions")
      .insert([{ type, amount, description, owner_id }]);

    if (error) {
      console.error(error);
      return {
        error: error.message,
      };
    }

    redirect(303, "/dashboard");
  },
};
