import {
  createBrowserClient,
  createServerClient,
  isBrowser,
} from "@supabase/ssr";
import type { LayoutLoad } from "./$types";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_KEY;

export const load: LayoutLoad = async ({ data, depends, fetch }) => {
  depends("supabase:auth");

  const supabase = isBrowser()
    ? createBrowserClient(SUPABASE_URL, SUPABASE_API_KEY, {
        global: {
          fetch,
        },
      })
    : createServerClient(SUPABASE_URL, SUPABASE_API_KEY, {
        global: {
          fetch,
        },
        cookies: {
          getAll: () => {
            return data.cookies;
          },
        },
      });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return {
    supabase,
    session,
    user,
  };
};
