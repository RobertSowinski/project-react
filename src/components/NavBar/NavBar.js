import styles from './NavBar.module.scss';

const NavBar =() => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <a href="/" className={styles.logo}>
                    <span className="fa fa-tasks"></span>
                </a>
                <ul className={styles.menu}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/favourite">Favourite</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;