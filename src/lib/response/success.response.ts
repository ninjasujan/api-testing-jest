export default function (statusCode: number, data: any) {
	return {
		status: "success",
		statusCode,
		data,
	};
}
