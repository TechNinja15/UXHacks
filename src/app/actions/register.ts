"use server";

import bcrypt from "bcryptjs";

export async function register(formData: any) {
  const { prisma } = await import("@/lib/prisma");
  const { email, password, name, role } = formData;

  if (!email || !password || !name) {
    return { error: "All fields are required" };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return { error: "Email already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: role || "DESIGNER"
      }
    });

    return { success: true, user };
  } catch (error: any) {
    console.error("Register Error:", error);
    return { error: "Failed to create account" };
  }
}
