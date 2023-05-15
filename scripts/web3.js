let account = null;
let contract = null;
// const ABI = '[{"type":"function","name":"mint","constant":false,"stateMutability":"payable","payable":true,"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_quantity"}],"outputs":[]},{"type":"constructor","stateMutability":"payable","payable":true,"inputs":[]},{"type":"event","anonymous":false,"name":"Airdrop","inputs":[{"type":"uint256","name":"tokenId","indexed":false}]},{"type":"event","anonymous":false,"name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"approved","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"operator","indexed":true},{"type":"bool","name":"approved","indexed":false}]},{"type":"event","anonymous":false,"name":"Mint","inputs":[{"type":"uint256","name":"tokenId","indexed":false}]},{"type":"event","anonymous":false,"name":"NewURI","inputs":[{"type":"string","name":"oldURI","indexed":false},{"type":"string","name":"newURI","indexed":false}]},{"type":"event","anonymous":false,"name":"RoleAdminChanged","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"bytes32","name":"previousAdminRole","indexed":true},{"type":"bytes32","name":"newAdminRole","indexed":true}]},{"type":"event","anonymous":false,"name":"RoleGranted","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"address","name":"account","indexed":true},{"type":"address","name":"sender","indexed":true}]},{"type":"event","anonymous":false,"name":"RoleRevoked","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"address","name":"account","indexed":true},{"type":"address","name":"sender","indexed":true}]},{"type":"event","anonymous":false,"name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"function","name":"ADMIN_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"AIRDROPPER_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"DEFAULT_ADMIN_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"MAX_SUPPLY","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"airdrop","constant":false,"payable":false,"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_quantity"}],"outputs":[]},{"type":"function","name":"approve","constant":false,"payable":false,"inputs":[{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"balanceOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"baseExtension","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"baseUri","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"getApproved","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRoleAdmin","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes32","name":"role"}],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"grantRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"hasRole","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"isApprovedForAll","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"},{"type":"address","name":"operator"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"name","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"ownerOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"price","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"renounceRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"revokeRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"},{"type":"bytes","name":"data"}],"outputs":[]},{"type":"function","name":"setApprovalForAll","constant":false,"payable":false,"inputs":[{"type":"address","name":"operator"},{"type":"bool","name":"approved"}],"outputs":[]},{"type":"function","name":"setPrice","constant":false,"payable":false,"inputs":[{"type":"uint256","name":"_newPrice"}],"outputs":[]},{"type":"function","name":"setUri","constant":false,"payable":false,"inputs":[{"type":"string","name":"_newUri"}],"outputs":[]},{"type":"function","name":"supportsInterface","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes4","name":"interfaceId"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"symbol","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"tokenURI","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"_tokenId"}],"outputs":[{"type":"string"}]},{"type":"function","name":"transferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"withdraw","constant":false,"payable":false,"inputs":[],"outputs":[]}]';
// const ABI = '[{"type":"function","name":"mint","constant":false,"stateMutability":"payable","payable":true,"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_quantity"}],"outputs":[]},{"type":"constructor","stateMutability":"payable","payable":true,"inputs":[]},{"type":"event","anonymous":false,"name":"Airdrop","inputs":[{"type":"uint256","name":"tokenId","indexed":false}]},{"type":"event","anonymous":false,"name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"approved","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"operator","indexed":true},{"type":"bool","name":"approved","indexed":false}]},{"type":"event","anonymous":false,"name":"Mint","inputs":[{"type":"uint256","name":"tokenId","indexed":false}]},{"type":"event","anonymous":false,"name":"NewURI","inputs":[{"type":"string","name":"oldURI","indexed":false},{"type":"string","name":"newURI","indexed":false}]},{"type":"event","anonymous":false,"name":"RoleAdminChanged","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"bytes32","name":"previousAdminRole","indexed":true},{"type":"bytes32","name":"newAdminRole","indexed":true}]},{"type":"event","anonymous":false,"name":"RoleGranted","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"address","name":"account","indexed":true},{"type":"address","name":"sender","indexed":true}]},{"type":"event","anonymous":false,"name":"RoleRevoked","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"address","name":"account","indexed":true},{"type":"address","name":"sender","indexed":true}]},{"type":"event","anonymous":false,"name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"function","name":"ADMIN_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"AIRDROPPER_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"DEFAULT_ADMIN_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"MAX_SUPPLY","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"airdrop","constant":false,"payable":false,"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_quantity"}],"outputs":[]},{"type":"function","name":"approve","constant":false,"payable":false,"inputs":[{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"balanceOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"baseExtension","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"baseUri","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"getApproved","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRoleAdmin","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes32","name":"role"}],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"grantRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"hasRole","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"isApprovedForAll","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"},{"type":"address","name":"operator"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"name","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"ownerOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"price","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"renounceRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"revokeRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"},{"type":"bytes","name":"data"}],"outputs":[]},{"type":"function","name":"setApprovalForAll","constant":false,"payable":false,"inputs":[{"type":"address","name":"operator"},{"type":"bool","name":"approved"}],"outputs":[]},{"type":"function","name":"setPrice","constant":false,"payable":false,"inputs":[{"type":"uint256","name":"_newPrice"}],"outputs":[]},{"type":"function","name":"setUri","constant":false,"payable":false,"inputs":[{"type":"string","name":"_newUri"}],"outputs":[]},{"type":"function","name":"supportsInterface","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes4","name":"interfaceId"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"symbol","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"tokenURI","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"_tokenId"}],"outputs":[{"type":"string"}]},{"type":"function","name":"transferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"withdraw","constant":false,"payable":false,"inputs":[],"outputs":[]}]';
const ABI = '[{"type":"function","name":"mint","constant":false,"stateMutability":"payable","payable":true,"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_quantity"}],"outputs":[]},{"type":"constructor","stateMutability":"payable","payable":true,"inputs":[]},{"type":"event","anonymous":false,"name":"Airdrop","inputs":[{"type":"uint256","name":"tokenId","indexed":false}]},{"type":"event","anonymous":false,"name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"approved","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"operator","indexed":true},{"type":"bool","name":"approved","indexed":false}]},{"type":"event","anonymous":false,"name":"Mint","inputs":[{"type":"uint256","name":"tokenId","indexed":false}]},{"type":"event","anonymous":false,"name":"NewURI","inputs":[{"type":"string","name":"oldURI","indexed":false},{"type":"string","name":"newURI","indexed":false}]},{"type":"event","anonymous":false,"name":"RoleAdminChanged","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"bytes32","name":"previousAdminRole","indexed":true},{"type":"bytes32","name":"newAdminRole","indexed":true}]},{"type":"event","anonymous":false,"name":"RoleGranted","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"address","name":"account","indexed":true},{"type":"address","name":"sender","indexed":true}]},{"type":"event","anonymous":false,"name":"RoleRevoked","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"address","name":"account","indexed":true},{"type":"address","name":"sender","indexed":true}]},{"type":"event","anonymous":false,"name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"function","name":"ADMIN_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"AIRDROPPER_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"DEFAULT_ADMIN_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"MAX_SUPPLY","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"airdrop","constant":false,"payable":false,"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_quantity"}],"outputs":[]},{"type":"function","name":"approve","constant":false,"payable":false,"inputs":[{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"balanceOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"baseExtension","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"baseUri","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"getApproved","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRoleAdmin","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes32","name":"role"}],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"grantRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"hasRole","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"isApprovedForAll","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"},{"type":"address","name":"operator"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"name","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"ownerOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"price","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"renounceRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"revokeRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"},{"type":"bytes","name":"data"}],"outputs":[]},{"type":"function","name":"setApprovalForAll","constant":false,"payable":false,"inputs":[{"type":"address","name":"operator"},{"type":"bool","name":"approved"}],"outputs":[]},{"type":"function","name":"setPrice","constant":false,"payable":false,"inputs":[{"type":"uint256","name":"_newPrice"}],"outputs":[]},{"type":"function","name":"setUri","constant":false,"payable":false,"inputs":[{"type":"string","name":"_newUri"}],"outputs":[]},{"type":"function","name":"supportsInterface","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes4","name":"interfaceId"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"symbol","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"tokenURI","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"_tokenId"}],"outputs":[{"type":"string"}]},{"type":"function","name":"transferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]}]';
// const ADDRESS = '0xf66cEb3148f573CcCCf28246F2Eb2AA9178C1668';
const ADDRESS = '0x936eD13DC951d4aF9D57B809414D296bd051904f';
let currentURI = null;

