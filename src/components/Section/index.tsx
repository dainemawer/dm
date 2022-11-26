import styles from './Section.module.css'

export const Section = ({ children, title }) => {
	return (
		<section className={styles.section}>
			{title && (<header className={styles.header}>
				<h3 className={styles.title}>{title}</h3>
			</header>)}
			{children}
		</section>
	)
}
