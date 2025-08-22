// PayPal IPN Handler for Cloudflare Workers
export async function onRequestPost({ request, env }) {
  try {
    const body = await request.text();
    
    // Parse the IPN data
    const params = new URLSearchParams(body);
    const ipnData = Object.fromEntries(params);
    
    // Verify the IPN with PayPal
    const verificationBody = `cmd=_notify-validate&${body}`;
    
    // Use sandbox or live URL based on environment
    const paypalUrl = env.PAYPAL_ENV === 'production' 
      ? 'https://ipnpb.paypal.com/cgi-bin/webscr'
      : 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr';
    
    const verifyResponse = await fetch(paypalUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': verificationBody.length.toString(),
      },
      body: verificationBody,
    });
    
    const verifyText = await verifyResponse.text();
    
    if (verifyText === 'VERIFIED') {
      // Process the verified IPN
      const paymentStatus = ipnData.payment_status;
      const txnId = ipnData.txn_id;
      const payerEmail = ipnData.payer_email;
      const itemName = ipnData.item_name;
      const paymentAmount = ipnData.mc_gross;
      const paymentCurrency = ipnData.mc_currency;
      const receiverEmail = ipnData.receiver_email;
      
      // Verify receiver email matches your PayPal email
      if (receiverEmail !== 'plumcandy@aaliyah.com.br') {
        console.error('Invalid receiver email:', receiverEmail);
        return new Response('Invalid receiver', { status: 400 });
      }
      
      // Check payment status
      if (paymentStatus === 'Completed') {
        // Payment successful - log or store in database
        console.log('Payment completed:', {
          txnId,
          payerEmail,
          itemName,
          amount: paymentAmount,
          currency: paymentCurrency
        });
        
        // Here you would typically:
        // 1. Store the order in a database
        // 2. Send confirmation email to customer
        // 3. Update inventory if needed
        
        // For now, just log the successful payment
        if (env.KV) {
          // Store in Cloudflare KV if available
          await env.KV.put(`order_${txnId}`, JSON.stringify({
            txnId,
            payerEmail,
            itemName,
            amount: paymentAmount,
            currency: paymentCurrency,
            timestamp: new Date().toISOString(),
            status: 'completed'
          }));
        }
      } else if (paymentStatus === 'Pending') {
        console.log('Payment pending:', txnId);
      } else if (paymentStatus === 'Failed' || paymentStatus === 'Denied') {
        console.error('Payment failed:', txnId, paymentStatus);
      }
      
      return new Response('IPN Processed', { status: 200 });
    } else if (verifyText === 'INVALID') {
      console.error('Invalid IPN received');
      return new Response('Invalid IPN', { status: 400 });
    } else {
      console.error('Unexpected verification response:', verifyText);
      return new Response('Verification error', { status: 500 });
    }
  } catch (error) {
    console.error('IPN processing error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

// Handle GET requests (for testing)
export async function onRequestGet() {
  return new Response('PayPal IPN Handler is running', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}