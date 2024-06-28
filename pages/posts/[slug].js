import { useEffect } from "react";
import { useRouter } from 'next/router';
import { getSinglePost } from "../../ghost-config";

const PostPage = () => {
  const [singlePost, setSinglePost] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  const fetchSinglePost = async (slug) => {
    console.log(slug)
    try {
      const fetchedSinglePosts = await getSinglePost(slug);
      setSinglePost(fetchedSinglePosts);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSinglePost(slug);
  }, []);

  console.log(singlePost, "singlePost");
  return (
    <div>
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </div>
  );
};

export default PostPage
