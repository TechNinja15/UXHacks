"use server";

import { revalidatePath } from "next/cache";

export async function postComment(projectId: string, content: string, authorName: string = "Anonymous") {
  const { prisma } = await import("@/lib/prisma");
  
  if (!content || !projectId) {
    return { error: "Comment content and Project ID are required" };
  }

  try {
    await prisma.comment.create({
      data: {
        content,
        projectId,
        authorName
      }
    });

    revalidatePath(`/showcase/${projectId}`);
    return { success: true };
  } catch (error: any) {
    console.error("Comment Error:", error);
    return { error: "Failed to post comment" };
  }
}
