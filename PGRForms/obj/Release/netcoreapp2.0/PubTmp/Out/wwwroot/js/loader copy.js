
var editing = true;

var templates = {
  starRating: function(fieldData) {
    return {
      field: '<span id="'+fieldData.name+'">',
      onRender: function() {
        $(document.getElementById(fieldData.name)).rateYo({rating: 3.6});
      }
    };
  }
};


function toggleEdit() {
  document.body.classList.toggle('form-rendered', editing);
  return editing = !editing;
}


jQuery(function($) {
  var options = {
      i18n: {
        locale: 'es-ES'
      },
      templates: templates,
      
      onSave: function(e, formData) {
        toggleEdit();

        $('.render-wrap').empty();
        $('.render-wrap').formRender({
          formData: formData,
          templates: templates
        });
        window.sessionStorage.setItem('formData', JSON.stringify(formData));
      },
    
    
    
    
    }
 
    var formData = `[
      {
        "type": "header",
        "subtype": "h1",
        "label": "Registro Nacional de Delitos de tortura"
      },
      {
        "type": "text",
        "label": "I) NUMERO DE AVERIGUACION PREVIA O CARPETA DE INVESTIGACION",
        "description": "FED/SEIDF/ UEIDT-  /000000/2017​",
        "className": "form-control",
        "name": "text-1521043358842",
        "subtype": "text",
        "maxlength": "20"
      },
      {
        "type": "date",
        "label": "II) FECHA DE INICIO DE INVESTIGACION",
        "className": "form-control",
        "name": "date-1521043793084",
        "value": "01/01/2018"
      },
      {
        "type": "radio-group",
        "label": "<div>III) DELITO POR EL QUE SE INICIA LA CARPETA DE INVESTIGACION</div><div><br></div>",
        "name": "radio-group-1521043868292",
        "values": [
          {
            "label": "TORTURA",
            "value": ""
          },
          {
            "label": "TRATOS O PENAS CRUELES, INHUMANOS O DEGRADANTES",
            "value": "opcin-3"
          },
          {
            "label": "DELITOS VINCULADOS, DESCRITOS EN LOS ART. 30 Y 31 DE LA LEY GENERAL",
            "value": ""
          }
        ]
      }
    ]`
  
    $('.render-wrap').empty();
    $('.render-wrap').formRender({
      formData: formData
    });
  


});


 