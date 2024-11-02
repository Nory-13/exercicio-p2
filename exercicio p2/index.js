function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value )> ano){
          window.alert('Erro')
    } else{
        fsex = document.getElementsByName('radsex')
        var idade= ano - Number (fano.value)
                 gener = ''
                    img = document.createElement('img')
                       img.setAttribute('id', 'foto')

                       if(fsex[0].checked){
                          gener = 'Masculino'
              
                          if(idade>=0 && idade < 10){
                            img.setAttribute('src', '../Imagens/mustang.jpg')

                          }
                          else if (idade >= 10 && idade < 21 ){
                            img.setAttribute('src', '../Imagens/White Demon.jpg')

                          } 
                          else if (idade< 50){
                            img.setAttribute('src','../Imagens/Doge.jpg')

                          }
                          else {
                            img.setAttribute('src', '../Imagens/P.png')

                          }
                                         

                     }  else if (fsex[1].checked){
                      gener='Femenino'

                      
                      if(idade>=0 && idade<10){
                        img.setAttribute('src', '../Imagens/Mclaren Lovers.jpg')

                      } else if (idade >= 10 && idade < 21 ){

                      } else if (idade< 50){

                      }else {

                      }
                                 
                 }
                  res.style.textAlign ='center'
                      res.innerHTML=`Detectamos ${gener} com ${idade} anos`
                      res.appendChild(img)
}
          

      }
       


          


