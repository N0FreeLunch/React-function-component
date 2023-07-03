function Comment() {
  const name = 'React';
  return (
    <>
      {/* comment1 */}
      {
        // comment2
      }
      <div
        className="react" // comment3
      /* comment4 */
      >
      // comment3
        /*
        comment4
        */
        {name}
      </div>
    </>
  );
}

export default Comment;