var ctx = new Excel.ExcelClientContext();
var chart = ctx.workbook.worksheets.getItem("Charts").charts.getItem("Chart1");	
chart.dataLabels.showSeriesName = true;
ctx.executeAsync().then();