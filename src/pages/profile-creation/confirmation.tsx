import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Confirmation() {
    return (
        <>
        <h1>Congrats! Your profile has been created!</h1>

        <Link href='/profile-creation/'>
            <button
                type="button"
                className="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500"
            >
                View Profile
            </button> 
        </Link>
        </>
    );
}