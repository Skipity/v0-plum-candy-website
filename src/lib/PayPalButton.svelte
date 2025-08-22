<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  
  export let itemName = '';
  export let basePrice = 0;
  export let buttonId = '';
  export let buttonText = 'Reserve Now';
  export let buttonClass = 'bg-white text-purple-800 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors whitespace-nowrap';
  
  let isLoading = false;
  
  // PayPal configuration
  const PAYPAL_CLIENT_ID = 'AcIRN8E_ggIpsFeIMMo7b6ctsLHEjv_GK8sCpKHwI3v2DHpo-_VBf05LtcbdoKv2T_L1l7uTjNGb8lif';
  
  function handlePayPalClick() {
    if (isLoading) return;
    isLoading = true;
    
    // Get user's state for tax calculation
    const userState = localStorage.getItem('userState') || 'NY';
    const taxRate = getTaxRate(userState);
    const tax = Math.round(basePrice * taxRate * 100) / 100;
    
    // Create and submit the form with all required fields
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://www.paypal.com/cgi-bin/webscr';
    form.target = '_blank';
    
    const fields = {
      'cmd': '_xclick',
      'business': 'plumcandy@aaliyah.com.br',
      'item_name': itemName,
      'item_number': buttonId,
      'amount': basePrice.toFixed(2),
      'tax': tax.toFixed(2),
      'currency_code': 'USD',
      'no_shipping': '2', // Prompt for shipping address
      'no_note': '1', // No note field
      'rm': '2', // Return method POST
      'return': 'https://aaliyah.com.br/thank-you',
      'cancel_return': 'https://aaliyah.com.br/',
      'notify_url': 'https://aaliyah.com.br/api/paypal-ipn',
      'custom': buttonId,
      'invoice': 'PC-' + Date.now(),
      'charset': 'utf-8',
      'lc': 'US', // Locale
      'bn': 'PP-BuyNowBF', // Button source
      'address_override': '0' // Allow customer to change address
    };
    
    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    // Reset loading state after a delay
    setTimeout(() => {
      isLoading = false;
    }, 2000);
  }
  
  function getTaxRate(state) {
    const taxRates = {
      'AL': 0.04, 'AK': 0.00, 'AZ': 0.056, 'AR': 0.065, 'CA': 0.0725, 'CO': 0.029,
      'CT': 0.0635, 'DE': 0.00, 'FL': 0.06, 'GA': 0.04, 'HI': 0.04, 'ID': 0.06,
      'IL': 0.0625, 'IN': 0.07, 'IA': 0.06, 'KS': 0.065, 'KY': 0.06, 'LA': 0.0445,
      'ME': 0.055, 'MD': 0.06, 'MA': 0.0625, 'MI': 0.06, 'MN': 0.06875, 'MS': 0.07,
      'MO': 0.04225, 'MT': 0.00, 'NE': 0.055, 'NV': 0.0685, 'NH': 0.00, 'NJ': 0.06625,
      'NM': 0.05125, 'NY': 0.08, 'NC': 0.0475, 'ND': 0.05, 'OH': 0.0575, 'OK': 0.045,
      'OR': 0.00, 'PA': 0.06, 'RI': 0.07, 'SC': 0.06, 'SD': 0.045, 'TN': 0.07,
      'TX': 0.0625, 'UT': 0.0485, 'VT': 0.06, 'VA': 0.053, 'WA': 0.065, 'WV': 0.06,
      'WI': 0.05, 'WY': 0.04
    };
    return taxRates[state] || 0.0863; // Default to Nassau County, NY if not found
  }
</script>

<!-- Keep the exact same button appearance as before -->
<button 
  onclick={handlePayPalClick}
  class={buttonClass}
  disabled={isLoading}
>
  {isLoading ? 'Processing...' : buttonText}
</button>