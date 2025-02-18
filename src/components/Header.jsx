import chefClaudeIcon from "/src/assets/Chef-Claude-Icon.png"

export default function Header() {
    return (
        <nav className="nav-bar">
            <img className="nav-icon" src={chefClaudeIcon} alt="Chef Claude Icon" />
            <span className="nav-title">Chef Claude</span>
        </nav>
    )
}