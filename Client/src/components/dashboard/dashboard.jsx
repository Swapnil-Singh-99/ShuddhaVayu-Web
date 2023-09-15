import DashboardNavbar from "../dashboardNavbar/dashboardNavbar"
import DashboardNavigation from "../dashboardNavigation/dashboardNavigation"
import UserReports from "../userReports/userReports"

const Dashboard = () => {
    return (
        <>
            <DashboardNavbar />
            <DashboardNavigation />
            <UserReports />
        </>
    )
}

export default Dashboard