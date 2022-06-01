/** @format */

const userSchema = {
	username: String,
	password: String,
	phone: String,
	name: String,
	status: String,
	accounts: [
		{
			accountname: String,
			amount: Number,
			status: String,
		},
	],
};
