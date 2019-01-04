'use strict'
    document.querySelector('#dolar').addEventListener('click' ,function(){
        getValue('dolar')
    })

    document.querySelector('#euro').addEventListener('click' ,function(){
        getValue('euro')
    })

    document.querySelector('#bitcoin').addEventListener('click' ,function(){
        getValue('bitcoin')
    })

    function getValue(valueMoney) {
        const url = `https://mindicador.cl/api/${valueMoney}`
        
        const xhttp = new XMLHttpRequest()
        
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                let datos = JSON.parse(this.responseText)
                
                let res = document.querySelector('#res')
                document.querySelector('#moneda').innerHTML= datos.nombre
                res.innerHTML = ''

                for (const i of datos.serie) {
                    res.innerHTML += `
                     <tr>
                    <th scope="row">${i.fecha.slice(0,10)}</th>
                    <td>${i.valor}</td>
                  </tr>`
                }
            }
        }
        xhttp.open('GET',url,true )
        xhttp.send()

    }
