import { useRouter } from "next/router";

const Shop = () => {
    const router =  useRouter();
    const { id } =  router.query;
    
    return `Shop product ID: ${id}`
}

export default Shop;