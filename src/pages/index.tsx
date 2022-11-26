/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import Link from 'next/link'
import { Card } from '@components/Card'
import { Section } from '@components/Section'
import Image from 'next/image'
import Layout from '@components/Layout'
import { NextSeo } from 'next-seo';
import { getDocuments } from 'outstatic/server'

interface PostsProps {
	articles: {
		description: string
		coverImage: string
		title: string
		slug: string
		publishedAt: string
		status: string
	}[]
}

export default function Home({ articles }: PostsProps): JSX.Element {
	const { coverImage, title, description, slug, publishedAt } = articles[0];
	const recent = articles.slice(1, 4);

	return (
		<Layout>
			<NextSeo
				title="Home"
			/>
			<Section>
				<Card date={publishedAt} title={title} description={description} slug={slug} lead />
			</Section>
			<Section title="Recent">
				{recent.map((article) => (
					<Card key={article.slug} date={article.publishedAt} title={article.title} description={article.description} slug={slug} />
				))}
			</Section>
		</Layout>
	)
}

export const getServerSideProps = async () => {
	const params = ['title', 'publishedAt', 'description', 'coverImage', 'slug']
	const articles = getDocuments('articles', params)

	console.log(articles);

	return {
		props: { articles }
	}
}
