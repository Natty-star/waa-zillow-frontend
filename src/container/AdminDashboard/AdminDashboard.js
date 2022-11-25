import CusomerList from "./CustomerList";
import PropertyList from "./ProperyList";
import "./AdminDashboard.css";


const AdminDashboard = () => {
    return (<div>
        <CusomerList />
        <PropertyList />
    </div>);
}

export default AdminDashboard;