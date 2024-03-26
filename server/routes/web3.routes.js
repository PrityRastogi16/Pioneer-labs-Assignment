const express = require('express');
const Web3 = require('web3');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize web3 with the provider
const web3 = new Web3('http://localhost:2002/');

// Endpoint to retrieve Ethereum account balance
app.get('/balance/:address', async (req, res) => {
    try {
        const address = req.params.address;
        
        // Check if the address is a valid Ethereum address
        if (!web3.utils.isAddress(address)) {
            return res.status(400).json({ error: 'Invalid Ethereum address' });
        }

        // Fetch the balance of the account
        const balance = await web3.eth.getBalance(address);

        // Convert balance from Wei to Ether
        const balanceInEther = web3.utils.fromWei(balance, 'ether');

        res.json({ address, balance: balanceInEther });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
