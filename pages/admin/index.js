import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DashboardLayout from "../../components/dashboardLayout/DashboardLayout";

const Index = () => {
	const router = useRouter();

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		router.push({ pathname: "admin/users" });
	// 	}, 4000);
	// }, []);

	return <DashboardLayout>index</DashboardLayout>;
};

export default Index;
