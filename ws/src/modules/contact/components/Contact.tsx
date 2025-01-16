"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/modules/core/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/core/ui/form";
import { Input } from "@/modules/core/ui/input";

import parsePhoneNumber from "libphonenumber-js";
import { FeedbackSchema } from "../lib/FeedbackSchema";
import { useTranslations } from "next-intl";
import { H4, P } from "@/modules/core/ui/typography";
import { Textarea } from "@/modules/core/ui/textarea";

export default function ContactForm() {
  const t = useTranslations("contact");

  const formSchema = FeedbackSchema(t);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = parsePhoneNumber(values.phone);
    values.phone = phoneNumber ? phoneNumber.number.toString() : "";
  }

  return (
    <div className="flex flex-col px-5 py-12" id="contact">
      <H4 className="text-center mt-12 mb-6">{t("title")}</H4>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 t-s:w-[40%]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="relative flex flex-row w-fit">
                  <FormLabel>{t("name.label")}</FormLabel>
                  {t("name.required") && (
                    <P className="text-red-700 absolute top-[-6px] right-[-12px]">
                      *
                    </P>
                  )}
                </div>
                <FormControl>
                  <Input placeholder={t("name.placeholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="relative flex flex-row w-fit">
                  <FormLabel>{t("phone.label")}</FormLabel>
                  {t("phone.required") && (
                    <P className="text-red-700 absolute top-[-6px] right-[-12px]">
                      *
                    </P>
                  )}
                </div>

                <FormControl>
                  <Input placeholder={t("phone.placeholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className="relative flex flex-row w-fit">
                  <FormLabel>{t("message.label")}</FormLabel>
                  {t("message.required") && (
                    <P className="text-red-700 absolute top-[-6px] right-[-12px]">
                      *
                    </P>
                  )}
                </div>

                <FormControl>
                  <Textarea
                    className="min-h-[150px]"
                    placeholder={t("message.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            {t("button")}
          </Button>
        </form>
      </Form>
    </div>
  );
}
