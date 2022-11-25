/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import Link from 'next/link'
import Layout from '@components/Layout'
import { NextSeo } from 'next-seo';
import { getDocuments } from 'outstatic/server'

interface PostsProps {
	posts: {
		description: string
		title: string
		slug: string
		publishedAt: string
		status: string
	}[],
	pages: {
		title: string
		slug: string
		publishedAt: string
		status: string
	}[]
}

export default function Home({ posts, pages }: PostsProps): JSX.Element {
	const latest = posts[0];
	const recent = posts.slice(1, 4);

	return (
		<Layout>
			<NextSeo
				title="Home"
			/>
			<section>
				<header>Latest</header>
				<article>
					<figure></figure>
					<div>
						<h2>{latest?.title}</h2>
						<p>{latest?.description}</p>
					</div>
				</article>
			</section>

			<section>
				<header>Recent</header>
				{recent.map((article) => (
					<article key={article.id}>
						<figure></figure>
						<div>
							<h2>{article.title}</h2>
							<p>{article.description}</p>
						</div>
					</article>
				))}
			</section>
		</Layout>
	)
}

export const getServerSideProps = async () => {
	const params = ['title', 'description', 'slug']
	const posts = getDocuments('posts', params)
	const pages = getDocuments('pages', params)

	return {
		props: { posts, pages }
	}
}
