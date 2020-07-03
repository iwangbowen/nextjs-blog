import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts-from-fs';
import { getBlogs } from '../lib/posts-from-api';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allBlogsData = await getBlogs();
  return {
    props: {
      allPostsData,
      allBlogsData
    }
  };
}

export default function Home({ allPostsData, allBlogsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allBlogsData.map(({ id, created_at, updated_at }) => (
            <li className={utilStyles.listItem} key={id}>
              {created_at}
              <br />
              {id}
              <br />
              {updated_at}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}