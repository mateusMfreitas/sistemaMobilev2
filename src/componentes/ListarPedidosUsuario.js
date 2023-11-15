import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const ListarPedidosUsuario = async () => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        const q = query(collection(db, 'pedidos'), 
        where('usuario', '==', user.uid));
        const pedidosSnapshot = await getDocs(q);
        const listaPedidos = pedidosSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return listaPedidos;
    } catch (error) {
        console.error("Erro ao listar pedidos: ", error);
        throw error;
    }
};

export default ListarPedidosUsuario;