import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LayoutDashboard, Search, Users, Database, Settings, BarChart2 } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProspectHunter",
  description: "Global Business Prospect Discovery & Lead Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md">
            <div className="p-4 border-b">
              <h1 className="text-2xl font-bold text-blue-600">ProspectHunter</h1>
            </div>
            <nav className="p-4 space-y-2">
              <Link href="/" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 text-gray-700">
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </Link>
              <Link href="/search" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 text-gray-700">
                <Search size={20} />
                <span>Search</span>
              </Link>
              <Link href="/prospects" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 text-gray-700">
                <Users size={20} />
                <span>Prospects</span>
              </Link>
              <Link href="/analytics" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 text-gray-700">
                <BarChart2 size={20} />
                <span>Analytics</span>
              </Link>
              <Link href="/data" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 text-gray-700">
                <Database size={20} />
                <span>Data Providers</span>
              </Link>
              <Link href="/settings" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 text-gray-700">
                <Settings size={20} />
                <span>Settings</span>
              </Link>
            </nav>
          </aside>

          {/* Main content wrapper */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <header className="bg-white shadow-sm z-10">
              <div className="flex items-center justify-between p-4">
                <h2 className="text-xl font-semibold text-gray-800">Welcome back, Admin</h2>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    A
                  </div>
                </div>
              </div>
            </header>

            {/* Main content */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
