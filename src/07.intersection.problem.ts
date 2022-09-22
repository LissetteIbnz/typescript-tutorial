export { }

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

/**
 * ❓ Cómo podemos retornar un objeto que tenga: User y una colección de post del usuario?
 * 🕵️‍♀️ User y { posts: Post[] }
 */
export const getDefaultUserAndPosts = (): unknown => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
