import { useRouter } from 'next/router'
import db from '../../utils/db';
import Contenedor from '../../components/Contenedor'

const Post = (props) => {
  const { entry } = props;
  const router = useRouter()
  if (router.isFallback) {
    return (
      <Contenedor>loading</Contenedor>
    )
  } else {
    if (entry) {
      return (
        <Contenedor>
          <h1>{entry.title}</h1>
          <h4>{entry.created}</h4>
          <p>{entry.body}</p>
        </Contenedor>
      );
    } else {
      return (
        <Contenedor>not found</Contenedor>
      )
    }
  }
};

export const getStaticPaths = async () => {
  const entries = await db.collection("entries").get()
  const paths = entries.docs.map(entry => ({
    params: {
      slug: entry.data().slug
    }
  }));
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await db.collection("entries").where("slug", "==", slug).get()
  const entry = res.docs.map(entry => entry.data());
  if (entry.length) {
    return {
      props: {
        entry: entry[0]
      }
    }
  } else {
    return {
      props: {}
    }
  }
}

export default Post;