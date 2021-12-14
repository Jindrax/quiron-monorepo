import usuarios from "./UsuariosHub";
import blockHome from "./BlockHomeHub";
import plantillas from "./PlantillasHub";
import clientes from "./ClientesHub";
import equipos from "./EquiposHub";
import {HubCollection} from "./HubClass";

const hubCollection = new HubCollection();
hubCollection.addHub(blockHome);
hubCollection.addHub(usuarios);
hubCollection.addHub(plantillas);
hubCollection.addHub(clientes);
hubCollection.addHub(equipos);
export default hubCollection;
