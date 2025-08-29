# 22BAI1335 BFHL API Project - Bajaj

A REST API built with Node.js and Express that processes input arrays and returns categorized data including numbers, alphabets, special characters, and more.

## Live Demo

- **API Endpoint**: [https://bajaj-chi-three.vercel.app/bfhl](https://bajaj-chi-three.vercel.app/bfhl)
- **Frontend UI**: [https://bajaj-chi-three.vercel.app/](https://bajaj-chi-three.vercel.app/)

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Hosting**: Vercel
- **Version Control**: Git, GitHub

## 📂 Project Structure

```
bajaj/
├── index.js              # Express server and API logic
├── package.json          # Dependencies and scripts
├── vercel.json          # Vercel deployment configuration
├── public/              # Frontend files
│   └── index.html       # User interface
└── README.md           # Project documentation
```

## 🔧 API Endpoints

### POST /bfhl

Processes input data and returns categorized results.

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"],
  "full_name": "johndoe",
  "dob": "17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123"
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "johndoe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## 🧪 Testing

### Using cURL:
```bash
curl -X POST https://bajaj-chi-three.vercel.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{
    "data": ["a","1","334","4","R","$"],
    "full_name": "johndoe",
    "dob": "17091999",
    "email": "john@xyz.com",
    "roll_number": "ABCD123"
  }'
```

### Using the Web Interface:
Visit [https://bajaj-chi-three.vercel.app/](https://bajaj-chi-three.vercel.app/) and use the form to test the API.

## 🚦 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/saadhvi-r28/bajaj.git
   cd bajaj
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server:**
   ```bash
   node index.js
   ```

4. **Test locally:**
   - API: `http://localhost:3000/bfhl`
   - Frontend: `http://localhost:3000/`

## 📦 Deployment

This project is deployed on Vercel with automatic deployment from GitHub.

## 👨‍💻 Author

**Saadhvi Ramachandran**
- GitHub: [@saadhvi-r28](https://github.com/saadhvi-r28)
- Project Link: [https://github.com/saadhvi-r28/bajaj](https://github.com/saadhvi-r28/bajaj)

## 🙏 Acknowledgments

- Built as part of a coding challenge
- Deployed on Vercel for reliable hosting
- Follows REST API best practices
