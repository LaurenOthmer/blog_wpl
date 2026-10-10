import { post } from "@/data";
import posts from "../../posts.json"

function page(){

    return(
        <div>
            {posts.map((post: post) =>
            <article key = {post.ID}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </article>
                )}
        </div>
    )
}

export default page;
