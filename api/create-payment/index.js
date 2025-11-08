// api/create-payment/index.js
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Received payment request:', req.body);
  console.log('Paystack Key exists:', !!process.env.PAYSTACK_SECRET_KEY);

  try {
    const { email, amount, serviceName, customerName, projectDetails } = req.body;

    // Validate required fields
    if (!email || !amount || !serviceName) {
      return res.status(400).json({ 
        error: 'Missing required fields: email, amount, serviceName' 
      });
    }

    // Check if Paystack key is available
    if (!process.env.PAYSTACK_SECRET_KEY) {
      throw new Error('Paystack secret key is missing from environment variables');
    }

    // Convert dollar amount to naira
    const exchangeRate = 1500;
    const amountInNaira = amount * exchangeRate;
    const amountInKobo = amountInNaira * 100;

    console.log('Sending to Paystack:', {
      email,
      originalAmount: amount,
      nairaAmount: amountInNaira,
      koboAmount: amountInKobo
    });

    // Initialize Paystack payment
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        amount: amountInKobo,
        currency: 'NGN',
        metadata: {
          service_name: serviceName,
          customer_name: customerName,
          project_details: projectDetails
        }
      }),
    });

    const data = await response.json();
    console.log('Paystack response:', data);

    if (!data.status) {
      throw new Error(data.message || 'Failed to initialize payment');
    }

    // Return the authorization URL to the frontend
    res.status(200).json({
      success: true,
      authorizationUrl: data.data.authorization_url,
      reference: data.data.reference
    });

  } catch (error) {
    console.error('❌ Paystack error:', error);
    res.status(500).json({ 
      success: false,
      error: error.message || 'Payment initialization failed',
      details: 'Check server logs for more information'
    });
  }
}
