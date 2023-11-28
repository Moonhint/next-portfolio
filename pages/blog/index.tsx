import { useGlobalContext } from "@/contexts/GlobalContext";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Blog = () => {
    const { namine, setNamine } = useGlobalContext();

    const changeNamine = () => {
        setNamine('From Blog');
    };

    return (
        <div>
            Blog
            <div>
                <Link href="/dashboard">To Dashboard</Link>
            </div>
            <div>
                <h3>Context: {namine}</h3>
            </div>
            <Button onClick={changeNamine}>Change Namine</Button>
        </div>
    )
}

export default Blog;
