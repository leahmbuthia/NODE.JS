import { useAddCommentMutation } from "./commentSlice";

const CreateComment = () => {
  const [addComment, { isLoading }] = useAddCommentMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [name, email, body] = e.target;
    if (name.value === "" || email.value === "" || body.value === "") {
      alert("Please fill in all fields");
    } else {
      addComment({
        name: name.value,
        email: email.value,
        body: body.value,
        postId: 1, // Assuming postId is fixed for this example
      });
      e.target.reset();
    }
  };

  return (
    <section>
      <h2>Add a New Comment</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-input" htmlFor="commentName">
          Name:
          <input type="text" id="commentName" name="commentName" />
        </label>
        <label className="form-input" htmlFor="commentEmail">
          Email:
          <input type="email" id="commentEmail" name="commentEmail" />
        </label>
        <label className="form-input" htmlFor="commentBody">
          Body:
          <textarea id="commentBody" name="commentBody" />
        </label>
        <button type="submit">{isLoading ? "Loading" : "Save Comment"}</button>
      </form>
    </section>
  );
};

export default CreateComment;
