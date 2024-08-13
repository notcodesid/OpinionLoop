import axios from "axios";
import { useEffect, useState } from "react"

interface Post{
    qsn : string;
}

export const qnsFromDB = () => {
    const [loading , setLoading] = useState(true);
    const [post , setPost] = useState<Post[]>([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/post`)
        .then(response => {
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