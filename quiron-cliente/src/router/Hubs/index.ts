import usuarios from "./UsuariosHub";
import blockHome from "./BlockHomeHub";
import plantillas from "./PlantillasHub";
import clientes from "./ClientesHub";
import equipos from "./EquiposHub";
import ots from "./OrdenTrabajoHub";
import {HubCollection} from "./HubClass";

const hubCollection = new HubCollection();
hubCollection.addHub(blockHome);
hubCollection.addHub(usuarios);
hubCollection.addHub(plantillas);
hubCollection.addHub(clientes);
hubCollection.addHub(equipos);
hubCollection.addHub(ots);
export default hubCollection;
