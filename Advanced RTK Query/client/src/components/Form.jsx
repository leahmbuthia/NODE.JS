import React from "react";

const Form = ({CreateNewPost,isLoading}) => {
    const handleSubmit = (e) => {


        e.preventDefault()
        if (e.target[0].value === "" || e.target[1].value === "") {
          alert("Please fill in both fields")
        } else {
            CreateNewPost({ 
                title: e.target[0].value,
                body: e.target[1].value, 
                userId: 1 })
          e.target.reset();
        }}
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-input" htmlFor="postTitle">
          Title:
          <input type="text" id="postTitle" name="postTitle" />
        </label>
        <label className="form-input" htmlFor="postContent">
          Body:
          <textarea id="postContent" name="postContent" />
        </label>
        <button type="submit">{isLoading ? "loading:" : "Save Post"}</button>
      </form>
    </div>
  );
};

export default Form;
