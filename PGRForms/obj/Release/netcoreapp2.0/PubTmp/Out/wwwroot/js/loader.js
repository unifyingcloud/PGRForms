 function submitData(formData)
 {


   alert('cache update 1.6');
   //alert(JSON.stringify(formData));
 
  jQuery.support.cors = true;
        $.ajax({
            url: '/api/responses',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            dataType: 'json',            
            success: function () {                
             alert('su formulario se ha guardado');
           },
         error: function (xhr, ajaxOptions, thrownError) {

         if(xhr.status==200)
         {
          alert('su formulario se ha guardado');
           location.reload();
         }
         
        }
        });        
    
 }
  

      
      function processForm(formData)
      {
      var templates = {
  start: function(fieldData) {
    return {
      field: "<div class='col-md-4' id='"+fieldData.name+"'>",
      onRender: function() {

        alert('hello');
       // $(document.getElementById(fieldData.name)).rateYo({rating: 3.6});
      }
    };
  }
};

  //debugger
    $(".render-wrap").empty();
    $(".render-wrap").formRender({
      formData: formData,
      templates: templates,
      notify: {
        error: function(message) {
          return console.error(message);
        },
        success: function(message) {
          return console.log(message);
        },
        warning: function(message) {
          return console.warn(message);
        }
      } 
      
    });
     

   $('.rendered-form').children('div').addClass('form-group col-md-4');
  
   $('.spacing').parent().removeClass('col-md-4').addClass('col-md-12');


   $('#selectlibreproceso').on( 'change', function(data) {

    

  
    if(this.value=='Libre')
    {   
       
        $('#selproceso').attr('disabled','true');
        $('#selsentenciado').attr('disabled','true');

    }else
    {
      
        $('#selproceso').attr('disabled',null);
        $('#selsentenciado').attr('disabled',null);
    }



   }
    );



      $('#selexamenmedico').on( 'change', function(data) {

    

  
    if(this.value=='Si')
    {   
         
            $('#selnotieneexamen').attr('disabled','true');
             $('#selsitieneexamen').attr('disabled',null);
        

    }else
    {
      
         $('#selnotieneexamen').attr('disabled',null);
             $('#selsitieneexamen').attr('disabled','true');
        
        
          

    }



   }
    );






     $('#formulario').submit(function () {

       alert('Su formulario sera enviado');
   Console.log('Su formulario sera enviado');
        if($(this).valid()) {
        alert('formulario validado');

        Console.log('formulario valido');

          
            submitData (formData) ;
        } 
    });

     



      }
  


