# NCR Challenge

Para iniciar el proyecto ejecutar el comando:

```
  $ yarn dev
```

Para correr las pruebas ejecutar el comando: 
```
  $ yarn test
```

## Algunas consideraciones

¿Como se tendrian que tratar las cuentas con datos incorrectos/inválidos/mal formateados? Por ejemplo: 

### 1. Saldo
```
{
    "e": "1",
    "n": "872378326706",
    "t": "01",
    "saldo": "2-5-0",
    "moneda": "$",
    "tipo_letras": "CA"
}

{
    "e": "1",
    "n": "872378326799",
    "t": "02",
    "saldo": "rai",
    "moneda": "u$s",
    "tipo_letras": "CC"
}
```

En los ejemplos anteriores, el saldo no estaria formateado correctamente como un número (NaN). En casos como este, decidí mostrar el saldo como $0.

### 2. Número de cuenta
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

En el ejemplo, el número de cuenta está vacio. Por lo que no seria válida. En este caso, eliminé (filtrando) la cuenta de la lista.

### 3. Tipos de cuenta
```
  {
      "e": "1",
      "n": "872378326702",
      "t": "01",
      "saldo": "-600",
      "moneda": "$",
      "tipo_letras": "Cc"
  }
```

En el ejemplo, el tipo letra es 'Cc' y consideré en el analisis que las cuentas aceptadas debian ser sensibles a mayusculas, por lo que solo consideré aquellas que sean 'CC' y 'CA'.
