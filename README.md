# NCR Challenge

Para iniciar el proyecto ejecutar el comando:

```
  $ yarn dev
```

Para correr las pruebas ejecutar el comando: 
```
  $ yarn test
```

## Consideraciones

¿Como se tendrian que tratar las cuentas con datos incorrectos/inválidos/mal formateados? Por ejemplo: 

```
{
    "e": "1",
    "n": "872378326706",
    "t": "01",
    "saldo": "2-5-0",
    "moneda": "$",
    "tipo_letras": "CA"
}
```

En los ejemplos anteriores, el saldo no estaria formateado correctamente como un número.

```
{
    "e": "1",
    "n": " ",
    "t": "01",
    "saldo": "6458925", 
    "moneda": "$",
    "tipo_letras": "CC"
}
```

En el ejemplo, el número de cuenta está vacio. Por lo que no seria válida.
