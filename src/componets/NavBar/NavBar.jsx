import { UserWidget } from "../UserWidget/UserWidget"


export const NavBar = () => {

    return (
        <nav className="d-flex justify-content-around p-4">
            <div>
                <button className="btn btn-primary mx-2">Digital</button>
                <button className="btn btn-primary mx-2">Books</button>
                <button className="btn btn-primary mx-2">Comics</button>
            </div>
            <div className="d-flex gap-3">  
                <UserWidget/>
                <p>User_1</p>
            </div>

        </nav>
    )
}
