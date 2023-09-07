import { clerkClient } from "@clerk/nextjs";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const jobSeekerRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const jobSeeker =  await ctx.prisma.jobSeeker.findMany({
      take: 1,
    });

    const users = await clerkClient.users.getUserList({
      userId: jobSeeker.map((jobSeeker) => jobSeeker.id),
      limit: 1,
    })

    console.log(users);

    return jobSeeker;

  }),
});
