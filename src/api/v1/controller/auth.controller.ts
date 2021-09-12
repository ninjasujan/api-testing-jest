import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import AuthService from "../../../service/auth.service";
const authService = new AuthService();

const loginHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { email }: { email: string } = req.body;
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const message = errors.array()[0].msg;
			throw new Error(message);
		}
		const response = await authService.login(email);
		res.status(200).json({
			success: true,
			message: "data fetched successfully",
			data: response,
		});
	} catch (error) {
		next(error);
	}
};

export default { loginHandler };
