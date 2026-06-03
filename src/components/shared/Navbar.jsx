"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { label: "Browse jobs", href: "/browsejobs" },
    { label: "Company", href: "/company" },
    { label: "Contact", href: "/contact" },
  ];

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  console.log(session);

  return (
    <div className="bg-black text-white ">
      <nav className="flex justify-between p-4 container mx-auto">
        <div>Logo</div>
        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <p>{link.label}</p>
              </Link>
            </li>
          ))}
          <div className="flex gap-4">
            <Link href="/authentication/signin">
              <button>Sign In</button>
            </Link>
            <Link href="/authentication/register">
              <button>Sign Up</button>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