const setPayments = async (mode = 'payment') => {
  const button = document.querySelector("crossmint-pay-button");
  let clientId = '3bb175c4-97f6-46a7-a47b-aca37029590e';
  let mintConfig = '{"type":"erc-721","totalPrice":"0.0005","_quantity":"1","quantity":"1"}';

  if (mode === 'donate') {
    clientId = '09ec02d7-ae19-4c94-b3fe-5f837c2da5a0';
  }

  const radios = document.querySelectorAll('input[type=radio][name="payment-choice"]');
  radios.forEach(radio => radio.addEventListener('change', () => {

    if (radio.value === 'ETH') {
      mintConfig = '{"type":"erc-721","totalPrice":"0.0005","_quantity":"1","quantity":"1"}';
      button.setAttribute("paymentMethod", 'ETH');
      button.setAttribute("mintConfig", mintConfig);

    }
    if (radio.value === 'SOL') {
      mintConfig = '{"type":"erc-721","totalPrice":"0.05","_quantity":"1","quantity":"1"}';
      button.setAttribute("paymentMethod", 'SOL');
      button.setAttribute("mintConfig", mintConfig);

    }
    if (radio.value === '') {
      mintConfig = '{"type":"erc-721","totalPrice":"1","_quantity":"1","quantity":"1"}';
      button.setAttribute("paymentMethod", '');
      button.setAttribute("mintConfig", mintConfig);
    }
  }));
  // button.setAttribute("mintConfig", mintConfig);
  button.setAttribute("clientId", clientId);
};

