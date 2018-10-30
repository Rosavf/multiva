class Table{

    constructor(){

        this.tableHead();

        this.tableBody();

    }

    readData(json){

        this.data=JSON.parse(json);

    }

    tableHead(){

        this.head = '<thead>'

        this.head.concat('</thead>');

    }

    tableBody(){

        this.body='<tbody>'

        this.body+='<tr>';

        this.body+='<td class="table-title-class">';

        this.body+='TITLE';
        
        this.body+='</td>';

        this.body+='<td class="table-title-class">'

        this.body+='TITLE'
        
        this.body+='</td>'

        this.body+='<td class="table-title-class">'

        this.body+='TITLE';
        
        this.body+='</td>'

        this.body+='<td class="table-title-class">';

        this.body+='TITLE';
        
        this.body+='</td>';

        this.body+='</tr>';

        this.body+='<tr>';

        this.body+='<td class="table-title-class">';

        this.body+='TITLE';
        
        this.body+='</td>';

        this.body+='<td class="table-title-class">'

        this.body+='TITLE'
        
        this.body+='</td>'

        this.body+='<td class="table-title-class">'

        this.body+='TITLE';
        
        this.body+='</td>'

        this.body+='<td class="table-title-class">';

        this.body+='TITLE';
        
        this.body+='</td>';

        this.body+='</tr>';

        this.body+='<tr>';

        this.body+='<td class="table-title-class">';

        this.body+='TITLE';
        
        this.body+='</td>';

        this.body+='<td class="table-title-class">'

        this.body+='TITLE'
        
        this.body+='</td>'

        this.body+='<td class="table-title-class">'

        this.body+='TITLE';
        
        this.body+='</td>'

        this.body+='<td class="table-title-class">';

        this.body+='TITLE';
        
        this.body+='</td>';

        this.body+='</tr>';

        this.body+='<tr>';

        this.body+='<td class="table-title-class">';

        this.body+='TITLE';
        
        this.body+='</td>';

        this.body+='<td class="table-title-class">'

        this.body+='TITLE'
        
        this.body+='</td>'

        this.body+='<td class="table-title-class">'

        this.body+='TITLE';
        
        this.body+='</td>'

        this.body+='<td class="table-title-class">';

        this.body+='TITLE';
        
        this.body+='</td>';

        this.body+='</tr>';

        this.body+='</tbody>';

    }

    write(htmlId){

        this.table='<table class = "table-hover table-fixed">';

        this.table+=this.body;

        this.table+='</table>'

        $(htmlId).html(this.table);
        
    }

}

$(document).ready(function(){

    alert('ok');

    var table = new Table();

    table.write("#tablaMultiservicios");

});