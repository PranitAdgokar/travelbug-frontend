"use client";
import Image from "next/image";
import TripForm from "../components/TripForm";
import TripList from "../components/TripList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex justify-center flex-col gap-8">
          <h1 className="text-4xl font-bold text-center sm:text-left">
            Welcome to TravelBug
          </h1>
          <div className="flex justify-center">
            <Button className=" text-white" asChild>
              <Link href="/tripplan">Lets Plan</Link>
            </Button>
          </div>

          <div className="flex gap-4 items-center">
            {/* <TripForm /> */}
            {/* <TripList /> */}
          </div>
        </div>
      </main>
      <p className="text-center text-sm text-gray-500 row-start-3">
        Made with Luv. All rights reserved.
      </p>
    </div>
  );
}