(async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);

      let accounts = await web3.eth.getAccounts();
      account = accounts[0];
      // document.getElementById('account').textContent = account;
      contract = await new web3.eth.Contract(JSON.parse(ABI), ADDRESS);
      if (account) {
        document.getElementById('metamask-error-notification').classList.add('hidden');
        document.getElementById('prepareAvatar').classList.toggle('hidden');
        document.getElementById('prepareAvatar').onclick = () => {
          savaImage();
        };
        await setPayments();
      }
    } catch (e) {
      // document.getElementById('downloadAvatar').classList.toggle('hidden');
      document.getElementById('metamask-error-notification').classList.remove('hidden');
      await setPayments('donate');
    }
  } else {
    // document.getElementById('downloadAvatar').classList.toggle('hidden');
    document.getElementById('metamask-error-notification').classList.remove('hidden');
    await setPayments('donate');
  }
})();

const savaImage = async () => {
  document.getElementById('loader').classList.toggle('hidden');

  const canvas = document.getElementById("canvas");
  const dataURL = canvas.toDataURL("image/png", 1.0);

  const formData = new FormData();
  const imageName = makeUniqueId(10) + '.png';
  formData.append('avatar', dataURL);
  formData.append('avatarName', imageName);

  fetch("https://files.blockaids.online", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: formData,
    mode: 'no-cors',
  }).then(res => {
    currentURI = 'https://files.blockaids.online/uploads/' + imageName
    console.log(currentURI);
    console.log("Request complete! response:", res);
    // const testURI = 'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg';
    setURI(currentURI);
  });
};

const setURI = async (uri) => {
  try {
    document.getElementById('error-notification').classList.add('hidden');
    const newUri = {
      "name": "BlockAids generated Avatar",
      "description": "100% of money collected from donations under this NFT campaign will be distributed for needs of people living with AIDS and from groups at risk (drug users, LGBT, sexual workers, etc.)",
      "image": uri,
      "external_url": "https://www.crossmint.io"
    };
    if (contract) {
      const result = await contract
        .methods
        .setUri(JSON.stringify(newUri))
        .send({from: account});
      console.log(result);
      if (JSON.stringify(result.events) !== '{}') {
        document.getElementById('generator-wrapper').classList.toggle('hidden');
        document.getElementById('purchase-wrapper').classList.toggle('hidden');
        document.getElementById('currentURI').setAttribute("src", uri);
      } else {
        document.getElementById('error-notification').classList.remove('hidden');
      }
      document.getElementById('loader').classList.toggle('hidden');
    }
  } catch (e) {
    document.getElementById('loader').classList.toggle('hidden');
  }
};

const makeUniqueId = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}