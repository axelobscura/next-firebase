import Link from 'next/link'
import db from '../../utils/db';
import Contenedor from '../../components/Contenedor'

const Posts = (props) => {
  const { entriesData } = props;

  return (
    <Contenedor>
      <h1>Posts</h1>
      {entriesData.map(entry => (
        <div key={entry.id}>
          <Link href={`/posts/${entry.slug}`}>
            <a>{entry.title}</a>
          </Link>
          <br />
        </div>
      ))}
    </Contenedor>
  );
};

export const getStaticProps = async () => {
  const entries = await db.collection('entries').orderBy('created', 'desc').get();
  const entriesData = entries.docs.map(entry => ({
    id: entry.id,
    ...entry.data()
  }));
  return {
    props: { entriesData },
    revalidate: 10
  }
}

export default Posts;