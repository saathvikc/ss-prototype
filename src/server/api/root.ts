import { createTRPCRouter } from "~/server/api/trpc";
import { employerRouter } from "./routers/employer";
import { jobSeekerRouter } from "./routers/jobseeker";
import employer from "~/pages/profile-creation/employer";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  jobSeeker: jobSeekerRouter,
  employer: employerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
