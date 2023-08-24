function NotFound({ text }) {
  const { message, resolution, title } = text;
  return (
    <div className="notfound">
      <span className="emoji">😕</span>
      <h3>{title}</h3>
      <p className="">
        {message} {resolution}
      </p>
    </div>
  );
}

export default NotFound;
