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
	articles: {
		description: string
		title: string
		slug: string
		publishedAt: string
		status: string
	}[]
}

export default function Home({ articles }: PostsProps): JSX.Element {
	const latest = articles[0];
	const recent = articles.slice(1, 4);

	console.log(articles);

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
				{recent.map((article,index) => (
					<article key={index}>
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
	const articles = getDocuments('articles', params)

	console.log(getDocuments('pages'));

	return {
		props: { articles }
	}
}
