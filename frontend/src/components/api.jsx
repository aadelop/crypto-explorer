export async function getBlock(block){
    const response = fetch(`http://localhost:3333/block/${block.queryKey[1]}`)
     .then(response => response.json())
     .then(data => {
         return data
     });
     return response;
 }

 export async function getTx(tx){
    const response = fetch(`http://localhost:3333/tx/${tx.queryKey[1]}`)
     .then(response => response.json())
     .then(data => {
         return data
     });
     return response;
 }

 export async function getBalance(balance){
    const response = fetch(`http://localhost:3333/balance/${balance.queryKey[1]}`)
     .then(response => response.json())
     .then(data => {
         return data
     });
     return response;
 }

