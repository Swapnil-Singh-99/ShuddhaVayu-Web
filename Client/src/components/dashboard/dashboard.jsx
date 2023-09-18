import Navbar from "./Navbar"
import DisplayReports from "../Users/UsersList"

const Dashboard = () => {
    return (
        <>
        <div className="bg-dash">
            <Navbar />
            <DisplayReports/>
        </div>
            
        </>
    )
}

export default Dashboard