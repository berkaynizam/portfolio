function Photos({ data }) {
  

  return (
    <div className="photos grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="photos-col photos-col--1" />
      <div className="photos-col photos-col--2" />
      <div className="photos-col photos-col--3" />
      
    </div>
  );
}

export default Photos;
