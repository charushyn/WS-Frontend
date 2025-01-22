"use server";
import { cookies } from "next/headers";
import { Lang } from "../types/lang";
import langs from "../data/langs";

function isLang(value: string | undefined): boolean {
  return value ? (langs as Array<string>).includes(value) : false;
}

async function getLang() {
  const cookieStore = await cookies();
  const res = cookieStore.get("NEXT_LOCALE");
  if (res && isLang(res.value)) {
    return res?.value as Lang;
  } else {
    return "pl" as Lang;
  }
}

export default getLang;
