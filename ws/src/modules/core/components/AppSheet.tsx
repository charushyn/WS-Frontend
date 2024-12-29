import {
  // Calendar,
  // Home,
  // Inbox,
  // Search,
  // Settings,
  Info,
  Newspaper,
  LucideIcon,
  List,
  Table,
  MousePointer2,
} from "lucide-react";

import Image from "next/image";

import logoSVG from "@/../public/logo.svg";

import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
//   import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Description } from "@radix-ui/react-dialog";
import { P } from "../ui/typography";

type Item = {
  title: string;
  url: string;
  icon: LucideIcon;
};

// Menu items.
const Menu: Item[] = [
  {
    title: "Про нас",
    url: "/#about",
    icon: Info,
  },
  {
    title: "Каталог товарів",
    url: "/products",
    icon: List,
  },
  {
    title: "Таблиця ОПТ",
    url: "/table",
    icon: Table,
  },
  {
    title: "Наші магазини",
    url: "/#footer",
    icon: MousePointer2,
  },
  {
    title: "Політика ПО",
    url: "/privacypolicy",
    icon: Newspaper,
  },
];

export function AppSheet({
  open,
  toggleFn,
}: {
  open: boolean;
  toggleFn: () => void;
}) {
  return (
    <Sheet open={open} onOpenChange={() => toggleFn()}>
      <SheetContent className="">
        <SheetHeader className="mb-6">
          <SheetTitle>
            <Image
              src={logoSVG.src}
              width={0}
              height={0}
              className="w-fit h-fit"
              alt="10"
            ></Image>
          </SheetTitle>
          <Description className="">Навігація магазину</Description>
        </SheetHeader>
        <div className="flex flex-col gap-2">
          {Menu.map((item) => (
            <div key={item.title} className="">
              <a
                href={item.url}
                className="flex flex-row items-center gap-2"
                onClick={() => toggleFn()}
              >
                <item.icon />
                <P className=" underline">{item.title}</P>
              </a>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
