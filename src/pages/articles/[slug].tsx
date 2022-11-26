import { getDocumentBySlug, getDocumentPaths } from 'outstatic/server'
import { GetStaticPaths, GetStaticProps } from 'next'
import convertToHTML from '@util/remark'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '@components/Layout'
import { formatDate } from '@util/date'
import Link from 'next/link'

import styles from './Article.module.css'

interface Post {
	post: {
		slug: string
		title: string
		publishedAt: string
		coverImage: string
		author: {
			name: string
			picture: string
		}
		description: string
		ogImage: {
			url: string
		}
		content: string
	}
}

interface Params {
	params: {
		slug: string
	}
}

export default function Post({ post }: Post) {
	const router = useRouter()

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<Layout>
			<article className={styles.article}>
				<ul className={styles.breadcrumbs}>
					<li><Link href="/">Home</Link></li>
					<li><Link href="/articles">Articles</Link></li>
					<li>{post.title}</li>
				</ul>
				<h1 className={styles.title}>{post.title}</h1>
				<ul className={styles.list}>
					<li className={styles.item}>{formatDate(post.publishedAt)}</li>
					<li className={styles.item}>
						<ul className={styles.social}>
							<li>Facebook</li>
							<li>Twitter</li>
							<li>LinkedIn</li>
						</ul>
					</li>
				</ul>
				<div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
			</article>

		</Layout>
	)

}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
	const post = getDocumentBySlug('articles', params.slug, [
		'title',
		'publishedAt',
		'slug',
		'author',
		'content',
		'coverImage'
	])

	const content = await convertToHTML(post.content || '')

	return {
		props: {
			post: {
				...post,
				content
			}
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: getDocumentPaths('articles'),
		fallback: false
	}
}
