"use client";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log(
    router,
    "router",
    pathname,
    "pathname",
    searchParams,
    "searchParams"
  );
  return (
    <>
      <div className="text-3xl">Test</div>
    </>
  );
}
