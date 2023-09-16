import DashboardNavbar from "../dashboardNavbar/dashboardNavbar"
import DashboardNavigation from "../dashboardNavigation/dashboardNavigation"
import DisplayReports from "../Users/UsersList"

const Dashboard = () => {
    return (
        <>
            <DashboardNavbar />
            <DashboardNavigation />
            <DisplayReports/>
        </>
    )
}

export default Dashboard