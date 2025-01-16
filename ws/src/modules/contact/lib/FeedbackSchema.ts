import * as z from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const FeedbackSchema = (t: (arg: string) => string) =>
  z.object({
    name: z
      .string()
      .min(2, { message: t("errors.nameToShort") })
      .max(20, { message: t("errors.nameToLong") }),
    phone: z.string().refine((value) => isValidPhoneNumber(value), {
      message: t("errors.phone"),
    }),
    message: z.string().max(5000, { message: t("errors.message") }),
  });
