import "./style.css";
export default function CenteredCards({ children }) {
  return (
    <div className="container-children">
      <span>{children}</span>
    </div>
  );
}
