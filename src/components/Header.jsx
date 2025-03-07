import AIChefIcon from "/src/assets/AI-Chef-Icon.png"

export default function Header() {
    return (
        <nav className="nav-bar">
            <img className="nav-icon" src={AIChefIcon} alt="AI Chef Icon" />
            <span className="nav-title">AI Chef</span>
        </nav>
    )
}