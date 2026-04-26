import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { User, Mail, Shield, Calendar, ExternalLink, LayoutGrid } from "lucide-react";
import ShowcaseCard from "@/components/ShowcaseCard";

export const dynamic = 'force-dynamic';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  const { prisma } = await import("@/lib/prisma");
  
  // Fetch user data with their projects
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email || "" },
    include: {
      projects: {
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  });

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Profile Header Card */}
        <section className="relative bg-white/3 border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(76,95,213,0.15)_0%,transparent_50%)]"></div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[35px] bg-gradient-to-br from-[#4c5fd5] to-[#00e5ff] p-1.5 transform group-hover:rotate-6 transition-transform duration-500">
                {user.image ? (
                  <img src={user.image} alt={user.name || "User"} className="w-full h-full object-cover rounded-[30px]" />
                ) : (
                  <div className="w-full h-full bg-black rounded-[30px] flex items-center justify-center">
                    <span className="text-4xl font-black text-white">{user.name?.[0] || "U"}</span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white text-black rounded-2xl flex items-center justify-center border-4 border-black group-hover:scale-110 transition-transform">
                <Shield size={18} />
              </div>
            </div>

            {/* Info */}
            <div className="flex-grow text-center md:text-left space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4c5fd5]/10 border border-[#4c5fd5]/20 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4c5fd5] animate-pulse"></div>
                  <span className="text-[10px] font-black text-[#4c5fd5] uppercase tracking-widest">{user.role || 'DESIGNER'}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">{user.name}</h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <Mail size={16} className="text-gray-500" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Email Address</span>
                    <span className="text-xs font-bold text-white">{user.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <Calendar size={16} className="text-gray-500" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Member Since</span>
                    <span className="text-xs font-bold text-white">Apr 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto">
               <button className="px-8 py-4 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-[#00e5ff] transition-all transform hover:-translate-y-1">Edit Profile</button>
               <Link href="/showcase/post" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-white/10 text-center transition-all">Submit New</Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">My Showcase</h2>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Published Projects ({user.projects.length})</p>
            </div>
            <Link href="/showcase" className="flex items-center gap-2 text-[10px] font-black text-[#4c5fd5] uppercase tracking-widest hover:text-[#00e5ff] transition-colors">
              Explore All <ExternalLink size={12} />
            </Link>
          </div>

          {user.projects.length === 0 ? (
            <div className="py-20 border-2 border-dashed border-white/5 rounded-[40px] flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-600">
                <LayoutGrid size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-black text-white uppercase tracking-widest">No projects yet</h3>
                <p className="text-xs text-gray-500 max-w-[200px]">Share your first design impact with the community.</p>
              </div>
              <Link href="/showcase/post">
                <button className="mt-4 px-8 py-3 bg-[#4c5fd5] text-black font-black text-[10px] uppercase tracking-widest rounded-xl hover:shadow-[0_10px_20px_rgba(76,95,213,0.3)] transition-all">Start Posting</button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {user.projects.map((project) => (
                <ShowcaseCard 
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl || ""}
                  projectLink={project.projectLink}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
