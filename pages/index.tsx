import { Button } from "../components/button";
import { Input } from "../components/input";
import { Textarea } from "../components/textarea";

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
      <Input />
      <Textarea />
    </div>
  );
}
