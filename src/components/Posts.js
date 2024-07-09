import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import IndividualPosts from "./IndividualPosts";
import NewPostComponent from "./NewPostComponent";

function Posts() {
  //---------------------------------------------------------------------------Start----------------------------------------------------------------------------------------------------------------//

  const location = useLocation();
  console.log(location);
  const userName = location.state.name;
  console.log(userName);

  // setting the states to maintain the posts data
  const [userPosts, setuserPosts] = useState([]);
  const [newPost, setnewPost] = useState({
    title: "",
    body: "",
  });
  // const [userGeneratedPosts, setuserGeneratedPosts] = useState([]);

  // 1 .getting the user ------////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const queriedUser = useParams();
  const user = queriedUser.id;
  console.log(user);

  // 2 .getting userSpecific Posts - || if u dont use useEffect it will constantly keep rendering //////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    let fetchedUserSpecificPosts = async () => {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${user}`
      );
      let postsData = response.data;
      setuserPosts(postsData);
    };
    fetchedUserSpecificPosts();
  }, []);
  // 3 .Handling the states onclick handler --> later passed as a prop to child (individualPosts.js)////////////////////////////////////////////////////////////////////////////////////////////
  const settingTheStateOfANewPostOnClick = (event) => {
    const name = event.target.name;
    setnewPost((prev) => ({ ...prev, [name]: event.target.value }));
  };
  // console.log("new post state", newPost);

  // 4 .Posting New post using the post request syntax on JP------//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let postANewUserPostOnclick = async () => {
    if (newPost.title != "" || newPost.body != "") {
      console.log("object is not empty");
      let response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          title: newPost.title,
          body: newPost.body,
          userId: user,
        }
      );
      let afterPostResponse = response.data;
      console.log(afterPostResponse);
      setuserPosts([afterPostResponse, ...userPosts]);
      setnewPost({ title: "", body: "" });
    }
    // else {
    //   console.log("sdfghj");
    // }
  };

  ///////////////////////////////////////////////////////////////////-------------- end --------------///////////////////////////////////////////////////////////////////////

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <h1 style={{ color: "#fff" }}>This {userName}'s Posts</h1>
      <NewPostComponent
        newPost={newPost}
        settingTheStateOfANewPostOnClick={settingTheStateOfANewPostOnClick}
        postANewUserPostOnclick={postANewUserPostOnclick}
      />
      {userPosts.map((post, index) => (
        <IndividualPosts key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default Posts;
