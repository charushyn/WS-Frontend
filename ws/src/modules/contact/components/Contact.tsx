"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/modules/core/ui/button";
import { FadeLoader } from "react-spinners";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/core/ui/form";
import { Input } from "@/modules/core/ui/input";
import { FeedbackSchema } from "../lib/FeedbackSchema";
import { useTranslations } from "next-intl";
import { H2, P } from "@/modules/core/ui/typography";
import { Textarea } from "@/modules/core/ui/textarea";
import { useSendMeesageMutation } from "@/services/rtk/backend";

import { useToast } from "@/modules/core/hooks/use-toast";

export default function ContactForm() {
  const t = useTranslations("contact");

  const t_result_ui = useTranslations("contact.result-ui");
  const { toast } = useToast();

  const [sendMessage, { isLoading, isError, isSuccess }] =
    useSendMeesageMutation();

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
    await sendMessage({
      name: values.name,
      phone: values.phone,
      message: values.message,
    });
    if (isSuccess) {
      form.reset();
      toast({
        title: t_result_ui("success.title"),
        description: t_result_ui("success.description"),
      });
    }
    if (isError) {
      toast({
        title: t_result_ui("error.title"),
        description: t_result_ui("error.description"),
      });
    }
  }

  return (
    <div className="flex flex-col px-5 pb-12 t-m:px-10" id="contact">
      <H2 className="text-center my-12">{t("title")}</H2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full t-s:w-[70%] mx-auto relative"
        >
          {/* loading bar */}
          {isLoading && (
            <div className="absolute z-[1] w-full h-full bg-opacity-50 rounded-[1.5rem] bg-white flex justify-center items-center">
              <FadeLoader />
            </div>
          )}
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
