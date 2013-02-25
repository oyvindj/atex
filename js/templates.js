function require_template(templateName) {
    var template = $('#' + templateName);
    if (template.length === 0) {
        var tmpl_dir = './templates';
        var tmpl_url = tmpl_dir + '/' + templateName + '.html';
        var tmpl_string = '';

        $.ajax({
            url: tmpl_url,
            method: 'GET',
            async: false,
            contentType: 'text',
            success: function (data) {
                tmpl_string = data;
            }
        });

        $('head').append('<script id="' + 
        templateName + '" type="text/template">' + tmpl_string + '<\/script>');
    }
}