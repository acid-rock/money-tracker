import type { EmailOtpType } from "@supabase/supabase-js";
import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url, locals: { supabase } }) => {
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") as EmailOtpType | null;
  const next = url.searchParams.get("next") ?? "/";

  // URL clean up function
  const redirectTo = new URL(url);
  redirectTo.pathname = next;
  redirectTo.searchParams.delete("token_hash");
  redirectTo.searchParams.delete("type");

  // token_hash and type verification
  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({ type, token_hash });
    if (!error) {
      redirectTo.searchParams.delete("next");
      redirect(303, redirectTo);
    }
  }

  // TODO: Make proper login error page.
  redirectTo.pathname = "/auth/error";
  redirect(303, redirectTo);
};
