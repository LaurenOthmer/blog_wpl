import { post } from "@/data";
import posts from "../../posts.json"

function page(){

    return(
        <div>
            <h1 className="m-5 text-center text-2xl">Wekelijkse blog</h1>
            {posts.map((post: post) =>
            <article className ="m-5" key = {post.ID}>
                <h2 className="text-lg">{post.title}</h2>
                <p>{post.content}</p>
            </article>
                )}
        </div>
    )
}

export default page;
