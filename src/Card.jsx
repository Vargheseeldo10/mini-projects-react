import profilepic from "./assets/profile.jpg";
function Card(){
    return(
        <div className="card">
             <img className="card-img" src={profilepic} alt="profile pic" />
             <h2 className="card-title">Varghese Eldo</h2>
             <p className="card-txt">I am a react developer who makes websites for fun</p>
        </div>
    )
}

export default Card