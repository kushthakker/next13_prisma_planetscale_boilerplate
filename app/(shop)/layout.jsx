import Link from "next/link";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <div className="w-screen h-screen grid grid-cols-9">
      <div className="w-full h-full bg-black col-span-2 flex flex-col gap-4">
        <div className="text-5xl font-bold text-center w-full h-full text-white">
          <Link href="/checkout">Checkout</Link>
        </div>
        <div className="text-5xl font-bold text-center w-full h-full text-white">
          <Link href="/product/1">Product</Link>
        </div>
      </div>
      <div className="w-full h-full col-span-7">{children}</div>
    </div>
  );
}
