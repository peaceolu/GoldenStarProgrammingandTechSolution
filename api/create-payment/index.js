// api/create-payment/index.js
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, amount, serviceName, customerName, projectDetails } = req.body;

    // Validate required fields
    if (!email || !amount || !serviceName) {
      return res.status(400).json({ 
        error: 'Missing required fields: email, amount, serviceName' 
      });
    }

    // Convert amount to kobo (Paystack uses smallest currency unit)
    const amountInKobo = amount * 100;

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
        metadata: {
          service_name: serviceName,
          customer_name: customerName,
          project_details: projectDetails,
          custom_fields: [
            {
              display_name: "Service",
              variable_name: "service",
              value: serviceName
            },
            {
              display_name: "Customer Name", 
              variable_name: "customer_name",
              value: customerName
            }
          ]
        }
      }),
    });

    const data = await response.json();

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
    console.error('Paystack error:', error);
    res.status(500).json({ 
      success: false,
      error: error.message || 'Payment initialization failed'
    });
  }
}