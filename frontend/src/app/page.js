export default async function Home() {
  let posts = [];
  let error = null;

  try {
    const response = await fetch("http://localhost:5000/api/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }
    posts = await response.json();
  } catch (err) {
    error = err.message;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between bg-white px-8 py-5 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">Blog Ninja</h1>

        <div className="flex gap-6 text-gray-600">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      </nav>

      <section className="px-8 py-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          Welcome to Blog Ninja
        </h2>

        <p className="mx-auto max-w-xl text-gray-600">
          Discover interesting articles, learn new things, and share your ideas.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-8 pb-16">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Latest Posts</h2>

        {error && (<p className="mb-6 text-center text-red-600">{error}</p>)}

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {post.title}
              </h3>

              <p className="mb-4 text-gray-600">{post.body}</p>

              <p className="text-sm font-medium text-blue-600">
                By {post.author}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
