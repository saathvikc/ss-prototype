import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const jobseekerRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
