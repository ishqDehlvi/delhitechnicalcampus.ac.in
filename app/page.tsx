import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Hero } from "@/components/hero";

export default function IndexPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <Hero />
      </div>
    </div>
  );
}
