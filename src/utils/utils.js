import jsPDF from 'jspdf';
import $ from 'jquery';

export function formatDate() {
    var today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth()+1,
        yyyy = today.getFullYear(),
        hh = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    }
    if(hh<10){
        hh='0'+hh;
    } 
    if(min<10){
        min='0'+min;
    } 
    if(sec<10){
        sec='0'+sec;
    }
    return yyyy+'-'+mm+'-'+dd+' '+hh+':'+min+':'+sec;
}

export function HTMLtoPDF() {
	var pdf = new jsPDF('p', 'pt', 'letter'),
	source = $('#main-content')[0],
	specialElementHandlers = {
		'#bypassme': function (element, renderer) {
			return true
		}
	},
	margins = {
		top: 50,
		left: 60,
		width: 545
    };
    console.log($(source).html());
	pdf.fromHTML(
		source // HTML string or DOM elem ref.
		, margins.left // x coord
		, margins.top // y coord
		, {
			'width': margins.width // max width of content on PDF
			, 'elementHandlers': specialElementHandlers
		},
		function (dispose) {
			// dispose: object with X, Y of the last line add to the PDF
			//          this allow the insertion of new lines after html
			pdf.save('html2pdf.pdf');
		}
	)
}