import { Button } from "../components/button";

export default function Home() {
  return (
    <div>
      <div>tutaj bedzie logowanko</div>
      <Button onClick={() => alert("Dodany")}>Dodaj</Button>
      <Button onClick={() => alert("Wypożyczony")} variant="secondary">
        Wypożycz
      </Button>
      <Button onClick={() => alert("Usunięty")} variant="warning" size="md">
        Usuń
      </Button>
    </div>
  );
}
