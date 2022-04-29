import { useRouter } from "next/router";

const Learn = () => {
    const router =  useRouter();
    const { id } =  router.query;
    
    return `Learn more about product ID: ${id}`
}

export default Learn;