jQuery(function($) {
  

   jQuery.support.cors = true;
        $.ajax({
            url: '/api/forms/tortura',
            type: 'GET',
            dataType: 'json',            
            success: function (dataReceived) {                
                var formData =dataReceived;
               
               processForm(formData);
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });  

 /*   var formData =
//[{"type":"text","required":true,"label":"I) ​Número de Averiguación Previa o carpeta de Investigacion","description":"FED/SEIDF/ UEIDT-  /000000/2017","placeholder":"FED/SEIDF/ UEIDT-  /000000/2017","className":"form-control ns_","name":"text-1521204256209","subtype":"text","maxlength":"15"},{"type":"date","required":true,"label":"II)Fecha de Inicio de la carpeta de Investigacion","description":"Por favor capture la fecha","placeholder":"01/01/2018","className":"form-control ns_","name":"date2"},{"type":"radio-group","label":"III)delito por el que se Inicia la carpeta de Investigación","name":"radiogroup3","values":[{"label":"INHUMANOS O DEGRADANTES","value":"INHUMANOS O DEGRADANTES"},{"label":"TRATOS O PENAS CRUELES","value":"TRATOS O PENAS CRUELES"},{"label":"DELITOS VINCULADOS DESCRITOS EN LOS ART. 30 Y 31 DE LA LEY GENERAL","value":"DELITOS VINCULADOS DESCRITOS EN LOS ART. 30 Y 31 DE LA LEY GENERAL"},{"label":"TORTURA","value":"TORTURA"}]},{"type":"date","label":"IV) Datos de la Investigacion de Origen","name":"date4"},{"type":"text","label":"Juzgado","className":"form-control ns_","name":"text-1521204256255","subtype":"text"},{"type":"text","label":"Proceso","className":"form-control ns_","name":"text-1521204256260","subtype":"text"},{"type":"text","label":"delito","className":"form-control ns_","name":"text-1521204256265","subtype":"text"},{"type":"text","label":"V) Datos de la Puesta a Disposicion","className":"form-control ns_","name":"text-1521204256267","subtype":"text"},{"type":"autocomplete","label":"Estado","className":"form-control ns_","name":"autocomplete9","values":[{"label":"AGUASCALIENTES","value":"Aguascalientes"},{"label":"BAJA CALIFORNIA","value":"Baja California"},{"label":"BAJA CALIFORNIA SUR","value":"Baja California Sur"},{"label":"CAMPECHE","value":"Campeche"},{"label":"COAHUILA","value":"Coahuila"},{"label":"COLIMA","value":"Colima"},{"label":"CHIAPAS","value":"Chiapas"},{"label":"CHIHUAUA","value":"Chiuahua"},{"label":"CIUDAD DE MÉXICO","value":"Ciudad de México"},{"label":"DURANGO","value":"Durango"},{"label":"GUANAJUATO","value":"Guanajuato"},{"label":"GUERRERO","value":"Guerrero"},{"label":"HIDALGO","value":"Hidalgo"},{"label":"JALISCO","value":"Jalisco"},{"label":"ESTADO DE MÉXICO","value":"Estado de México"},{"label":"MICHOACÁN","value":"Michoacán"},{"label":"MORELOS","value":"Morelos"},{"label":"NAYARIT","value":"Nayarit"},{"label":"NUEVO LEÓN","value":"Nuevo León"},{"label":"OAXACA","value":"Oaxaca"},{"label":"PUEBLA","value":"Puebla"},{"label":"QUERÉTARO","value":"Querétaro"},{"label":"QUINTANA ROO","value":"Quintana Roo"},{"label":"SAN LUIS POTOSÍ","value":"San Luis Potosí"},{"label":"SINALOA","value":"Sinaloa"},{"label":"SONORA","value":"Sonora"},{"label":"TABASCO","value":"Tabasco"},{"label":"TAMAULIPAS","value":"Tamaulipas"},{"label":"TLAXCALA","value":"Tlaxcala"},{"label":"VERACRUZ","value":"Veracruz"},{"label":"YUCATÁN","value":"Yucatán"},{"label":"ZACATECAS","value":"Zacatecas"}]},{"type":"text","label":"Municipio","description":"Municipio","className":"form-control ns_","name":"text-1521204256315","subtype":"text"},{"type":"date","label":"Fecha de la Puesta a Disposicion","name":"date11"},{"type":"text","label":"V) Información Referente a  las Probables Victimas​","className":"form-control ns_","name":"text-1521204256322","subtype":"text"},{"type":"text","label":"V.I) Generales de la Victima​","className":"form-control ns_","name":"text-1521204256326","subtype":"text"},{"type":"text","label":"Nombre(S)","description":"Nombre(S)","className":"form-control ns_","name":"text-1521204256329","subtype":"text"},{"type":"text","label":"Apellido Paterno","description":"Apellido Paterno","className":"form-control ns_","name":"text-1521204256332","subtype":"text"},{"type":"text","label":"Apellido Materno","description":"Apellido Materno","className":"form-control ns_","name":"text-1521204256335","subtype":"text"},{"type":"radio-group","label":"Cuenta Con Medidas de Proteccion","name":"radiogroup17","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"number","label":"Edad","name":"number-1521204256373"},{"type":"text","label":"V.II) Datos Recabados de Conformidad Con Lo Establecido En el Artículo 27 Fracc. Ii, Iii, V, Vi,  Vii Y Viii, de la Ley General Para Prevenir, Investigar Y Sancionar la Tortura Y Otros Tratos Y Penas Crueles, Inhumanos  o degradantes.​","className":"form-control ns_","name":"text-1521204256378","subtype":"text"},{"type":"radio-group","label":"Estado de Gestación","name":"radiogroup20","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"radio-group","label":"Pertenece a Alguna Etnia","name":"radiogroup21","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"radio-group","label":"Actividad","name":"radiogroup22","values":[{"label":"Defensor De Los Derechos Humanos","value":"Defensor De Los Derechos Humanos"},{"label":"Periodista","value":"Periodista"}]},{"type":"radio-group","label":"Discapacidad","name":"radiogroup23","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"radio-group","label":"Nacionalidad","name":"radiogroup24","values":[{"label":"Otra","value":"Otra"},{"label":"Mexicana","value":"Mexicana"}]},{"type":"radio-group","label":"Genero","name":"radiogroup25","values":[{"label":"OTRA ORIENTACIÓN SEXUAL","value":"OTRA ORIENTACIÓN SEXUAL"},{"label":"MUJER","value":"MUJER"}]},{"type":"radio-group","label":"V) Situación Jurídica de la Probable Víctima Ó Víctimas","name":"radiogroup26","values":[{"label":"PRESO","value":"PRESO"},{"label":"LIBRE","value":"LIBRE"}]},{"type":"radio-group","label":"Proceso","name":"radiogroup27","values":[{"label":"RECLUSION","value":"RECLUSION"},{"label":"LIBERTAD","value":"LIBERTAD"}]},{"type":"radio-group","label":"sentenciado","name":"radiogroup28","values":[{"label":"CONDENADO","value":"CONDENADO"},{"label":"ABSUELTO","value":"ABSUELTO"}]},{"type":"radio-group","label":"Viii) denunciante","name":"radiogroup29","values":[{"label":"Particular","value":"Particular"},{"label":"Vista Peritos","value":"Vista Peritos"},{"label":"Vista Ministerial","value":"Vista Ministerial"},{"label":" Vista Judicial","value":" Vista Judicial"},{"label":"Víctima","value":"Víctima"}]},{"type":"radio-group","label":"servidor Publico","name":"radiogroup30","values":[{"label":" Nivel Municipal","value":" Nivel Municipal"},{"label":"Nivel Estatal","value":"Nivel Estatal"}]},{"type":"text","label":"Viii) las Autoridades señaladas Como Probables  Responsables ","className":"form-control ns_","name":"text-1521204256495","subtype":"text"},{"type":"radio-group","label":"Nivel Federal","name":"radiogroup32","values":[{"label":"Policia","value":"Policia"},{"label":"Sedena ","value":"Sedena "},{"label":"Secretaria De Marina","value":"Secretaria De Marina"}]},{"type":"radio-group","label":"Nivel Estatal","name":"radiogroup33","values":[{"label":"Policia","value":"Policia"},{"label":"Sedena ","value":"Sedena "},{"label":"Secretaria De Marina","value":"Secretaria De Marina"}]},{"type":"radio-group","label":"Nivel Municipal","name":"radiogroup34","values":[{"label":"Policia","value":"Policia"},{"label":"Sedena ","value":"Sedena "},{"label":"Secretaria De Marina","value":"Secretaria De Marina"}]},{"type":"text","label":"Xi) Lugar de Los Hechos","className":"form-control ns_","name":"text-1521204256534","subtype":"text"},{"type":"date","label":"Fecha","name":"date36"},{"type":"autocomplete","label":"Estado","className":"form-control ns_","name":"autocomplete37","values":[{"label":"","value":""}]},{"type":"text","label":"Municipio","description":"Municipio","className":"form-control ns_","name":"text-1521204256551","subtype":"text"},{"type":"text","label":"Localidad","description":"Localidad","className":"form-control ns_","name":"text-1521204256552","subtype":"text"},{"type":"text","label":"X)Circunstancias","className":"form-control ns_","name":"text-1521204256557","subtype":"text"},{"type":"radio-group","label":"delito de Tortura","name":"radiogroup41","values":[{"label":"Otro","value":"Otro"},{"label":"Con La Utoridad","value":"Con La Utoridad"},{"label":"En La Detencion, ","value":"En La Detencion, "}]},{"type":"radio-group","label":"delito Tratos o Penas Crueles Inhumanos o degradantes","name":"radiogroup42","values":[{"label":"Otro","value":"Otro"},{"label":"Con La Utoridad","value":"Con La Utoridad"},{"label":"En La Detencion, ","value":"En La Detencion, "}]},{"type":"radio-group","label":"Xi) Tecnicas Utilizadas Como Actos de Tortura","name":"radiogroup43","values":[{"label":"REALIZAR…","value":"REALIZAR…"},{"label":"CONDUCTA","value":"CONDUCTA"}]},{"type":"radio-group","label":"Xii) Tecnicas Utilizadas Como Actos de Tratos o Penas Crueles Inhumanos o degradantes","name":"radiogroup44","values":[{"label":" INSULTOS Y/O HUMILLACIONES","value":" INSULTOS Y/O HUMILLACIONES"},{"label":"MALTRATO DEGRADANTE","value":"MALTRATO DEGRADANTE"}]},{"type":"radio-group","label":"Xiii) Estatus de la Investigación","name":"radiogroup45","values":[{"label":"NO EJERCUCIO DE LA ACCION PENAL","value":"NO EJERCUCIO DE LA ACCION PENAL"},{"label":"ARCHIVO TEMPORAL","value":"ARCHIVO TEMPORAL"}]},{"type":"text","label":"Cuenta Con Examen Medico Psicologico Especializado","className":"form-control ns_","name":"text-1521204256615","subtype":"text"}]
//*/
 

});


 
