/*
 * Header
 *
 * Global Site Header
 *
 * @returns {JSX.Element}
*/

import { Logo } from '@components/Logo'
import Navigation from '@components/Navigation'
import styles from './Header.module.css'

export default function Header(): JSX.Element {
	return (
		<header className={styles.header} id="site-header" role="banner" aria-label="Site Header">
			<div className={styles.container}>
				<Logo />
				<Navigation id="site-navigation" label="Site Navigation" />
			</div>
		</header>
	)
}
