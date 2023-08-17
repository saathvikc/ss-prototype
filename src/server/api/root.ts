import { createTRPCRouter } from "~/server/api/trpc";
import { postsRouter } from "./routers/posts";
import { jobseekerRouter } from "./routers/jobseeker";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  jobseeker: jobseekerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
