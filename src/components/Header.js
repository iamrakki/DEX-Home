import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as walletUtils from './wallet';

function Header() {
    const [accounts, setAccounts] = useState([]);
    const [currentNetwork, setCurrentNetwork] = useState('');
    const [selectedNetwork, setSelectedNetwork] = useState('1'); 

    useEffect(() => {
        walletUtils.connectWallet()
            .then((web3Instance) => {
                if (web3Instance) {
                    walletUtils.getAccounts().then((accounts) => setAccounts(accounts));

                    walletUtils.getCurrentNetwork().then((networkId) => setCurrentNetwork(networkId));
                }
            });
    }, []);

    const connectWallet = async () => {
        walletUtils.connectWallet()
            .then((web3Instance) => {
                if (web3Instance) {
                    walletUtils.getAccounts().then((updatedAccounts) => setAccounts(updatedAccounts));
                }
            });
    };

    const handleNetworkChange = async (event) => {
        const newNetworkId = event.target.value;

        if (newNetworkId !== currentNetwork) {
            await walletUtils.switchNetwork(newNetworkId);

            setCurrentNetwork(newNetworkId);
            walletUtils.getAccounts().then((updatedAccounts) => setAccounts(updatedAccounts));
        }

        setSelectedNetwork(newNetworkId);
    };

    return (
        <header>
            <div className='leftH'>
                <div className='headerItem'>Unidex</div>
            </div>
            <div className='rightH'>
                <Link to='/' className='link'>
                    <div className='headerItem'>Swap</div>
                </Link>
                <Link to='/prep' className='link'>
                    <div className='headerItem'>Prep</div>
                </Link>
                <Link to='/earn' className='link'>
                    <div className='headerItem'>Earn</div>
                </Link>
                <Link to='/stake' className='link'>
                    <div className='headerItem'>Stake</div>
                </Link>

                <div className='networkDropdown'>
                    <label>
                        <select value={selectedNetwork} onChange={handleNetworkChange}>
                            <option value="1">Mainnet</option>
                            <option value="4">Rinkeby</option>
                        </select>
                    </label>
                </div>

                <button className='connectionButton'  onClick={connectWallet}>
                    {accounts.length > 0 ? `Connected: ${accounts[0]}` : 'Connect Wallet'}
                </button>
            </div>
        </header>
    );
}

export default Header;
