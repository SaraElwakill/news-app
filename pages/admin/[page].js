import DashboardLayout from "../../components/dashboardLayout/DashboardLayout";
import Users from "../../components/users/Users";

const admin = ({ Component, pageProps }) => {
	return (
		<DashboardLayout>
			<Component {...pageProps} />
		</DashboardLayout>
	);
};

export default users;
