import App from "../App";
import { RoomLayout } from "../layouts/layout";
import KeyWordOBJ from "../components/KeyWordOBJ";
import imageRoom1 from "../assets/images/room1.jpg";
export default function Room1() {
  return (
    <RoomLayout imageRoom={imageRoom1}>
      <h1>Sul diritto di avere paura</h1>
      <p>
        E' notte, bussano forte alla porta. Ti svegli di soprassalto. Ti alzi
        dal letto, barcolli verso la porta e lentamente avvicini un occhio allo
        spioncino. Non vedi nessuno, ti volti indeciso dando le spalle
        all'ingresso, attendi qualche secondo e alla fine decidi di girare la
        chiave e aprire. Fuori è freddo e non c'è nessuno. Abbassi lo sguardo e
        in terra vedi una <KeyWordOBJ option={{ id: "10" }}>lettera</KeyWordOBJ>
        , una vecchia chiave di rame appoggiata sulla busta bianca.
      </p>
    </RoomLayout>
  );
}
