import Link from 'next/link'
import styles from './Card.module.css'
import { formatDate } from '@util/date'
import { classNames } from '@util/classes'

export const Card = ({ date, title, description, slug, lead }) => {

	const classes = classNames(
		styles.card,
		lead && styles.lead
	)

	return (
		<article className={classes}>
			<div>
				<time dateTime={date} className={styles.date}>
					<span className={styles.time}>{formatDate(date)}</span>
				</time>
				<h2 className={styles.title}><Link className={styles.anchor} href={slug}>{title}</Link></h2>
				<p className={styles.description}>{description}</p>
			</div>
		</article>
	)
}
