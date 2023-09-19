import { getDocs, collection } from "firebase/firestore";
import { db } from '../../firebaseConfig';

const ListarProdutos = async () => {
    try {
        const productCollection = collection(db, "produtos");
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return productList;
    } catch (error) {
        console.error("Erro ao listar produtos: ", error);
        throw error;
    }
};

export default ListarProdutos;