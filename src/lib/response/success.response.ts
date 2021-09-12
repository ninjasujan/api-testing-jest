export default function (status: number, data: any) {
	return {
		success: true,
		status,
		data,
	};
}
