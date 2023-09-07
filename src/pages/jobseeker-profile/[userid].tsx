import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

export default function JobSeekerProfile() {

    const {data} = api.jobSeeker.getAll.useQuery();

    return (
        <h1>Job Seeker Profile View</h1>
    );
}