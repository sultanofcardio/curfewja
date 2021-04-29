import githubIcon from "../img/github.svg";
import styles from './GitHubIcon.module.css'

export const GitHubIcon = ({className}) => {
  return (
    <a className={`${styles.icon} ${className}`} href="https://github.com/sultanofcardio/curfewja" target="_blank" rel="noreferrer">
      <img src={githubIcon} alt="GitHub link"/>
    </a>
  )
}