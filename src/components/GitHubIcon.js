import githubIcon from "../img/github.svg";
import styles from './GitHubIcon.module.css'

export const GitHubIcon = () => {
  return (
    <a className={styles.icon} href="https://github.com/sultanofcardio/curfewja" target="_blank" rel="noreferrer">
      <img src={githubIcon} alt="GitHub link"/>
    </a>
  )
}