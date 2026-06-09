"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  const role = session?.user?.role || "seeker";

  const roleLinks = {
    seeker: [
      { label: "Find Jobs", href: "/dashboard/seeker/jobs" },
      { label: "Applied Jobs", href: "/dashboard/seeker/applied" },
    ],
    recruiter: [
      { label: "Post Job", href: "/dashboard/recruiter/post-job" },
      { label: "My Jobs", href: "/dashboard/recruiter/my-jobs" },
      { label: "Applications", href: "/dashboard/recruiter/applications" },
    ],
  };

  const publicLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Jobs", href: "/browsejobs" },
    { label: "Companies", href: "/company" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 flex flex-col justify-between">
      {/* Top */}
      <div>

        {/* User Info */}
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <img
              src={session?.user?.image || "https://i.pravatar.cc/100"}
              className="w-10 h-10 rounded-full"
              alt="user"
            />
            <div>
              <p className="text-white text-sm font-semibold">
                {session?.user?.name}
              </p>
              <p className="text-xs text-slate-400">{session?.user?.email}</p>
              <span className="text-xs text-blue-400 capitalize">{role}</span>
            </div>
          </div>
        </div>

        {/* Role Links */}
        <div className="p-5">
          <p className="text-xs text-slate-500 mb-2">Dashboard</p>
          <ul className="space-y-2">
            {roleLinks[role]?.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Public Links */}
        <div className="p-5 border-t border-slate-800">
          <p className="text-xs text-slate-500 mb-2">Public</p>
          <ul className="space-y-2">
            {publicLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-slate-400 hover:text-white px-3 py-2 rounded-lg transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Logout */}
      <div className="p-5 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
