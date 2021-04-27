<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>


    Considere el siguiente problema:

    Escriba un programa corto que permita generar un pequeño gráfico matricial tal que :
    
     N = 5 
    
        *
       **
      ***
     ****
    *****

    Observe que su base y altura son ambas iguales.
    Cada iteración define un salto de línea.
    La imagen se dibuja usando símbolos de asterisco '*' y espacios.
    La última línea no le precede ningún espacio.   
    
    El resultado se debe de ser un String con el cálculo del gráfico matricial con 'N' Tiers.
    
    
    Se atiente al siguiente ejemplo:
   
    N = 1     N = 2     N = 3     N = 4    ...    N
    
        *         *         *         *          
                 **        **        **        
                          ***       ***       
                                   ****      
                                  
    

    En la carpeta 'test/test01.js' se encuentra el fichero con la definición de nuestro método vacío.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes hacer PR's ilimitadas e ir validando poco a poco la solución contra nuestro respositorio con CI.
    Puedes trabajar en local y subir la solución haciendo un PR a nuestro repositorio.
    Cuando se envíe la PR final, debes indicar el tiempo de dedicación y los intentos que has hecho.
    También puedes añadir un comentario para dar cualquier tipo de feedback.
    
    En caso de duda, revisa en el apartado de 'Referencias'.       
    



    [Suite Tests]
    
    const tiers = require('./test01.js');

	test('Tier with N: 0', function () {
		var expected = "";
		var result = tiers();
		expect(result).toBe(expected);
	});

	test('Tier with N: 1', function () {
		var expected = ... ;
		var result = tiers(1);
		expect(result).toBe(expected);
	});
	
	test('Tier with N: 5', function () {
		var expected = ... ;
		var result = tiers(5);
		expect(result).toBe(expected);
	});
	
	test('Tier with N: 20', function () {
		var expected = ... ;
		var result = tiers(20);
		expect(result).toBe(expected);
	});
	
	test('Tier with N: 30', function () {
		var expected = ... ;
		var result = tiers(30);
		expect(result).toBe(expected);
	});
	
	test('Tier with N: 50', function () {
		var expected = ... ;
		var result = tiers(50);
		expect(result).toBe(expected);
	});
	
	test('Tier with N: 100', function () {
		var expected = ... ;
		var result = tiers(100);
		expect(result).toBe(expected);
	});
	
	
	PASS test/suite.test.js
	  v Tier with N: 0 (4ms)
	  v Tier with N: 1
	  v Tier with N: 5 (1ms)
	  v Tier with N: 20
	  v Tier with N: 30
	  v Tier with N: 50 (1ms)
	  v Tier with N: 100

	Test Suites: 1 passed, 1 total
	Tests:       7 passed, 7 total
	Snapshots:   0 total
	Time:        3.161s
	Ran all test suites.


## Referencias

* [Tutorial - Testing Automatizado](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-FFFF/blob/master/README.md)
