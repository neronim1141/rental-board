import { Button } from "../components/button";

export default function Home() {
  return (
    <div>
      <div>tutaj bedzie logowanko</div>
      <Button onClick={() => alert("Dodany")}>Dodaj</Button>
      <Button
        onClick={() => alert("Wypożyczony")}
        variant="secondary"
        size="md"
      >
        Wypożycz
      </Button>
      <Button onClick={() => alert("Usunięty")} variant="warning">
        Usuć
      </Button>
    </div>
  );
}
