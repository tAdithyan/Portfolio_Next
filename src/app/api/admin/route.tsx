import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = 'your-secret-key'; // Replace with a strong secret key
const JWT_EXPIRATION = '1h'; // Set token expiration (e.g., 1 hour)

export async function POST(req) {
  // Parse the incoming JSON request body
  const { email, password } = await req.json();

  // Basic validation to ensure the fields are provided
  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: 'Email and password are required' }),
      { status: 400 }
    );
  }

  // Hardcoded credentials for simplicity (replace with actual DB or external service)
  const adminCredentials = {
    email: 'admin@example.com',
    password: 'admin123',
  };

  // Check if the provided email and password match the admin credentials
  if (email === adminCredentials.email && password === adminCredentials.password) {
    // Create a payload for the JWT token (e.g., user ID, email, role)
    const payload = {
      email: adminCredentials.email,
      role: 'admin', // You can add more fields here
    };

    // Generate a JWT token
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRATION });

    // Respond with a success message and the token
    return new Response(
      JSON.stringify({ message: 'Login successful', token }),
      { status: 200 }
    );
  } else {
    // Respond with an error if credentials are incorrect
    return new Response(
      JSON.stringify({ message: 'Invalid email or password' }),
      { status: 401 }
    );
  }
}
