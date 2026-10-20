import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

export const metadata: Metadata = {
  title: 'ProspectHunter | Global Sales Intelligence & Opportunity Detection',
  description: 'Enterprise B2B Business Prospect Discovery & Website Opportunity Intelligence Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080c14] text-slate-100 min-h-screen antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
        <div className="flex min-h-screen bg-[#080c14]">
          {/* Persistent Sidebar */}
          <Sidebar />

          {/* Main Layout Area */}
          <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
            <Header />
            <main className="flex-1 p-4 lg:p-8 max-w-7xl w-full mx-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
