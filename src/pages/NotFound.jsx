/* fichier 404.jsx */
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWVyNnY3M3Jhczlkemtid2NkcTJ3YmJldms4OWx5bjExazR5MW5wZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9J7tdYltWyXIY/giphy.gif" alt="404"/>
    </div>
  );
}