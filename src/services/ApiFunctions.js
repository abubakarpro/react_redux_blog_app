import DataInstance from "./DataInstance";

var posts = DataInstance();

export function getAllPosts() {
  return posts;
}

export function getPostById(id) {
  return posts.find(p => p.id === id);
}

export function getPostByTitle(title) {
  return posts.find(p => p.title === title);
}

export function deletePostById(id) {
  console.log("from delete button", id);
  var index = posts.findIndex(p => p.id !== id);
  console.log("findIndex", index);
  posts.splice(index - 1, 1);
  console.log(posts);
  return posts;
}

export function addPost(post) {
  let addPostid = posts.length;
  addPostid++;
  posts.push({ ...post, id: String(addPostid) });
  // posts = [...posts, { ...post, id: addPostid }];
  return addPostid;
}

export function updatePost(post, updatedPostId) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === updatedPostId) {
      posts[i] = {
        ...posts[i],
        id: updatedPostId,
        title: post.title,
        img: post.img,
        desc: post.desc
      };
    }
  }
  return posts;
  //   return posts.map(p => {
  //     if (p.id === updatedPostId) {
  //       return {
  //         ...p,
  //         id: updatedPostId,
  //         title: post.title,
  //         img: post.img,
  //         desc: post.desc
  //       };
  //     } else return p;
  //   });
}

export function searchPosts(query) {
  let filteredPosts = [];
  for (let i = 0; i < posts.length; i++) {
    if (
      posts[i].title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      posts[i].desc.toLowerCase().indexOf(query.toLowerCase()) !== -1
    ) {
      filteredPosts.push(posts[i]);
    }
  }
  console.log(filteredPosts);
  return filteredPosts;
}
