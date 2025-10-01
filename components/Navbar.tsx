type NavbarProps = {
    name?: string;
  };
  
export default function Navbar({ name = "AC Milan Fan Zone" }: NavbarProps) {
    return (
        <nav style={{ border: "1px solid white", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "black", color: "white"}}>
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
            {name}
        </div>
  
        <div style={{ display: "flex", gap: "15px" }}>
            <a href="#home" style={{ color: "white"}}>Home</a>
            <a href="#stats" style={{ color: "white"}}>Stats</a>
            <a href="#trivia" style={{ color: "white"}}>Trivia</a>
            <a href="#player" style={{ color: "white"}}>Random Player</a>
        </div>
        </nav>
    );
}