import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GLFX - Home</title>
      </Head>

      <div className="text-center my-5 py-5">
        <h1>HOMEPAGE</h1>
        <p className="my-5">
          <a href="/register" className="awu">
            Don't have an account? Register yourself
          </a>
        </p>
        <p className="my-5">
          <a href="/login" className="awu">
            Alreday have an account? Login
          </a>
        </p>
      </div>
    </>
  );
}
