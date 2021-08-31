import "./style.css";

export default function DescriptionDay({ description }) {
  const { morning, evening } = description;
  console.log(description);
  return (
    <div>
      <h2>Manhã</h2>
      <p> {morning} </p>
      <h2>Tarde</h2>
      <p> {evening} </p>
    </div>
  );
}
