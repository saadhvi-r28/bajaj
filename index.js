const express = require('express');
const app = express();
app.use(express.json());


// User details can be set via environment variables or request body
const FULL_NAME = process.env.FULL_NAME || "your_name"; // lowercase, as per requirement
const DOB = process.env.DOB || "ddmmyyyy";
const EMAIL = process.env.EMAIL || "your_email@example.com";
const ROLL_NUMBER = process.env.ROLL_NUMBER || "YOURROLL123";

function isNumber(str) {
	return /^\d+$/.test(str);
}

function isAlphabet(str) {
	return /^[a-zA-Z]+$/.test(str);
}

function isSpecialChar(str) {
	return !isNumber(str) && !isAlphabet(str);
}

function alternatingCapsReverse(str) {
	let chars = str.split("").reverse();
	let result = "";
	let upper = true;
	for (let ch of chars) {
		if (/[a-zA-Z]/.test(ch)) {
			result += upper ? ch.toUpperCase() : ch.toLowerCase();
			upper = !upper;
		}
	}
	return result;
}

app.post('/bfhl', (req, res) => {
	try {
		const data = req.body.data;
		// Optionally accept user info from request body
		const full_name = (req.body.full_name || FULL_NAME).toLowerCase();
		const dob = req.body.dob || DOB;
		const email = req.body.email || EMAIL;
		const roll_number = req.body.roll_number || ROLL_NUMBER;

		if (!Array.isArray(data)) throw new Error("Invalid input: 'data' must be an array");

		let even_numbers = [], odd_numbers = [], alphabets = [], special_characters = [], sum = 0, alphaConcat = "";

		for (let item of data) {
			if (isNumber(item)) {
				let num = parseInt(item, 10);
				if (num % 2 === 0) even_numbers.push(item);
				else odd_numbers.push(item);
				sum += num;
			} else if (isAlphabet(item)) {
				alphabets.push(item.toUpperCase());
				alphaConcat += item;
			} else if (isSpecialChar(item)) {
				special_characters.push(item);
			}
		}

		const concat_string = alternatingCapsReverse(alphaConcat);

		res.status(200).json({
			is_success: true,
			user_id: `${full_name}_${dob}`,
			email: email,
			roll_number: roll_number,
			odd_numbers,
			even_numbers,
			alphabets,
			special_characters,
			sum: sum.toString(),
			concat_string
		});
	} catch (err) {
		res.status(400).json({
			is_success: false,
			message: err.message
		});
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
