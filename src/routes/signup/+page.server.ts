import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request, locals: { supabase } }) => {
    const data = await request.formData();
    const first_name = data.get("firstname") as string;
    const last_name = data.get("lastname") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    let { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: first_name,
          last_name: last_name,
        },
      },
    });

    if (error) {
      return {
        error: error.message,
      };
    }

    return {
      message: "Please confirm your email to continue.",
    };
  },
};
