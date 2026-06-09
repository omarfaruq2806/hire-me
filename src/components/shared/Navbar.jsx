"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Browse Jobs", href: "/browsejobs" },
    { label: "Companies", href: "/company" },
    { label: "Contact", href: "/contact" },
  ];

  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
    setIsOpen(false);
  };

  return (
    <div className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start flex items-center gap-3">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold text-blue-500">
              Hire<span className="text-white">Loop</span>
            </h1>
          </Link>
        </div>

        {/* CENTER (Desktop Menu) */}
        <div className="navbar-center hidden md:flex">
          <ul className="flex gap-6 text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-blue-400 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex items-center gap-3">
          {session ? (
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-white text-sm font-medium">
                  {session.user.name}
                </p>
                <p className="text-slate-400 text-xs">{session.user.email}</p>
              </div>

              <div className="w-10 h-10 rounded-full overflow-hidden ring ring-blue-500">
                <img
                  src={
                    session.user.image || "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="user"
                />
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-sm bg-red-600 hover:bg-red-700 text-white border-none"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/authentication/signin">
                <button className="btn btn-ghost text-slate-300">
                  Sign In
                </button>
              </Link>

              <Link href="/authentication/register">
                <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}

          {!session ? (
            <div className="space-y-2">
              <Link href="/authentication/signin">
                <button className="btn btn-outline btn-info w-full">
                  Sign In
                </button>
              </Link>

              <Link href="/authentication/register">
                <button className="btn bg-blue-600 text-white w-full border-none">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-2 border-t border-slate-700 pt-3">
              <p className="text-white">{session.user.name}</p>
              <p className="text-slate-400 text-sm">{session.user.email}</p>

              <button
                onClick={handleLogout}
                className="btn bg-red-600 hover:bg-red-700 text-white w-full border-none"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
