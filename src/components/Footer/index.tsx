/*
 * Footer
 *
 * Global Site Footer
 *
 * @returns {JSX.Element}
*/

import styles from './Footer.module.css'

export default function Footer(): JSX.Element {
	return (
		<footer className={styles.footer} id="site-footer" role="contentinfo" aria-label="Site Footer">
			<div className={styles.container}>
				<p className={styles.colophon}>&copy; Copyright 2022. All Rights Reserved. Daine Mawer</p>
			</div>
		</footer>
	)
}
