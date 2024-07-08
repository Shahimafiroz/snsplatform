import React from "react";

function NewPostComponent({
  newPost,
  settingTheStateOfANewPostOnClick,
  postANewUserPostOnclick,
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div style={{ paddingBottom: "2rem" }}>
            <input
              name="title"
              style={{ height: "3rem", width: "480px" }}
              onChange={settingTheStateOfANewPostOnClick}
              value={newPost.title}
              placeholder="Title"
            ></input>
          </div>
          <textarea
            placeholder="Enter Text as New Post"
            style={{ width: "500px", height: "300px" }}
            name="body"
            id=""
            value={newPost.body}
            onChange={settingTheStateOfANewPostOnClick}
          ></textarea>
        </div>
        <div placeholder="Post" style={{ width: "10rem", height: "4rem" }}>
          <button onClick={postANewUserPostOnclick}> POST </button>
        </div>
      </div>
    </div>
  );
}

export default NewPostComponent;
