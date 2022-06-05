
const { ethers, upgrades } = require('hardhat');

async function main () {
    const SmartContract = await ethers.getContractFactory('ERC721PresetMinterPauserAutoIdUpgradeable');
    console.log('Deploying ERC721PresetMinterPauserAutoIdUpgradeable...');
    const sc = await upgrades.deployProxy(SmartContract, ['Great NFT', 'GNFT', 'https://static.schoolbuy.top/media/ula/'], { initializer: 'initialize' });
    await sc.deployed();
    console.log('Contract deployed to:', sc.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

