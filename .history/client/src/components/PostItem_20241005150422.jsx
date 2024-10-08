const PostItem = (props) => {
  const { data } = props;

  return (
    <div className="container mx-auto py-20">
      <div className="row grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div className="col-auto ">
            <img src={data.thumbnail} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
