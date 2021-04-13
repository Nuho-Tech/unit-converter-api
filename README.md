# Unit Converter API
## API Conversora de unidades 

## Esta API debe:

- Recibir una peticion get con 4 parametros (tipoDeConversion, valor, unidadDelValor, unidadAconvertir)
- Una vez que recibe la peticion, procesar la conversion en el backend
- Responder con el resultado de la conversion en formato JSON

## Ejemplo:
#### Los valores de la peticion se recibiran por parametro en la url de la siguiente forma
#### www.dominio.com/?tipoDeConversion=cm&valor=15&unidadDelValor=cm&unidadAconvertir=m

#### Lo cual debe retornar una respuesta como la siguiente
```javascript
{
    status: successful,
    from: "cm"
    to: "m",
    convertedValue: 0.15
}
```

#### En caso de que se introduzcan mal los datos, u ocurra un error en el servidor, se debe indicar al usuario en la respuesta
### Ejemplo

```javascript
{
    status: "error",
    errorMessage: "No se puede realizar la conversion de metros a kilos",
}
```


# Para el frontend se usara una pagina sencilla hecha solo con html, css y javascript en la cual se hará la peticion a la api con JS de forma asincrona y el resultado se mostrará  de la siguiente manera

![alt text](https://res.cloudinary.com/hiddenberg/image/upload/s--2iuQnV_g--/v1618340442/marketbell/Desktop_-_1_dehqs8.png "Logo Title Text 1")
