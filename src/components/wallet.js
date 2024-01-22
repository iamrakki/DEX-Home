import Web3 from 'web3';

let web3;

export const connectWallet = async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return web3;
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      return null;
    }
  } else {
    console.error('MetaMask not detected!');
    return null;
  }
};

export const switchNetwork = async (networkId) => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${networkId}` }],
    });
  } catch (error) {
    console.error('Error switching network:', error);
  }
};

export const getCurrentNetwork = async () => {
  if (web3) {
    try {
      const networkId = await web3.eth.net.getId();
      return networkId;
    } catch (error) {
      console.error('Error getting current network:', error);
      return null;
    }
  } else {
    console.error('Web3 instance not available!');
    return null;
  }
};

export const getAccounts = async () => {
  if (web3) {
    try {
      const accounts = await web3.eth.getAccounts();
      return accounts;
    } catch (error) {
      console.error('Error getting accounts:', error);
      return null;
    }
  } else {
    console.error('Web3 instance not available!');
    return null;
  }
};
