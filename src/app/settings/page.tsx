import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Settings, Timer } from "lucide-react";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-[#4c5fd5]/10 rounded-[30px] border border-[#4c5fd5]/20 flex items-center justify-center mx-auto text-[#4c5fd5]">
          <Settings size={32} />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-white">Account <span className="text-[#4c5fd5]">Settings</span></h1>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Timer size={14} />
            <p className="text-[10px] font-black uppercase tracking-[0.2em]">Feature Coming Soon</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
          Customize your profile, notification preferences, and security settings. This section is currently under development.
        </p>
      </div>
    </main>
  );
}
