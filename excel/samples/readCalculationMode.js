var ctx = new Excel.ExcelClientContext();
var application = ctx.workbook.application;
ctx.load(application);
ctx.executeAsync().then(function() {
	logComment(application.calculationMode);
});