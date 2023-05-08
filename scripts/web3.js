let account = null;
let contract = null;
const ABI = '[{"type":"function","name":"mint","constant":false,"stateMutability":"payable","payable":true,"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_quantity"}],"outputs":[]},{"type":"constructor","stateMutability":"payable","payable":true,"inputs":[]},{"type":"event","anonymous":false,"name":"Airdrop","inputs":[{"type":"uint256","name":"tokenId","indexed":false}]},{"type":"event","anonymous":false,"name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"approved","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"operator","indexed":true},{"type":"bool","name":"approved","indexed":false}]},{"type":"event","anonymous":false,"name":"Mint","inputs":[{"type":"uint256","name":"tokenId","indexed":false}]},{"type":"event","anonymous":false,"name":"NewURI","inputs":[{"type":"string","name":"oldURI","indexed":false},{"type":"string","name":"newURI","indexed":false}]},{"type":"event","anonymous":false,"name":"RoleAdminChanged","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"bytes32","name":"previousAdminRole","indexed":true},{"type":"bytes32","name":"newAdminRole","indexed":true}]},{"type":"event","anonymous":false,"name":"RoleGranted","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"address","name":"account","indexed":true},{"type":"address","name":"sender","indexed":true}]},{"type":"event","anonymous":false,"name":"RoleRevoked","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"address","name":"account","indexed":true},{"type":"address","name":"sender","indexed":true}]},{"type":"event","anonymous":false,"name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"function","name":"ADMIN_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"AIRDROPPER_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"DEFAULT_ADMIN_ROLE","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"MAX_SUPPLY","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"airdrop","constant":false,"payable":false,"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_quantity"}],"outputs":[]},{"type":"function","name":"approve","constant":false,"payable":false,"inputs":[{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"balanceOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"baseExtension","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"baseUri","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"getApproved","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRoleAdmin","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes32","name":"role"}],"outputs":[{"type":"bytes32"}]},{"type":"function","name":"grantRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"hasRole","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"isApprovedForAll","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"},{"type":"address","name":"operator"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"name","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"ownerOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"price","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"renounceRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"revokeRole","constant":false,"payable":false,"inputs":[{"type":"bytes32","name":"role"},{"type":"address","name":"account"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"},{"type":"bytes","name":"data"}],"outputs":[]},{"type":"function","name":"setApprovalForAll","constant":false,"payable":false,"inputs":[{"type":"address","name":"operator"},{"type":"bool","name":"approved"}],"outputs":[]},{"type":"function","name":"setPrice","constant":false,"payable":false,"inputs":[{"type":"uint256","name":"_newPrice"}],"outputs":[]},{"type":"function","name":"setUri","constant":false,"payable":false,"inputs":[{"type":"string","name":"_newUri"}],"outputs":[]},{"type":"function","name":"supportsInterface","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes4","name":"interfaceId"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"symbol","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"tokenURI","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"_tokenId"}],"outputs":[{"type":"string"}]},{"type":"function","name":"transferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"withdraw","constant":false,"payable":false,"inputs":[],"outputs":[]}]';
const ADDRESS = '0xf66cEb3148f573CcCCf28246F2Eb2AA9178C1668';

(async () => {
  if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    window.web3 = new Web3(window.ethereum);

    let accounts = await web3.eth.getAccounts();
    account = accounts[0];
    document.getElementById('account').textContent = account;

    contract = await new web3.eth.Contract(JSON.parse(ABI), ADDRESS);


    document.getElementById('prepareAvatar').onclick = () => {
      savaImage();
    };

    // document.getElementById('setUri').onclick = () => {
    //   setURI();
    // };

    // document.getElementById('uploadImage').onclick = () => {
    //   uploadImage();
    // };
  }
})();

const savaImage = async () => {
  document.getElementById('loading').classList.toggle('hidden');

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
    const uri = 'https://files.blockaids.online/uploads/' + imageName
    console.log(uri);
    console.log("Request complete! response:", res);
    // const testURI = 'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg';
    setURI(uri);
  });
};


// const uploadImage = async () => {
//   const formData = new FormData();
//   const imageName = makeUniqueId(10) + '.png';
//   formData.append('avatar', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=\"');
//   formData.append('avatarName', imageName);
//
//   fetch("https://files.blockaids.online", {
//     method: "POST",
//     headers: {'Content-Type': 'application/json'},
//     body: formData,
//     mode: 'no-cors',
//   }).then(res => {
//     console.log(imageName);
//     console.log("Request complete! response:", res);
//   });
// };

const setURI = async (uri) => {
  if (contract) {
    const result = await contract
      .methods
      .setUri(uri)
      .send({from: account});
    console.log(result);
    document.getElementById('loading').classList.toggle('hidden');
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

// document.addEventListener('DOMContentLoaded', async () => {
//   const nodeId = 'ipfs-' + Math.random()
//   const node = await Ipfs.create({repo: nodeId})
//   console.log("Your node: " + nodeId)
//   window.node = node
//   const status = node.isOnline() ? 'online' : 'offline'
//   console.log(`Node status: ${status}`)
//
//   //create a variable with the directory path '/my/beautiful/directory'
//   // and a file 'awesomesause.txt' with the content 'ABC'
//   var files = [{
//     path: '/my/beautiful/directory/firstfile.txt',
//     content: 'ABC'
//   }]
//
//   addFile(files) //add the first file
//
//   //update the 'files' variable to add another file to the directory path '/mybeautiful/directory' in ipfs
//   files = [{
//     path: '/my/beautiful/directory/secondfile.txt',
//     content: 'DEF'
//   }]
//
//   addFile(files) //add the sectond file
//
//   //function to add the files
//   async function addFile(files) {
//     for await (const result of node.add(files)) {
//       console.log(result)
//     }
//   }
// })