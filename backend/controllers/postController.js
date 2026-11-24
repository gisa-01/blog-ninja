export const getPosts = (req, res) => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      body: "Learn the fundamentals of building websites.",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Understanding JavaScript",
      body: "Explore JavaScript and how it makes websites interactive.",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Learning React",
      body: "Discover how React helps build user interfaces.",
      author: "Alex Brown",
    },
  ];

  res.json(posts);
};