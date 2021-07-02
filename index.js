var url = "https://run.mocky.io/v3/d53400a3-6126-495e-9d16-0b4414b537b3";
fetch(url)
  .then(response => {
    let responseText = response.text();
    return responseText;
  })
  .then(data => {
    data = data + '}'; //converting into json
    const result = JSON.parse(data);
    console.log(result.clients[0].name);
    let detail = result.clients
    for (let i = 0; i < detail.length; i++) {
      $('.tableData').append(`<tr class="text-muted">
             <th scope="row">
                   <span><b class="color">${detail[i].id}</b> </span>
             </th>
             <td>
                   <span>${detail[i].name} </span>
             </td>
             <td>
                   <span>${detail[i].company} </span>
             </td>
             <td>
                   <span>${detail[i].orderId} </span>
             </td>
             <td>
                   <span>$${detail[i].invoicepaid} </span>
             </td>
             <td>
                   <span>$${detail[i].invoicePending} </span>
             </td>
             <td>
             <i class="fas fa-money-check-alt"></i>
             </td>
              </tr>`)
    }
  })
