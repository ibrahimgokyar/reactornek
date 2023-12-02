
function formatName(formatUser) {
    return formatUser.firstname + ' ' + formatUser.lastname;
}
const User= {
    "name":"ibrahim",
    "surname":"gökyar",
    "mail":"ibrahim@abc.com",
    "city":"istanbul"
}

const formatUser= {
    firstname:'Hakan',
    lastname : 'Yılmaz'
}

const UserComponent =() => {
    return(
        <>
        <h2>{User.name},{User.surname}</h2>
        <p>Mail Adresi : {User.mail}</p>
        <p>Şehir : {User.city}</p>
        <h1>Merhaba, {formatName(formatUser)}!</h1>
        </>
    )
}

export default function UserOrnek() {
    return(
        <div className="App">
            <UserComponent />
        </div>
    )
}