import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs"; 
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

function setJobSeeker()  {
  ;
}

function setEmployer()  {
  ;
}

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  
  const user = useUser();

  // const {data} = api.jobseeker.getAll.useQuery();

  //if (isLoading) return <div>Loading...</div>;

  //if (!data) return <div>Something went wrong</div>;

  return (
    <>
      <Head>
        <title>Super Staffing</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* header component */}
        <div className="flex border-b border-slate-400 p-4"> 
            {!user.isSignedIn && (
            <div className="signin">
              <SignInButton />
            </div>
            )}
            {!!user.isSignedIn && (
              <>
              <div className="signout">
                <SignOutButton />
              </div>
            </>
            )}
        </div>
        <div>
        {!!user.isSignedIn && (
              <>
              <div className="container">
                <h1 className="welcome">Welcome to Super Staffing!</h1>
                <h1 className="select-text">I am a... <span className="subtext">(Please select one)</span> </h1>
                <Link href='/profile-creation/jobseeker'>
                  <button
                      type="button"
                      className="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={setJobSeeker}>
                      Job Seeker
                  </button>
                </Link>
                <Link href='/profile-creation/employer'>
                  <button
                      type="button"
                      className="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={setEmployer}>
                      Employer
                  </button>
                </Link>
              </div>   
            </>
            )}
        </div>
        <div className="w-full h-full md:max-w-2xl border-x border-slate-400">
          {/* <div className="flex flex-col">
            {[...data, ...data]?.map((post) => (
              <div key={post.id} className="p-8 border-b border-slate-400">{post.content}</div>
            ))}
          </div> */}
        </div>
      </main>
    </>
  );
}

export function ProfileCreation() {
  //const user = useUser();

  //const {data} = api.jobseeker.getAll.useQuery();

  return (
    <>
      <Head>
          <title>Super Staffing</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* header component */}
        <div className="flex border-b border-slate-400 p-4"> 
           Hello! Welcome to your profile creation!
        </div>
      </main>
    </>
  );
}

