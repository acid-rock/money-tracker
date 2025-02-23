import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    let { error } = await locals.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return {
        error: error.message,
      };
    } else {
      redirect(303, "/");
    }
  },
};
