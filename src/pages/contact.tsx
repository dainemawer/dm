/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { Section } from '@components/Section'
import Layout from '@components/Layout'
import { NextSeo } from 'next-seo';
import { getDocumentBySlug } from 'outstatic/server'
import convertToHTML from '@util/remark'

export default function Contact({ page }): JSX.Element {
	return (
		<Layout>
			<NextSeo
				title="Contact"
			/>
			<Section title="Contact">
				<div dangerouslySetInnerHTML={{ __html: page.content }} />
			</Section>
		</Layout>
	)
}

export const getServerSideProps = async () => {
	const page = getDocumentBySlug('pages', 'contact', ['content'])
	const content = await convertToHTML(page.content || '')

	return {
		props: { page: content }
	}
}
