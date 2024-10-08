const PostItem = (props) => {
  const { id, thumbnail, catagory, title, desc, authorID } = props;

  return (
    <div className="container mx-auto py-20">
      <div className="row grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div className="col-auto ">
          <div className="post-thumbnail">
            <img src={thumbnail} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
