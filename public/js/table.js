class Table{

    constructor(htmlId,data){

        this.readData(data);

        this.tableHead();

        this.tableBody();

        this.write(htmlId);

    }

    readData(data){

        this.data=data;

    }

    tableHead(){

        this.head = '<thead>'

        var header = Object.keys(this.data[0]);

        this.head+='<tr>';

        for(var i=0; i<header.length; i++){

            this.head+='<td class="table-data-class">';

            this.head+=String(header[i]);

            this.head+='</td>';

        }

        this.head+='</tr>';
        
        this.head+='</thead>';

    }

    tableBody(){

        this.body='<tbody>';

            for(var i=0; i<this.data.length; i++){

                this.body+='<tr>'

                var row = this.data[i];

                for(var cell in row){

                    this.body+='<td class="table-data-class">'

                    this.body+=String(row[cell]);
                    
                    this.body+='</td>';

                }

                this.body+='</tr>'

            }

        this.body+='</tbody>';

    }

    write(htmlId){

        this.table='<table class = "table-hover table-fixed">';

        this.table+=this.head;

        this.table+=this.body;

        this.table+='</table>'

        $(htmlId).html(this.table);
        
    }

}