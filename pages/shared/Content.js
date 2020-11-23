export default function Content(props) {
  return (
    <div className="content">
      <p className="content-text"> {props.activeSpace} </p>
      <style jsx>{`
        .content {
          padding: 10px;
        }
        .content-text {
          color: #dcddde;
        }
      `}</style>
    </div>
  );
}
