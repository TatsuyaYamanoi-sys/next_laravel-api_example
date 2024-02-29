import Layout from "../components/Layout"
// import Post from "../components/Post"
// import { get50Posts } from "../libs/fetchPosts"

const Blog = ({posts}) => {
  return (
    <Layout title="Blog">
      <h1 className="text-4xl text-gray-600 font-bold">    {/* */}
        Loading...
      </h1>
      {/* <ul className="mt-10 mb-5 [&>*:not(:last-child)]:mb-2 [&>*:not(:last-child)]:border-b-2">
        {posts && posts.map((post) => <Post key={post.id} post={post}/>)}
      </ul> */}
    </Layout>
    
  )
}

export default Blog

// export async function getStaticProps() {    //build時に実行され、propsをコンポーネントに渡し、静的htmlファイルを作成する。(pre-render)
//   const posts = await get50Posts()

//   return {props: { posts }}
// }