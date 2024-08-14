import axios from "axios";
import { useEffect, useState } from "react"

interface Post{
    qsn : string;
}

export const useQnsFromDB = () => {
    const [loading , setLoading] = useState(true);
    const [post , setPost] = useState<Post[]>([]);

    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/post`)
        .then(response => {
            console.log(process.env.NEXT_PUBLIC_BASE_URL)
            const questions = response.data.data.map((item: { qsn: string }) => ({ qsn: item.qsn }));
            setPost(questions);
            console.log(questions)
            setLoading(false);
        })
    } , [])
    return {
        loading,
        post
}
}
