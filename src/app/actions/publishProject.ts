"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function publishProject(formData: {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  type?: string;
}) {
  const { prisma } = await import("@/lib/prisma");
  const session = await getServerSession(authOptions);
  
  if (!formData.title || !formData.projectLink) {
    return { error: "Title and Project Link are required" };
  }

  try {
    const project = await prisma.project.create({
      data: {
        title: formData.title,
        description: formData.description,
        imageUrl: formData.imageUrl,
        projectLink: formData.projectLink,
        type: formData.type || "WEBSITE",
        userId: session?.user?.id || null, // Link to user if logged in
      },
    });

    revalidatePath("/showcase");
    revalidatePath("/profile");
    return { success: true, project };
  } catch (error: any) {
    console.error("Publish Error:", error);
    return { error: "Failed to publish project to database" };
  }
}
