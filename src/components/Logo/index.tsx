import Link from 'next/link'

export const Logo = () => {
	return (
		<Link href="/">
			<svg width="100" height="14" viewBox="0 0 100 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.176 13.27C3.468 13.27 2.832 13.114 2.268 12.802C1.704 12.478 1.254 11.986 0.918 11.326C0.594 10.654 0.432 9.796 0.432 8.752C0.432 7.696 0.618 6.826 0.99 6.142C1.362 5.446 1.854 4.93 2.466 4.594C3.078 4.246 3.744 4.072 4.464 4.072C4.884 4.072 5.286 4.114 5.67 4.198C6.054 4.282 6.396 4.408 6.696 4.576V2.236C6.696 1.984 6.654 1.798 6.57 1.678C6.498 1.558 6.336 1.474 6.084 1.426L5.742 1.354V1.174L9.018 0.381999L9.216 0.543999L9.144 3.064V11.866C9.144 12.106 9.186 12.304 9.27 12.46C9.354 12.604 9.51 12.706 9.738 12.766L9.9 12.82V13L6.822 13.198L6.66 12.55C6.336 12.766 5.964 12.94 5.544 13.072C5.136 13.204 4.68 13.27 4.176 13.27ZM5.22 12.604C5.724 12.604 6.186 12.454 6.606 12.154V5.008C6.162 4.72 5.706 4.576 5.238 4.576C4.662 4.576 4.17 4.912 3.762 5.584C3.354 6.244 3.15 7.288 3.15 8.716C3.15 10.144 3.342 11.152 3.726 11.74C4.11 12.316 4.608 12.604 5.22 12.604ZM13.1482 13.27C12.4522 13.27 11.8642 13.072 11.3842 12.676C10.9162 12.28 10.6822 11.71 10.6822 10.966C10.6822 10.402 10.9702 9.886 11.5462 9.418C12.1222 8.938 13.0282 8.578 14.2642 8.338C14.4562 8.302 14.6722 8.266 14.9122 8.23C15.1522 8.182 15.4042 8.134 15.6682 8.086V6.664C15.6682 5.848 15.5662 5.278 15.3622 4.954C15.1702 4.618 14.8642 4.45 14.4442 4.45C14.1562 4.45 13.9282 4.546 13.7602 4.738C13.5922 4.918 13.4842 5.236 13.4362 5.692L13.4002 5.89C13.3762 6.406 13.2502 6.784 13.0222 7.024C12.7942 7.264 12.5122 7.384 12.1762 7.384C11.8642 7.384 11.6062 7.288 11.4022 7.096C11.1982 6.904 11.0962 6.646 11.0962 6.322C11.0962 5.83 11.2642 5.416 11.6002 5.08C11.9482 4.744 12.4042 4.492 12.9682 4.324C13.5322 4.156 14.1442 4.072 14.8042 4.072C15.8722 4.072 16.6942 4.336 17.2702 4.864C17.8582 5.38 18.1522 6.226 18.1522 7.402V11.38C18.1522 11.92 18.4042 12.19 18.9082 12.19H19.3042L19.4662 12.334C19.2382 12.622 18.9862 12.844 18.7102 13C18.4462 13.156 18.0682 13.234 17.5762 13.234C17.0482 13.234 16.6282 13.114 16.3162 12.874C16.0162 12.622 15.8182 12.292 15.7222 11.884C15.3622 12.268 14.9902 12.598 14.6062 12.874C14.2342 13.138 13.7482 13.27 13.1482 13.27ZM14.2462 12.172C14.4862 12.172 14.7082 12.118 14.9122 12.01C15.1282 11.89 15.3802 11.71 15.6682 11.47V8.446C15.5482 8.47 15.4282 8.494 15.3082 8.518C15.1882 8.542 15.0502 8.566 14.8942 8.59C14.3422 8.734 13.8982 8.98 13.5622 9.328C13.2382 9.664 13.0762 10.12 13.0762 10.696C13.0762 11.188 13.1902 11.56 13.4182 11.812C13.6462 12.052 13.9222 12.172 14.2462 12.172ZM21.9966 3.136C21.5886 3.136 21.2406 3.01 20.9526 2.758C20.6766 2.494 20.5386 2.164 20.5386 1.768C20.5386 1.36 20.6766 1.03 20.9526 0.778C21.2406 0.525999 21.5886 0.399999 21.9966 0.399999C22.4046 0.399999 22.7466 0.525999 23.0226 0.778C23.2986 1.03 23.4366 1.36 23.4366 1.768C23.4366 2.164 23.2986 2.494 23.0226 2.758C22.7466 3.01 22.4046 3.136 21.9966 3.136ZM19.8726 13V12.82L20.1246 12.748C20.3646 12.676 20.5266 12.568 20.6106 12.424C20.7066 12.28 20.7546 12.088 20.7546 11.848V6.214C20.7546 5.962 20.7066 5.776 20.6106 5.656C20.5266 5.524 20.3646 5.434 20.1246 5.386L19.8726 5.332V5.152L23.1666 4.09L23.3466 4.27L23.2926 6.826V11.866C23.2926 12.106 23.3346 12.298 23.4186 12.442C23.5146 12.586 23.6766 12.694 23.9046 12.766L24.0846 12.82V13H19.8726ZM24.8815 13V12.82L25.1335 12.748C25.5535 12.628 25.7635 12.334 25.7635 11.866V6.232C25.7635 5.968 25.7215 5.776 25.6375 5.656C25.5535 5.524 25.3915 5.434 25.1515 5.386L24.8815 5.314V5.134L27.9595 4.09L28.1395 4.27L28.2835 5.35C28.7035 4.978 29.1775 4.672 29.7055 4.432C30.2335 4.192 30.7555 4.072 31.2715 4.072C32.0635 4.072 32.6695 4.288 33.0895 4.72C33.5215 5.152 33.7375 5.812 33.7375 6.7V11.884C33.7375 12.352 33.9655 12.646 34.4215 12.766L34.5835 12.82V13H30.3355V12.82L30.5695 12.748C30.9895 12.616 31.1995 12.322 31.1995 11.866V6.124C31.1995 5.356 30.8155 4.972 30.0475 4.972C29.5195 4.972 28.9435 5.236 28.3195 5.764V11.884C28.3195 12.352 28.5295 12.646 28.9495 12.766L29.1115 12.82V13H24.8815ZM39.8057 4.072C40.5857 4.072 41.2517 4.234 41.8037 4.558C42.3557 4.87 42.7757 5.302 43.0637 5.854C43.3637 6.394 43.5137 7.012 43.5137 7.708C43.5137 7.84 43.5077 7.978 43.4957 8.122C43.4837 8.254 43.4597 8.374 43.4237 8.482H38.0597C38.0717 9.778 38.2997 10.714 38.7437 11.29C39.1997 11.854 39.8717 12.136 40.7597 12.136C41.3597 12.136 41.8457 12.04 42.2177 11.848C42.5897 11.656 42.9377 11.374 43.2617 11.002L43.4417 11.164C43.0697 11.824 42.5717 12.34 41.9477 12.712C41.3357 13.084 40.5977 13.27 39.7337 13.27C38.8817 13.27 38.1257 13.09 37.4657 12.73C36.8057 12.358 36.2897 11.83 35.9177 11.146C35.5457 10.462 35.3597 9.646 35.3597 8.698C35.3597 7.714 35.5757 6.88 36.0077 6.196C36.4397 5.5 36.9917 4.972 37.6637 4.612C38.3477 4.252 39.0617 4.072 39.8057 4.072ZM39.7517 4.432C39.4037 4.432 39.1037 4.54 38.8517 4.756C38.6117 4.96 38.4197 5.332 38.2757 5.872C38.1437 6.4 38.0717 7.15 38.0597 8.122H41.1377C41.2577 6.814 41.2097 5.872 40.9937 5.296C40.7777 4.72 40.3637 4.432 39.7517 4.432ZM44.4108 13V12.82L44.6628 12.748C44.8908 12.688 45.0468 12.586 45.1308 12.442C45.2268 12.298 45.2808 12.106 45.2928 11.866V6.232C45.2928 5.968 45.2508 5.776 45.1668 5.656C45.0828 5.524 44.9208 5.434 44.6808 5.386L44.4108 5.314V5.134L47.4888 4.09L47.6688 4.27L47.8128 5.494C48.2088 5.098 48.6588 4.762 49.1628 4.486C49.6788 4.21 50.2128 4.072 50.7648 4.072C51.3408 4.072 51.8028 4.192 52.1508 4.432C52.4988 4.66 52.7628 5.02 52.9428 5.512C53.4108 5.068 53.9148 4.72 54.4548 4.468C55.0068 4.204 55.5408 4.072 56.0568 4.072C56.9088 4.072 57.5328 4.276 57.9288 4.684C58.3368 5.092 58.5408 5.734 58.5408 6.61V11.884C58.5408 12.352 58.7568 12.646 59.1888 12.766L59.3868 12.82V13H55.2288V12.82L55.4088 12.766C55.6368 12.694 55.7928 12.586 55.8768 12.442C55.9728 12.298 56.0208 12.106 56.0208 11.866V6.358C56.0208 5.854 55.9308 5.512 55.7508 5.332C55.5708 5.14 55.2828 5.044 54.8868 5.044C54.5748 5.044 54.2688 5.116 53.9688 5.26C53.6808 5.392 53.3748 5.596 53.0508 5.872C53.1108 6.064 53.1468 6.274 53.1588 6.502C53.1828 6.73 53.1948 6.97 53.1948 7.222V11.884C53.2068 12.352 53.4228 12.646 53.8428 12.766L54.0048 12.82V13H49.8288V12.82L50.0808 12.748C50.3088 12.676 50.4648 12.574 50.5488 12.442C50.6448 12.298 50.6928 12.106 50.6928 11.866V6.376C50.6928 5.896 50.6028 5.554 50.4228 5.35C50.2548 5.146 49.9608 5.044 49.5408 5.044C49.2648 5.044 48.9888 5.116 48.7128 5.26C48.4368 5.392 48.1488 5.59 47.8488 5.854V11.884C47.8488 12.352 48.0588 12.646 48.4788 12.766L48.6408 12.82V13H44.4108ZM62.613 13.27C61.917 13.27 61.329 13.072 60.849 12.676C60.381 12.28 60.147 11.71 60.147 10.966C60.147 10.402 60.435 9.886 61.011 9.418C61.587 8.938 62.493 8.578 63.729 8.338C63.921 8.302 64.137 8.266 64.377 8.23C64.617 8.182 64.869 8.134 65.133 8.086V6.664C65.133 5.848 65.031 5.278 64.827 4.954C64.635 4.618 64.329 4.45 63.909 4.45C63.621 4.45 63.393 4.546 63.225 4.738C63.057 4.918 62.949 5.236 62.901 5.692L62.865 5.89C62.841 6.406 62.715 6.784 62.487 7.024C62.259 7.264 61.977 7.384 61.641 7.384C61.329 7.384 61.071 7.288 60.867 7.096C60.663 6.904 60.561 6.646 60.561 6.322C60.561 5.83 60.729 5.416 61.065 5.08C61.413 4.744 61.869 4.492 62.433 4.324C62.997 4.156 63.609 4.072 64.269 4.072C65.337 4.072 66.159 4.336 66.735 4.864C67.323 5.38 67.617 6.226 67.617 7.402V11.38C67.617 11.92 67.869 12.19 68.373 12.19H68.769L68.931 12.334C68.703 12.622 68.451 12.844 68.175 13C67.911 13.156 67.533 13.234 67.041 13.234C66.513 13.234 66.093 13.114 65.781 12.874C65.481 12.622 65.283 12.292 65.187 11.884C64.827 12.268 64.455 12.598 64.071 12.874C63.699 13.138 63.213 13.27 62.613 13.27ZM63.711 12.172C63.951 12.172 64.173 12.118 64.377 12.01C64.593 11.89 64.845 11.71 65.133 11.47V8.446C65.013 8.47 64.893 8.494 64.773 8.518C64.653 8.542 64.515 8.566 64.359 8.59C63.807 8.734 63.363 8.98 63.027 9.328C62.703 9.664 62.541 10.12 62.541 10.696C62.541 11.188 62.655 11.56 62.883 11.812C63.111 12.052 63.387 12.172 63.711 12.172ZM72.6398 13.054L69.8678 5.44C69.7358 5.056 69.4718 4.786 69.0758 4.63L68.7698 4.522V4.342H73.1798V4.522L72.9098 4.594C72.4418 4.738 72.2858 5.026 72.4418 5.458L74.1158 10.552L75.6098 6.592L75.2678 5.566C75.1838 5.302 75.0938 5.104 74.9978 4.972C74.9138 4.828 74.7998 4.726 74.6558 4.666L74.3498 4.522V4.342H78.0758V4.522L77.8238 4.63C77.6438 4.702 77.5358 4.798 77.4998 4.918C77.4638 5.038 77.4878 5.218 77.5718 5.458L79.2278 10.462L80.9378 5.494C81.1058 5.038 81.0158 4.75 80.6678 4.63L80.2718 4.522V4.342H82.4318V4.522L81.9998 4.648C81.7958 4.708 81.6458 4.804 81.5498 4.936C81.4658 5.056 81.3878 5.224 81.3158 5.44L78.7238 13.054H77.8058L75.8078 7.168L73.6838 13.054H72.6398ZM87.0557 4.072C87.8357 4.072 88.5017 4.234 89.0537 4.558C89.6057 4.87 90.0257 5.302 90.3137 5.854C90.6137 6.394 90.7637 7.012 90.7637 7.708C90.7637 7.84 90.7577 7.978 90.7457 8.122C90.7337 8.254 90.7097 8.374 90.6737 8.482H85.3097C85.3217 9.778 85.5497 10.714 85.9937 11.29C86.4497 11.854 87.1217 12.136 88.0097 12.136C88.6097 12.136 89.0957 12.04 89.4677 11.848C89.8397 11.656 90.1877 11.374 90.5117 11.002L90.6917 11.164C90.3197 11.824 89.8217 12.34 89.1977 12.712C88.5857 13.084 87.8477 13.27 86.9837 13.27C86.1317 13.27 85.3757 13.09 84.7157 12.73C84.0557 12.358 83.5397 11.83 83.1677 11.146C82.7957 10.462 82.6097 9.646 82.6097 8.698C82.6097 7.714 82.8257 6.88 83.2577 6.196C83.6897 5.5 84.2417 4.972 84.9137 4.612C85.5977 4.252 86.3117 4.072 87.0557 4.072ZM87.0017 4.432C86.6537 4.432 86.3537 4.54 86.1017 4.756C85.8617 4.96 85.6697 5.332 85.5257 5.872C85.3937 6.4 85.3217 7.15 85.3097 8.122H88.3877C88.5077 6.814 88.4597 5.872 88.2437 5.296C88.0277 4.72 87.6137 4.432 87.0017 4.432ZM91.6608 13V12.82L91.9308 12.748C92.1708 12.676 92.3328 12.568 92.4168 12.424C92.5128 12.28 92.5608 12.094 92.5608 11.866V6.232C92.5608 5.968 92.5128 5.776 92.4168 5.656C92.3328 5.524 92.1708 5.434 91.9308 5.386L91.6608 5.314V5.134L94.7568 4.09L94.9368 4.27L95.0988 5.818V5.962C95.2668 5.626 95.4828 5.32 95.7468 5.044C96.0228 4.756 96.3228 4.522 96.6468 4.342C96.9828 4.162 97.3128 4.072 97.6368 4.072C98.0928 4.072 98.4408 4.198 98.6808 4.45C98.9208 4.702 99.0408 5.02 99.0408 5.404C99.0408 5.812 98.9208 6.13 98.6808 6.358C98.4528 6.574 98.1768 6.682 97.8528 6.682C97.3488 6.682 96.9048 6.43 96.5208 5.926L96.4848 5.89C96.3648 5.722 96.2268 5.632 96.0708 5.62C95.9148 5.596 95.7708 5.668 95.6388 5.836C95.5188 5.944 95.4168 6.076 95.3328 6.232C95.2608 6.376 95.1888 6.544 95.1168 6.736V11.758C95.1168 12.238 95.3268 12.538 95.7468 12.658L96.3228 12.82V13H91.6608Z" fill="black" />
			</svg>
		</Link>
	)
}