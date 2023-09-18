import Navbar from "./Navbar"
import DisplayReports from "../Users/UsersList"

const Dashboard = () => {
    return (
        <>
        <div className="bg-dash min-h-screen">
            <Navbar />
            <DisplayReports/>
        </div>
            
        </>
    )
}

export default Dashboard