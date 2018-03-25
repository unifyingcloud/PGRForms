var formData = window.sessionStorage.getItem('formData');
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

 


function processForm(formData)
      {

      var options = {
      i18n: {
        locale: 'es-ES'
      },
      templates: templates,
     formData:    formData   ,
       
      onSave: function(e, formData) {
      
         jQuery.support.cors = true;
        $.ajax({
            url: '/api/forms',
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


      }


      $fbTemplate = $(document.getElementById('fb-editor'));
      var formBuilder=$fbTemplate.formBuilder(options);


      }

    
     

  document.getElementById('getXML').addEventListener('click', function() {
   alert(  formBuilder.actions.getData('xml'));
   
  });
 
  document.getElementById('getJSON').addEventListener('click', function() {
    alert(formBuilder.actions.getData('json', true));
  });





jQuery(function($) {
  
   jQuery.support.cors = true;
        $.ajax({
            url: '/api/forms/tortura',
            type: 'GET',
            dataType: 'json',            
            success: function (data) {                
                var formData =data;

               processForm(JSON.stringify(formData)) ;
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });  


      });
    