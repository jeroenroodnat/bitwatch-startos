# Bitwatch Instructions

## Initial Setup

1. **Configure Mempool Source**
   - For privacy, install and configure the Mempool service first
   - Install and configure Fulcrum 2.0.0 service for fast address lookups
   - Set the Mempool API URL to `http://mempool.embassy:8080`
   - Set the Mempool WEB URL to your local Mempool instance URL.
   - Alternatively, use the public API: `https://mempool.space`

2. **Add Bitcoin Addresses**
   - Navigate to the Bitwatch web interface
   - Click "Add Address" to monitor new addresses
   - You can add individual addresses or extended public keys

3. **Configure Telegram Notifications (Optional)**
   - Create a Telegram bot via @BotFather
   - Get your bot token and chat ID
   - Enter these in the configuration page

## Usage Tips

- Monitor famous addresses like Satoshi's coins
- Set up honeypot addresses for security monitoring
- Track donation addresses for your projects

## Troubleshooting

- If using local Mempool, ensure it's fully synced
- For Raspberry Pi users, Fulcrum is recommended over Electrs
- Check logs if addresses aren't updating properly
