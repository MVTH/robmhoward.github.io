var ctx = new Excel.ExcelClientContext();
var range = ctx.workbook.names.getItem("MyChartData").getRange();
var chart = ctx.workbook.worksheets.getItem("Charts").charts.add("pie", range, "auto");
ctx.executeAsync();