import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {setPosts} from "../../storeState/auth/authSlice";
// import { setPosts } from "state";
import PostWidget from "./PostWidget";

// const PostsWidget = ({ userId, isProfile = false }) => {
const PostsWidget = ({}) => {
  // const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts);
  const posts = [
    {
      _id: 1,
      userId: 1,
      firstName: "Jefry",
      lastName: "padlomino",
      description: "this is my real post esto es un comentario completo para realizar mis comentarios ",
      location: "Punod",
      piscturePath: "direcicon",
      userPicturePath: "this is thed",
      likes: 23,
      comments: [
        'interessante descriptions','tareas fastidiosas','donee estara el amor','puede que se aya ido','serio no mames ','nojodas','jisus crise','lol','amzin','dit',
      ]
    },
    {
      _id: 2,
      userId: 2,
      firstName: "CArlos",
      lastName: "padlomino",
      description: "un dia encanctador para realizar ejercicios ir ala piscina ir a jugar futbol",
      location: "Lima",
      piscturePath: "direcicon",
      userPicturePath: "this is thed",
      likes: 15,
      comments: [
        'interessante descriptions','tareas fastidiosas','donee estara el amor','puede que se aya ido','serio no mames ','nojodas','jisus crise','lol','amzin','dit',
      ]
    },
  ];
  console.log(posts);
  // const token = useSelector((state) => state.token);

  // const getPosts = async () => {
  //   const response = await fetch("http://localhost:3001/posts", {
  //     method: "GET",
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   const data = await response.json();
  //   dispatch(setPosts({ posts: data }));
  // };

  // const getUserPosts = async () => {
  //   const response = await fetch(
  //     `http://localhost:3001/posts/${userId}/posts`,
  //     {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch(setPosts({ posts: data }));
  // };

  // useEffect(() => {
  //   if (isProfile) {
  //     getUserPosts();
  //   } else {
  //     getPosts();
  //   }
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
